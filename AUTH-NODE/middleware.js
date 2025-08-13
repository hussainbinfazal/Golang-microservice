import { auth } from "./auth.js"

export const requireAuth = async (req, res, next) => {
  try {
    const session = await auth(req, res)
    
    if (!session?.user) {
      return res.status(401).json({ 
        error: "Unauthorized", 
        message: "Please sign in to access this resource" 
      })
    }
    
    req.user = session.user
    next()
  } catch (error) {
    return res.status(500).json({ 
      error: "Authentication error", 
      message: error.message 
    })
  }
}

export const optionalAuth = async (req, res, next) => {
  try {
    const session = await auth(req, res)
    req.user = session?.user || null
    next()
  } catch (error) {
    req.user = null
    next()
  }
}