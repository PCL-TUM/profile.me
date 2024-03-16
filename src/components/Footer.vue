<template lang="">
    <div>

      <footer class="footer footer-center p-10 bg-blue-950 text-white rounded-t-xl sm:rounded-none">
        <nav class="grid grid-flow-col gap-4">
          <a href="#home" class="link link-hover">Home</a>
          <a href="#about" class="link link-hover">About</a>
          <a href="#skill" class="link link-hover">Skill</a>
          <a href="#p_folio" class="link link-hover">Project</a>
          <a href="#contact" class="link link-hover">Contact</a>
        </nav> 
        <nav>
          <div class="grid grid-flow-col gap-4">
            <a href="https://github.com/PCL-TUM" title="GitHub">
              <span class="text-3xl">
                <ByGithub />
              </span>
            </a>
          
          </div>
        </nav> 
      </footer>
    </div>
</template>

<script>
import { ByGithub } from "@kalimahapps/vue-icons";

	export default {
		components: {
			ByGithub,
		}
	}
</script>

<style></style>