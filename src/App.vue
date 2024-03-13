<script setup>
  import Navbar from './components/Navbar.vue'
  import About from './components/About.vue';
  import Skill from './components/Skill.vue';
  import Experience from './components/Experience.vue'
  import Hero from './components/Hero.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="">
    <Navbar />  <!-- component Navbar -->
    <!-- begin component -->
    <div class="">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Hero />
        </div>
      </div>
    </div>
    <!-- <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#172554" fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,176C672,181,768,139,864,122.7C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg> -->

    <div class="">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <About />
        </div>
      </div>
    </div>
    <!-- <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#f7fafc" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,112C672,117,768,171,864,186.7C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg> -->

    <div class=" py-28">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Skill />
        </div>
      </div>
    </div>

    <div class=" py-28">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Experience />
        </div>
      </div>
    </div>

    <div class="">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Contact />
        </div>
      </div>
    </div>
      <!-- end component -->
    <Footer /> <!-- component Footer -->
  </div>
</template>
