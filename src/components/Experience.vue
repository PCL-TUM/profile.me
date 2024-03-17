<template lang="">
  <div>
      <div id="Experience" class="py-16 text-center">
        <aos-vue animation="slide-up" :duration="800" :once="true">
          <h4 class="font-normal text-base text-orange-600 uppercase">My Past</h4>
          <h1 class="font-bold text-blue-950 text-4xl">Experience</h1>
          <h4 class="pt-5 font-normal text-base">
            My past experience working in the company
          </h4>
        </aos-vue>

        <div class="pt-10">

          <ul class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
            <li>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
              </div>
              <div class="timeline-start md:text-end mb-10">
                <time class="font-mono italic">1984</time>
                <div class="text-lg font-black">First Macintosh computer</div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
              </div>
              <hr/>
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
              </div>
              <div class="timeline-end mb-10">
                <time class="font-mono italic">1998</time>
                <div class="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
              </div>
              <hr />
            </li>
          </ul>

        </div>


      </div>
  </div>

</template>
<script>
  export default {
 
  }
</script>

<style>

</style>