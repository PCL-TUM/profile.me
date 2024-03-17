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

        <div class="pt-10 flex justify-center">

          <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical sm:px-24">
            <li>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
              </div>
              <div class="timeline-start text-start">
                <time class="font-mono italic text-end">1984</time>
                  <img src="https://www.growthbunker.dev/images/vuetimeline/ghost_in_the_shell.jpg" class="" alt="">
                    <h1 className="text-xl text-blue-950 font-bold">Internship</h1>
                    <h1 className="text-lg text-orange-500 font-semibold ">Jul 2021 - Oct 2021</h1>
                    <h1 className="text-xl">Bluewind Solution Co., Ltd.</h1>
                    <div className="border-b-2 border-blue-950 pt-5 shadow-md"></div>
                    <ul className="list-disc text-lg pt-5 px-5">
                      <li>
                        Learn and develop MVC format web applications with C#,
                        ASP.NET.
                      </li>
                      <li>
                        Build web applications according to the UI specified with PHP.
                      </li>
                      <li>
                        Build and develop script user interface web applications with
                        jQuery, Ajax
                      </li>
                      <li>
                        Query a specific information in database that retrieves data
                        with SQL.
                      </li>
                      <li>Testing the fluidity and normality of web applications</li>
                    </ul>
              </div>
              <hr/>
            </li>
            <li>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
              </div>
              <div class="timeline-start text-start">
                <time class="font-mono italic text-end">1984</time>
                  
                      <h2 class="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                      </div>
                  
              </div>
              <hr/>
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