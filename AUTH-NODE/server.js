import express from "express"
import { auth } from "./auth.js"
import { requireAuth, optionalAuth } from "./middleware.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true)

// Auth routes
app.use("/auth/*", auth)

// Protected route using middleware
app.get("/protected", requireAuth, (req, res) => {
  res.json({ message: "Protected content", user: req.user })
})

// Optional auth route
app.get("/profile", optionalAuth, (req, res) => {
  if (req.user) {
    res.json({ message: "Welcome back!", user: req.user })
  } else {
    res.json({ message: "Welcome guest!" })
  }
})

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Auth Service" })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`🔐 Auth server is running on port ${process.env.PORT || 3000}`)
});