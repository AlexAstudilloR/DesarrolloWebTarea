<template>
  <div class="review-list">
    <div v-if="reviews.length === 0">
      <p>No hay reseñas disponibles.</p>
    </div>
    <ul v-else>
      <li v-for="(review, index) in reviews" :key="index" class="review-card">
        <h3>{{ review.nombre }}</h3>
        <p><strong>Película:</strong> {{ review.categoria }}</p>
        <p><strong>Fecha:</strong> {{ review.fecha }}</p>
        <p class="descripcion">{{ review.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getReviews } from '@/services/apiReview.js'

export default {
  name: 'ReviewList',
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    this.reviews = await getReviews()
  }
}
</script>

<style scoped>
.review-list {
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  color: white;
}

.review-card {
  background: #1e1e1e;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  
  list-style-type: none;
}

.review-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #1db954;
}

.review-card p {
  margin: 5px 0;
}

.descripcion {
  color: #ccc;
}
</style>
