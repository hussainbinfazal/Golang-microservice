import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google"
import GitHub from "@auth/express/providers/github"
import Credentials from "@auth/express/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials
        
        if (!email || !password) return null
        
        const user = await prisma.user.findUnique({
          where: { email }
        })
        
        if (!user || !user.password) return null
        
        const isValidPassword = await bcrypt.compare(password, user.password)
        
        if (!isValidPassword) return null
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.username = token.preferred_username || token.name;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/signin",
    signOut: "/",
  },

  secret: process.env.AUTH_SECRET,
  trustHost: true,
}

export const auth = ExpressAuth(authConfig)