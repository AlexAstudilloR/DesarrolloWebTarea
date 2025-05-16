import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/movies'; // Ajusta según tu backend

// Obtener todas las películas
export const obtenerPeliculas = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener películas:', error);
    throw error;
  }
};

// Enviar una nueva reseña
export const enviarResena = async (nombrePelicula, resena) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/review`, {
      nombre: nombrePelicula,
      reseña: resena
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar reseña:', error);
    throw error;
  }
};
