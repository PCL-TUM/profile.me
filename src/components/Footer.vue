<template lang="">
    <div>

      <footer class="footer footer-center p-10 bg-none text-white rounded-t-xl sm:rounded-none">
        <nav class="flex justify-center flex-col sm:flex-row gap-4">
          <div class="flex flex-row gap-4">
            <a href="#home" class="link link-hover">Home</a>
            <a href="#about" class="link link-hover">About</a>
            <a href="#experience" class="link link-hover">Experience</a>
            <a href="#skill" class="link link-hover">Skill</a>
          </div>
          <div class="flex flex-row gap-4">
            <a href="#p_folio" class="link link-hover">Project</a>
            <a href="#contact" class="link link-hover">Contact</a>
          </div>
        </nav> 
        <nav> 
          <div class="grid grid-flow-col gap-4">
            <a href="https://github.com/PCL-TUM" title="GitHub">
              <span class="text-3xl">
                <ByGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/phichet-liwvaha-a1585b2b7" title="GitHub">
              <span class="text-3xl">
                <AkLinkedinBoxFill />
              </span>
            </a>
          
          </div>
        </nav> 
      </footer>
    </div>
</template>

<script>
import { ByGithub } from "@kalimahapps/vue-icons";
import { AkLinkedinBoxFill } from "@kalimahapps/vue-icons";

	export default {
		components: {
			ByGithub,
      AkLinkedinBoxFill
		}
	}
</script>

<style></style>