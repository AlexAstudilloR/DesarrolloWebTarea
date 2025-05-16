<template>
  <div class="layout">
    <AppHeader />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 20px;
  background: #121212;
}
</style>
