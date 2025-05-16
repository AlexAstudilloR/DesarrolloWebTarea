<template>
  <form @submit.prevent="submitReview" class="form">
    <label>Nombre</label>
    <input type="text" v-model="form.nombre" placeholder="Tu nombre" required />

    <label>Email</label>
    <input type="email" v-model="form.email" placeholder="Tu email" required />

    <label>Película</label>
    <select v-model="form.pelicula" required>
      <option disabled value="">Selecciona una película</option>
      <option>Interestelar</option>
      <option>Avatar</option>
      <option>Dune</option>
      <option>Matrix</option>
    </select>

    <label>Categoría</label>
    <select v-model="form.categoria" required>
      <option disabled value="">Selecciona una categoría</option>
      <option>Ciencia Ficción</option>
      <option>Drama</option>
      <option>Acción</option>
      <option>Terror</option>
    </select>

    <label>Descripción</label>
    <textarea v-model="form.descripcion" placeholder="Escribe una breve descripción..." required></textarea>

    <label>Fecha</label>
    <input type="date" v-model="form.fecha" required />

    <label>Reseña</label>
    <textarea v-model="form.mensaje" placeholder="Escribe tu opinión..." required></textarea>

    <button type="submit">Enviar reseña</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        pelicula: '',
        categoria: '',
        descripcion: '',
        fecha: '',
        mensaje: ''
      }
    };
  },
  methods: {
    async submitReview() {
      try {
        await axios.post('http://localhost:3000/reseñas', this.form);
        alert('¡Reseña enviada!');
        this.form = { nombre: '', email: '', pelicula: '', categoria: '', descripcion: '', fecha: '', mensaje: '' };
      } catch (error) {
        console.error(error);
        alert('Error al enviar la reseña');
      }
    }
  }
};
</script>

<style scoped>
.form {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
}
label {
  margin-top: 10px;
  display: block;
  font-weight: bold;
}
input, select, textarea {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  background: #333;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
button {
  background-color: #1db954;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
}
button:hover {
  background-color: #17a74a;
}
</style>
