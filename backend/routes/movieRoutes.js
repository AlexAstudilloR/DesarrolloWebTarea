import { Router } from "express";
import { getAllMovies } from "../controllers/movieControllers.js";

const movieRouter= Router();

movieRouter.get('/movies',getAllMovies)



export default movieRouter