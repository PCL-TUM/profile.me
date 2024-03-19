<template lang="">
  
  <div class="text-base-content bg-base-100 sticky top-0 z-30 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] rounded-b-xl shadow-lg border-orange-600">
    
    <!-- begin mobile screen -->
    <div class="md:hidden">
      <div class="navbar rounded-b-xl shadow-md">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-72">
              <li><a href="#home" class="p-4">Home</a></li>
              <li><a href="#about" class="p-4">About</a></li>
              <li><a href="#experience" class="p-4">Experience</a></li>
              <li><a href="#skill" class="p-4">Skill</a></li>
              <li>
                <details open>
                  <summary class="p-4">
                    Project
                  </summary>
                  <ul class="p-2 bg-base-100 rounded-t-none">
                    <li><a href="#p_folio" class="p-4">Folio Profile</a></li>
                    <li><a href="#p_psip" class="p-4">PSIP : Project<span class="badge badge-sm shadow-lg border-orange-600">university</span></a></li>
                    <li><a href="#p_bluewind" class="p-4">Bluewind <span class="badge badge-sm shadow-lg border-orange-600">internship</span></a></li>
                    <li><a href="#p_borrow" class="p-4">Borrow Equpment <span class="badge badge-sm shadow-lg border-orange-600">freelance</span></a></li>
                    <li><a href="#p_banmai" class="p-4">Banmai service</a></li>
                  </ul>
                </details>
              </li>
              <li><a href="#contact" class="p-4">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a href="#home" class="btn btn-ghost font-semibold text-xl hover:bg-white">
            <img src="https://cdn-icons-png.flaticon.com/512/7316/7316704.png" width="25" height="15" alt="" class="pb-0.5">
            <span class="pt-0.5">PCL.Dev</span>
          </a>
        </div>
        <div class="navbar-end">
        <!-- empty fulid -->
        </div>
      </div>
    </div>
    <!-- end mobile screen -->
    
    <!-- begin windows screen -->
    <div class="hidden md:flex rounded-b-xl shadow-md">
      <div class="container w-full mx-auto px-5">
        <div class="navbar border-b-1">
          <div class="flex-1">
            <a href="#home" class="btn btn-ghost font-semibold text-xl hover:bg-white">
              <img src="https://cdn-icons-png.flaticon.com/512/7316/7316704.png" width="25" height="15" alt="" class="pb-0.5">
              <span class="pt-0.5">PCL.Dev</span>
            </a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skill">Skill</a></li>
              <li class="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <div tabindex="0" role="button" class="">Project 
                  <svg class="-mr-1 h-5 w-5 text-[#3a4f6b]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-3 pt-5 bg-white shadow-lg rounded-xl rounded-t-none w-80">
                  <span class="menu-title flex items-center gap-4 px-3 py-0.5">
                    Project
                  </span> 
                  <ul class="p-3">
                    <li><a href="#p_folio" class="p-3">Folio Profile</a></li>
                    <li><a href="#p_psip" class="p-3">PSIP : Project<span class="badge badge-sm shadow-lg border-orange-600">university</span></a></li>
                    <li><a href="#p_bluewind" class="p-3">Bluewind Solution<span class="badge badge-sm shadow-lg border-orange-600">internship</span></a></li>
                    <li><a href="#p_borrow" class="p-3">Borrow Equpment <span class="badge badge-sm shadow-lg border-orange-600">freelance</span></a></li>
                    <li><a href="#p_banmai" class="p-3">Banmai service</a></li>
                  </ul> 
                </ul>
              </li>
              <!-- <li class="dropdown dropdown-hover">
                <details tabindex="0" class="dropdown-end">
                  <summary>
                    Project
                  </summary>
                  <ul tabindex="0" class="dropdown-content z-[1] menu p-3 bg-base-100 shadow-lg rounded-t-none w-80">
                    <span class="menu-title flex items-center gap-4 px-3 py-0.5">
                      Project
                    </span> 
                    <ul class="p-3">
                      <li><a href="#p_folio" class="p-3">Folio Profile</a></li>
                      <li><a href="#p_psip" class="p-3">PSIP : Project<span class="badge badge-sm shadow-lg border-orange-600">university</span></a></li>
                      <li><a href="#p_bluewind" class="p-3">Bluewind Solution<span class="badge badge-sm shadow-lg border-orange-600">internship</span></a></li>
                      <li><a href="#p_borrow" class="p-3">Borrow Equpment <span class="badge badge-sm shadow-lg border-orange-600">freelance</span></a></li>
                      <li><a href="#p_banmai" class="p-3">Banmai service</a></li>
                    </ul> 
                </ul>
                </details>
              </li> -->
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end windows screen -->
  </div>
</template>

<script>
import { ReArrowDropDownLine } from "@kalimahapps/vue-icons";
  export default {
    components: {
			ReArrowDropDownLine
		}
  }
</script>

<style>

</style>