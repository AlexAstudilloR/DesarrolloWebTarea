import {readFile,writeFile} from 'fs/promises'
import path from 'path'
export const getAllMovies = async (req, res) => {
  try {
    const filePath = path.resolve('data/movies.json');
    const data = await readFile(filePath, 'utf-8');
    const movies = JSON.parse(data);
    res.json(movies);
  } catch (error) {
    console.error('Error al leer el archivo de películas:', error);
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};

