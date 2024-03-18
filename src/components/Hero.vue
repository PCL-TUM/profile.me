<template lang="">
	<div>
		<div class="py-10 xl:py-0 grid gap-y-20">
      
			<div id="home" class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
				<div class="flex-grow justify-center w-full xl:w-1/2 xl:flex">

					<aos-vue animation="zoom-in-left" :duration="800" :once="true">
						<img class="h-auto mx-auto sm:max-w-sm xl:max-w-full xl:p-20" src="../assets/images/thisisme.png" alt="image description">
					</aos-vue>

				</div>

				<div class="flex-grow flex justify-center w-full xl:w-1/2 xl:items-center xl:justify-start">

					<aos-vue animation="zoom-in-right" :duration="800" :once="true">

					<div class="text-left 2xl:text-left">
						<div class="text-center xl:text-start">
							<div class="flex flex-col gap-2">

								<h4 class="font-normal text-2xl text-orange-600 tracking-wide uppercase ">Web developer</h4>
								<h1 class="font-bold text-4xl text-white tracking-tight xl:text-6xl">Hello, My name is</h1>
								<h1 class="font-bold text-5xl text-white tracking-tight xl:text-6xl">Phichet Liwvaha</h1>
								<h4 class="pt-3 font-normal text-slate-300 text-balance">
									Hi, I'm quickly adapting and learning, friendly, and easy to get along with. 
									Able to follow regulations ready to learn and always receive new knowledge
								</h4>
							</div>
							<div class="flex flex-row gap-5 pt-10 justify-center xl:justify-start">
								<a href="https://github.com/PCL-TUM" class="btn rounded-full px-6 text-white bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 focus:bg-orange-500 focus:border-orange-500">
									GitHub
									<span class="text-lg"><ByGithub /></span>
								</a>
								<button @click="download" class="btn rounded-full px-6">
									Dowload CV
									<span class="text-lg"><AkDownload /></span>
								</button >
							</div>
						</div>
					</div> 

					</aos-vue>

				</div>
			</div>

		</div>
	</div>
</template>

<script>
import { ByGithub } from "@kalimahapps/vue-icons";
import { AkDownload } from "@kalimahapps/vue-icons";
import Resume from "../assets/pdf/Resume.pdf"

	export default {
		components: {
			ByGithub,
			AkDownload
		},
		methods: {
			download() {
				// credit: https://www.bitdegree.org/learn/javascript-download
				let link = document.createElement('a');
					link.href = Resume;
					link.target = '_blank';
					link.download = 'Resume_Phichet.pdf';

				document.body.appendChild(link);
				
				link.click();
				document.body.removeChild(link);
			}
		}
	}
</script>

<style>
	
</style>