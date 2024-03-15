<script setup>
import LoginBtn from '@/components/LoginBtn.vue'
</script>

<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Welcome!</h1>
          <h2>Please login to use the application</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <LoginBtn></LoginBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-content: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
}
</style>
