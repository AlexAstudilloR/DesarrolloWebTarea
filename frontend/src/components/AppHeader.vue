<template>
  <header>
    <h1>🎬 MovieReview</h1>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/registro">Agregar reseña</router-link>
      <router-link to="/lista">Ver reseñas</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #181818;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 100;
}
nav a {
  margin-left: 20px;
  color: #1db954;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>
