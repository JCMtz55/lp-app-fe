<script setup>
import Navbar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="py-5 text-center container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.navbar-brand {
  color: white;
}
.navbar {
  background-color: #ea4c89 !important;
}
.nav-item {
  min-width: 80px;
  text-align: center;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.nav-item a:hover {
  color: rgb(0, 248, 153) !important;
  cursor: pointer;
}
</style>
