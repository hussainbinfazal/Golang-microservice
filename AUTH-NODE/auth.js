import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google"
import GitHub from "@auth/express/providers/github"

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
}

export const auth = ExpressAuth(authConfig)