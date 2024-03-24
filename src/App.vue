<script setup>
  import Navbar from './components/Navbar.vue'
  import About from './components/About.vue';
  import Skill from './components/Skill.vue';
  import Experience from './components/Experience.vue';
  import Project from './components/Project.vue'
  import Hero from './components/Hero.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-blue-950 to-sky-900">
    <Navbar />  <!-- component Navbar -->
    <!-- begin component -->
    <div class="">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Hero />
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-center">
      <a href="#about" class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg class="w-6 h-6 text-orange-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div> -->
    
    <svg id="" class="bg-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,69.3C640,75,800,149,960,165.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>

    <div class="bg-white">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <About />
        </div>
      </div>
    </div>
    <svg id="wave" class="bg-slate-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>

    <div class=" bg-slate-50 ">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Experience />
        </div>
      </div>
    </div>
    <svg id="wave" class="bg-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#f7fafc" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>

    <div class=" bg-slate-100 ">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Skill />
        </div>
      </div>
    </div>
    <svg id="wave" class="bg-slate-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#f2f6fa" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>

    <div class="bg-slate-50 ">
      <div class="container w-full mx-auto px-5">
        <div class="sm:px-5">
          <Project />
        </div>
      </div>
    </div>
    <svg id="wave" class="bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#f7fafc" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,240C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>

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

<script>
  import AosVue from "aos-vue";
  export default {
    components: { AosVue },
  };
</script>