<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Descubre y Publica Reseñas <br /> De Tus Películas Favoritas</h1>
      <p>Explora lo que otros opinan y deja tu huella cinéfila 🎥</p>
      <div class="buttons">
        <router-link to="/registro" class="btn blue">Agregar Reseña</router-link>
        <router-link to="/lista" class="btn dark">Ver Reseñas</router-link>
      </div>
    </div>
    <div class="hero-image">
      <img src="https://www.shareicon.net/data/512x512/2016/07/10/119565_camera_512x512.png" alt="Hero" />
    </div>
  </section>

  <section class="carousel">
    <h2>🎞️ Películas Populares</h2>
    <div class="cards">
      <div v-for="(pelicula, index) in peliculas" :key="index" class="card">
        <img :src="pelicula.urlIMG" alt="Imagen de película" />
        <h3>{{ pelicula.nombre }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { obtenerPeliculas } from '@/services/api';

export default {
  data() {
    return {
      peliculas: []
    };
  },
  async created() {
    try {
      this.peliculas = await obtenerPeliculas();
    } catch (error) {
      console.error('No se pudieron cargar las películas:', error);
    }
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 30px;
  background: #0e0e10;
  color: white;
}
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #bbb;
}
.buttons .btn {
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  margin-right: 15px;
  transition: background 0.3s ease;
  text-decoration: none;
}
.btn.blue {
  background-color: #1db954;
  color: white;
}
.btn.dark {
  background-color: #222;
  color: #fff;
}
.btn:hover {
  opacity: 0.9;
}
.hero-image img {
  width: 280px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.carousel {
  background: #111;
  padding: 30px;
}
.carousel h2 {
  color: #1db954;
  margin-bottom: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.card {
  background: #1e1e1e;
  border-radius: 10px;
  width: 160px;
  min-width: 160px;
  padding: 15px;
  color: white;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}
.card img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.card:hover {
  transform: scale(1.01);
}
</style>
