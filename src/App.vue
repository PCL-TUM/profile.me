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
    <div class="bg-blue-950">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Hero />
        </div>
      </div>
    </div>

    <div class="bg-slate-50">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <About />
        </div>
      </div>
    </div>

    <div class="bg-white py-28">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Skill />
        </div>
      </div>
    </div>

    <div class="bg-slate-50 py-28">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Experience />
        </div>
      </div>
    </div>

    <div class="bg-white">
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
