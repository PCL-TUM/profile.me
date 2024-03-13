<template lang="">
	<div>
		<div class="py-16 sm:pt-16 sm:pb-5 grid gap-y-20">
      
			<div class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
				<div class="flex-grow justify-center w-full xl:w-1/2 hidden xl:flex">
					<img class="h-auto max-w-full p-20" src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" alt="image description">
				</div>

				<div class="flex-grow flex justify-center w-full xl:w-1/2 xl:items-center xl:justify-start">
					<div class="text-left 2xl:text-left">
						<div class="text-center xl:text-start">
							<div class="flex flex-col gap-2">
								<h4 class="font-normal text-base tracking-wide uppercase">Web developer</h4>
								<h1 class="font-bold text-4xl tracking-tight xl:text-6xl">Hello, My name is</h1>
								<h1 class="font-bold text-5xl tracking-tight xl:text-6xl">Phichet Liwvaha</h1>
								<h4 class="pt-3 font-normal text-base text-balance">
									Hi, I'm quickly adapting and learning, friendly, and easy to get along with. 
									Able to follow regulations ready to learn and always receive new knowledge
								</h4>
							</div>
							<div class="flex flex-row gap-5 pt-10 justify-center xl:justify-start">
								<button class="btn rounded-full px-6">
									GitHub
									<span class="text-lg"><ByGithub /></span>
								</button>
								<button class="btn rounded-full px-6">
									Dowload CV
									<span class="text-lg"><AkDownload /></span>
								</button>
							</div>
							
							
						</div>

					</div> 

				</div>
			</div>

		</div>
	</div>
</template>

<script>
import { ByGithub } from "@kalimahapps/vue-icons";
import { AkDownload } from "@kalimahapps/vue-icons";

	export default {
		components: {
			ByGithub,
			AkDownload
		}
	}
</script>

<style>
	
</style>