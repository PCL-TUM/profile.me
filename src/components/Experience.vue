<template lang="">
  <div>

    <div class="py-16 grid gap-y-20">
      
      <div class="flex flex-col w-full xl:flex-row gap-4"> 
        <div class="flex-grow place-items-center w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <div class="carousel carousel-center">
                <div id="p_folio_item1" class="carousel-item relative w-full">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                  <div class="absolute flex justify-between transform -translate-y-1/3 left-1 right-1 top-1/2">
                    <a href="#p_folio_item2" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❮</a> 
                    <a href="#p_folio_item2" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❯</a>
                  </div>   
                </div> 
                <div id="p_folio_item2" class="carousel-item relative w-full">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt="">
                  <div class="absolute flex justify-between transform -translate-y-1/3 left-1 right-1 top-1/2">
                    <a href="#p_folio_item1" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❮</a> 
                    <a href="#p_folio_item1" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❯</a>
                  </div> 
                </div> 
              </div>
              <!-- end carousel -->
            </div>
          </div>
          
          <div class="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-600"></div>
          </div>
          <!-- end Laptop mockup  -->
        </div> 

        <div class="flex-grow place-items-center flex justify-center w-full xl:w-1/2">
          <div class="text-center 2xl:text-left">
            <h4 class="font-normal text-base">This project</h4>
            <h1 class="font-bold text-4xl">Folio Profile</h1>

            <h4 class="pt-5 font-normal text-base">
              This project details my personal information, abilities, education, jobs and contact me, And this project am deploy on github page is demo wabsite for profile me.
            </h4>
            <h4 class="pt-5 font-bold text-xl">Tools</h4>
            <div class="pt-3 font-bold text-5xl flex justify-center 2xl:justify-start gap-4"> 
              <VsFileTypeVite />
              <DeVuejsOriginal />
              <DeTailwindcssPlain />
              <div class="flex flex-row gap-4">
                <img src="https://daisyui.com/images/daisyui-logo/daisyui-logotype.svg" class="h-auto max-w-36" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end project folio  -->

      <!-- begin project folio  -->
      <div class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
        <div class="flex-grow place-items-cente w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <div class="carousel carousel-center">
                <div id="item1" class="carousel-item relative w-full">
                  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                  <div class="absolute flex justify-between transform -translate-y-1/3 left-1 right-1 top-1/2">
                    <a href="#item3" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❮</a> 
                    <a href="#item2" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❯</a>
                  </div>   
                </div> 
                <div id="item2" class="carousel-item relative w-full">
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" class="h-[156px] md:h-[278px] w-full rounded-lg" alt="">
                  <div class="absolute flex justify-between transform -translate-y-1/3 left-1 right-1 top-1/2">
                    <a href="#item1" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❮</a> 
                    <a href="#item3" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❯</a>
                  </div> 
                </div> 
                <div id="item3" class="carousel-item relative w-full">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" class="h-[156px] md:h-[278px] w-full rounded-lg" alt="">
                  <div class="absolute flex justify-between transform -translate-y-1/3 left-1 right-1 top-1/2">
                    <a href="#item2" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❮</a> 
                    <a href="#item1" class="btn btn-sm btn-circle opacity-50 hover:opacity-70 border-0">❯</a>
                  </div> 
                </div> 
              </div>
              <!-- end carousel -->
            </div>
          </div>
          
          <div class="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-600"></div>
          </div>
          <!-- end Laptop mockup  -->
        </div> 

        <div class="flex-grow place-items-center flex justify-center w-full xl:w-1/2">
          <div class="text-center 2xl:text-left">
            <h4 class="font-normal text-base">This project</h4>
            <h1 class="font-bold text-4xl">Folio Profile</h1>

            <h4 class="pt-5 font-normal text-base">
              This project details my personal information, abilities, education, jobs and contact me, And this project am deploy on github page is demo wabsite for profile me.
            </h4>
            <h4 class="pt-5 font-bold text-xl">Tools</h4>
            <div class="pt-3 font-bold text-5xl flex justify-center 2xl:justify-start gap-4"> 
              <VsFileTypeVite />
              <DeVuejsOriginal />
              <DeTailwindcssPlain />
              <div class="flex flex-row gap-4">
                <img src="https://daisyui.com/images/daisyui-logo/daisyui-logotype.svg" class="h-auto max-w-36" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end project folio  -->
    </div>

      <!-- begin project folio  -->
      
 </div>
</template>

<script>
  import { VsFileTypeVite } from "@kalimahapps/vue-icons";
  import { DeVuejsOriginal } from "@kalimahapps/vue-icons";
  import { DeTailwindcssPlain } from "@kalimahapps/vue-icons";

  export default {
    components: {
      VsFileTypeVite,
      DeVuejsOriginal,
      DeTailwindcssPlain,
    }
  }
</script>

<style>
 
</style>