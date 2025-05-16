<template>
  <form @submit.prevent="enviarFormulario" class="formulario">
    <div class="campo">
      <label for="nombre">Nombre:</label>
      <input v-model="form.nombre" type="text" id="nombre" required />
    </div>

    <div class="campo">
      <label for="email">Correo:</label>
      <input v-model="form.email" type="email" id="email" required />
    </div>

    <div class="campo">
      <label for="categoria">Película:</label>
      <select v-model="form.categoria" id="categoria" required>
        <option disabled value="">Seleccione una película</option>
        <option v-for="(pelicula, index) in peliculas" :key="index" :value="pelicula.nombre">
          {{ pelicula.nombre }}
        </option>
      </select>
    </div>

    <div class="campo">
      <label for="descripcion">Reseña:</label>
      <textarea v-model="form.descripcion" id="descripcion" required></textarea>
    </div>

    <div class="campo">
      <label for="fecha">Fecha:</label>
      <input v-model="form.fecha" type="date" id="fecha" required />
    </div>

    <button type="submit" class="btn">Guardar Reseña</button>
  </form>
</template>

<script>
import { obtenerPeliculas } from '@/services/api.js';
import { createReview } from '@/services/apiReview.js';

export default {
  name: 'ReviewForm',
  data() {
    return {
      peliculas: [],
      form: {
        nombre: '',
        email: '',
        descripcion: '',
        fecha: '',
        categoria: ''
      }
    };
  },
  async created() {
    try {
      this.peliculas = await obtenerPeliculas();
    } catch (error) {
      console.error('Error al obtener películas:', error);
    }
  },
  methods: {
    async enviarFormulario() {
      try {
        await createReview(this.form);
        alert('Reseña enviada con éxito');
        this.form = {
          nombre: '',
          email: '',
          descripcion: '',
          fecha: '',
          categoria: ''
        };
      } catch (error) {
        console.error('Error al enviar reseña:', error);
        alert('Error al guardar la reseña');
      }
    }
  }
};
</script>

<style scoped>
.formulario {
  max-width: 400px;
  margin: auto;
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  color: white;
}

.campo {
  margin-bottom: 20px;
}

.campo label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1.1rem;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%; /* Mismo ancho para todos */
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #333;
  background: #222;
  color: white;
  font-size: 1rem;
  box-sizing: border-box; /* Para que el padding no aumente el ancho total */
}

.campo textarea {
  height: 100px; /* Altura más compacta */
  resize: none;
  overflow-y: auto; /* Scroll si se escribe más texto */
}


button[type='submit'] {
  background-color: #1db954;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

button[type='submit']:hover {
  background-color: #17a34a;
}
</style>
