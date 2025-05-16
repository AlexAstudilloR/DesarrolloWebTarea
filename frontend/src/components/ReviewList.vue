<template>
  <div class="scrollable">
    <div v-for="item in reseñas" :key="item.id" style="margin-bottom: 20px; border-bottom: 1px solid #444; padding-bottom: 10px;">
      <h3>{{ item.nombre }} - {{ item.categoria }}</h3>
      <p>{{ item.descripcion }}</p>
      <small>{{ item.email }} | {{ item.fecha }}</small>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reseñas: []
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/reseñas');
      this.reseñas = res.data;
    } catch (error) {
      console.error('Error al obtener reseñas:', error);
    }
  }
};
</script>
