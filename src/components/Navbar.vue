<template lang="">
  <div>
    <!-- begin mobile screen -->
    <div class="sm:hidden">
      <div class="navbar bg-base-100 rounded-b-xl shadow-md">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-52">
              <li><a>Link</a></li>
              <li>
                <summary>
                  Parent
                </summary>
                <ul class="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost font-semibold text-xl text-blue-950 hover:bg-white">
            <img class="pb-0.5" src="https://cdn-icons-png.flaticon.com/512/7316/7316704.png" width="25" height="15" alt="">
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
    <div class="hidden sm:flex rounded-b-xl shadow-md">
      <div class="container w-full mx-auto px-5">
        <div class="navbar bg-base-100 ">
          <div class="flex-1">
            <a class="btn btn-ghost font-semibold text-xl text-blue-950 hover:bg-white">
              <img class="pb-0.5" src="https://cdn-icons-png.flaticon.com/512/7316/7316704.png" width="25" height="15" alt="">
              <span class="pt-0.5">PCL.Dev</span>
            </a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul class="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end windows screen -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>