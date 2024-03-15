<script setup>
import { useAuthStore } from '@/stores/auth.store'
const auth = useAuthStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Arithmetic Calculator</a>
      <nav v-if="auth.user" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/reports">Reports</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-light" @click="auth.logout()">Log out</button>
        </form>
      </nav>
    </div>
  </nav>
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
