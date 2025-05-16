import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const reviewsPath = path.join(__dirname, '../data/reviews.json')

// Obtener todas las reseñas
export const getReviews = async (req, res) => {
  try {
    const data = await fs.readFile(reviewsPath, 'utf-8')
    const reviews = JSON.parse(data)
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ message: 'Error al leer las reseñas', error })
  }
}

// Crear una nueva reseña
export const createReview = async (req, res) => {
  const { nombre, email, descripcion, fecha, categoria } = req.body

  if (!nombre || !email || !descripcion || !fecha || !categoria) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' })
  }

  try {
    const data = await fs.readFile(reviewsPath, 'utf-8')
    const reviews = JSON.parse(data)

    const nuevaReview = { nombre, email, descripcion, fecha, categoria }
    reviews.push(nuevaReview)

    await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2))
    res.status(201).json({ message: 'Reseña creada correctamente', review: nuevaReview })
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la reseña', error })
  }
}
