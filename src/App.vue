<script setup>
  import Navbar from './components/Navbar.vue'
  import About from './components/About.vue';
  import Experience from './components/Experience.vue'
</script>

<template>
  <div>
    <Navbar />  <!-- component Navbar -->
    <div class="container w-full mx-auto px-5">
      <div class="sm:px-5">
        <About />
        <Experience />
      </div>
    </div>
  </div>
</template>


