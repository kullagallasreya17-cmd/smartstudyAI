import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { createServer } from 'http'
import { initSocket } from './sockets/index.js'
import routes from './routes/index.js'
import { errorMiddleware } from './middleware/error.middleware.js'
import { loggerMiddleware } from './middleware/logger.middleware.js'
import { connectDB } from './config/db.js'
import { connectRedis } from './config/redis.js'

const app = express()
const httpServer = createServer(app)

// Middleware
app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(loggerMiddleware)

// Routes
app.use('/api', routes)
app.get('/health', (_, res) => res.json({ status: 'ok', timestamp: new Date() }))

// Error handler (must be last)
app.use(errorMiddleware)

// Socket.IO
initSocket(httpServer)

const PORT = process.env.BACKEND_PORT || 4000

async function start() {
  await connectDB()
  await connectRedis()
  httpServer.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`))
}

start()
