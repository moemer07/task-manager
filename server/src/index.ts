import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Tasks routes (placeholder)
app.get('/api/tasks', (req, res) => {
  res.json({ tasks: [] })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
