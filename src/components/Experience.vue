<template lang="">
  <div>

    <div class="py-16 grid gap-y-20">
      <div class="text-center">
        <aos-vue animation="zoom-in-up" :duration="650" :once="true">
          <h4 class="font-normal text-orange-600 text-base uppercase">Example</h4>
          <h1 class="font-bold text-blue-950 text-4xl">My Project</h1>
          <h4 class="pt-5 font-normal text-base">
            Here are some examples of projects I've been working on over time. Which shows examples of tools used in website development.
          </h4>
        </aos-vue>
      </div>

      <aos-vue animation="fade-up-right" :duration="650" :once="true">
      
      <div id="p_folio" class="flex flex-col w-full xl:flex-row gap-4"> 
        <div class="flex-grow place-items-center w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <swiper
                :pagination="{}"
                :loop="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper py-0"
              >
                <swiper-slide>
                  <img src="../assets/images/project/profile/pf-1.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/profile/pf-2.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
              </swiper>
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
            <h4 class="font-normal text-orange-600 text-base">This Project</h4>
            <h1 class="font-bold text-blue-950 text-4xl">Folio Profile</h1>

            <h4 class="pt-5 font-normal text-base">
              This project details my personal information, abilities, education, jobs and contact me, And this project am deploy on github page is demo wabsite for profile me.
            </h4>
            <h4 class="pt-5 font-bold text-blue-950 text-xl">Tools</h4>
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

      </aos-vue>
      <!-- end project folio  -->

      <!-- begin project folio  -->
      <aos-vue animation="fade-up-left" :duration="650" :once="true">

      <div id="p_psip" class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
        <div class="flex-grow place-items-cente w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <swiper
                :pagination="{}"
                :loop="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper py-0"
              >
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-1-1.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-1-2.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-3.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-4.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-5.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-6.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-7.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/psip/psip-8.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
              </swiper>
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
            <h4 class="font-normal text-orange-600 text-base">This Project</h4>
            <h1 class="font-bold text-blue-950 text-4xl">PSIP : Parcel Sortation Via Image Processing</h1>

            <h4 class="pt-5 font-normal text-base">
              This a graduation project. It is a website used to display information on parcels that have been sorted by an image processing machine.
            </h4>
            <h4 class="pt-5 font-bold text-blue-950 text-xl">Tools</h4>
            <div class="pt-3 font-bold text-5xl flex justify-center 2xl:justify-start gap-4"> 
              <DePhpPlain />
              <DeJqueryOriginalWordmark />
              <DeMysqlOriginalWordmark />
              <DeBootstrapPlain />
              <div class="flex flex-row gap-4">
                <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg" class="h-auto max-w-10" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      </aos-vue>
      <!-- end project folio  -->

      <!-- begin project folio  -->
      <aos-vue animation="fade-up-right" :duration="650" :once="true">
      <div id="p_bluewind" class="flex flex-col w-full xl:flex-row gap-4"> 
        <div class="flex-grow place-items-cente w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <swiper
                :pagination="{}"
                :loop="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper py-0"
              >
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-1.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-2.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-3.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-4.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-5.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-6.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-7.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/bluewind/bw-8.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
              </swiper>
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
            <h4 class="font-normal text-orange-600 text-base">This Project</h4>
            <h1 class="font-bold text-blue-950 text-4xl">Bluewind Solution</h1>

            <h4 class="pt-5 font-normal text-base">
              This main project assigned during internship at Bluewind Solution Co., Ltd. for 4 months. It is a website developed with PHP website format CRUD (Create, Read, Update, Delete).
            </h4>
            <h4 class="pt-5 font-bold text-blue-950 text-xl">Tools</h4>
            <div class="pt-3 font-bold text-5xl flex justify-center 2xl:justify-start gap-4"> 
              <DePhpPlain />
              <DeJqueryOriginalWordmark />
              <DeMysqlOriginalWordmark />
              <DeBootstrapPlain />
              <div class="flex flex-row gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/WampServer.png" class="h-auto max-w-12" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      </aos-vue>
      <!-- end project folio  -->

      <!-- begin project folio  -->
      <aos-vue animation="fade-up-left" :duration="650" :once="true">
      <div id="p_borrow" class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
        <div class="flex-grow place-items-cente w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <swiper
                :pagination="{}"
                :loop="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper py-0"
              >
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-1.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-2.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-3.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-4.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-5.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-6.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/borrow/br-7.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
              </swiper>
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
            <h4 class="font-normal text-orange-600 text-base">This Project</h4>
            <h1 class="font-bold text-blue-950 text-4xl">Borrow Equpment</h1>

            <h4 class="pt-5 font-normal text-base">
              This project freelance job. It is a website developed with EJS website format CRUD (Create, Read, Update, Delete). And notify borrow equipment vie Socket.io
            </h4>
            <h4 class="pt-5 font-bold text-blue-950 text-xl">Tools</h4>
            <div class="flex flex-col 2xl:flex-row 2xl:gap-4">
              <div class="flex flex-row justify-center 2xl:justify-start pt-3 font-bold text-5xl gap-4"> 
                <div class="flex flex-row pt-2">
                  <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" class="max-h-12 max-w-auto" alt="">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" class="max-h-8 max-w-auto" alt="">
                </div>
                <DeJqueryOriginalWordmark />
                <DeMysqlOriginalWordmark />
                <DeBootstrapPlain />
              </div>
              <div class="flex flex-row justify-center 2xl:pt-2 gap-4">
                <img src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/09/nodejs.png?fit=512%2C256&ssl=1" class="max-h-12 max-w-auto" alt="">
                <img src="https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg" class="max-h-14 max-w-auto" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      </aos-vue>
      <!-- end project folio  -->

      <!-- begin project folio  -->
      <aos-vue animation="fade-up-right" :duration="650" :once="true">
      <div id="p_banmai" class="flex flex-col w-full xl:flex-row gap-4"> 
        <div class="flex-grow place-items-cente w-full xl:w-1/2">
          <!-- begin Laptop mockup  -->
          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
              <!-- begin carousel -->
              <swiper
                :pagination="{}"
                :loop="true"
                :navigation="true"
                :modules="modules"
                class="mySwiper py-0"
              >
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-1.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-2.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-3.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-4.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-5.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-6.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-7.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/images/project/banmai/bm-8.png" class="h-[156px] md:h-[278px] w-full rounded-lg" alt=""> 
                </swiper-slide>
              </swiper>
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
            <h4 class="font-normal text-orange-600 text-base">This Project</h4>
            <h1 class="font-bold text-blue-950 text-4xl">Banmai Service</h1>

            <h4 class="pt-5 font-normal text-base">
              This project service while working at Banmaipathana Subdistrict Health Promoting Hospital. 
              It is a website has a system for searching patient names in the database to print stickers
              , Calendar list of serv text-blue-950ice recipients, Template for graphic onepage.
            </h4>
            <h4 class="pt-5 font-bold text-xl">Tools</h4>
            <div class="pt-3 font-bold text-5xl flex justify-center 2xl:justify-start gap-4"> 
              <DePhpPlain />
              <DeJqueryOriginalWordmark />
              <DeMysqlOriginalWordmark />
              <DeBootstrapPlain />
              <div class="flex flex-row gap-4">
                <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg" class="h-auto max-w-10" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      </aos-vue>
      <!-- end project folio  -->

    </div>

      <!-- begin project folio  -->
      
 </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  import { VsFileTypeVite } from "@kalimahapps/vue-icons";
  import { DeVuejsOriginal } from "@kalimahapps/vue-icons";
  import { DeTailwindcssPlain } from "@kalimahapps/vue-icons";

  import { DeJavascriptOriginal } from "@kalimahapps/vue-icons";
  import { DePhpPlain } from "@kalimahapps/vue-icons";
  import { DeJqueryOriginalWordmark } from "@kalimahapps/vue-icons";
  import { DeBootstrapPlain } from "@kalimahapps/vue-icons";
  import { DeNodejsOriginal } from "@kalimahapps/vue-icons";
  import { DeMysqlOriginalWordmark } from "@kalimahapps/vue-icons";


  export default {
    components: {
      Swiper,
      SwiperSlide,
      VsFileTypeVite,
      DeVuejsOriginal,
      DeTailwindcssPlain,
      DeJavascriptOriginal,
      DePhpPlain,
      DeJqueryOriginalWordmark,
      DeBootstrapPlain,
      DeNodejsOriginal,
      DeMysqlOriginalWordmark
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  }
</script>

<style>
 
</style>