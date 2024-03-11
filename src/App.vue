<script setup>
  import Navbar from './components/Navbar.vue'
  import About from './components/About.vue';
  import Skill from './components/Skill.vue';
  import Experience from './components/Experience.vue'
  import Hero from './components/Hero.vue';
</script>

<template>
  <div class="">
    <Navbar />  <!-- component Navbar -->
    <div class="container w-full mx-auto px-5">
      <div class="sm:px-5">
        <Hero />
        <About />
        <Skill />
        <Experience />
      </div>
    </div>
  </div>
</template>
