const API_BASE_URL = 'http://localhost:3000/api/reviews'


export const getReviews = async () => {
  try {
    const response = await fetch(API_BASE_URL)
    if (!response.ok) {
      throw new Error('Error al obtener las reseñas')
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

/**
 * Crea una nueva reseña
 * @param {Object} review - Objeto con los campos: nombre, email, descripcion, fecha, categoria
 */
export const createReview = async (review) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Error al crear la reseña')
    }

    return data
  } catch (error) {
    console.error(error)
    return { error: error.message }
  }
}
