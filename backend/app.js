import express from 'express'
import movieRouter from './routes/movieRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import { fileURLToPath } from 'url'
import path from 'path'
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', movieRouter)
app.use('/api/reviews', reviewRoutes)
app.listen(PORT, () => {
    console.log(`Conectado al puerto ${PORT}`)
})
