<template lang="">
	<div>
		<div class="py-16 xl:py-0 grid gap-y-20">
      
			<div id="about" class="flex flex-col w-full xl:flex-row gap-4"> 
				<div class="flex-grow justify-center w-full xl:w-1/2 hidden xl:flex">

					<aos-vue animation="zoom-out-right" :duration="800" :once="true">
						<img class="h-auto max-w-full p-20" src="../assets/images/aboutme.png" alt="image description">
					</aos-vue>

				</div>

				<div class="flex-grow flex justify-center w-full xl:w-1/2 xl:items-center xl:justify-start">
					
					<aos-vue animation="zoom-out-left" :duration="800" :once="true">
					
					<div class="text-left 2xl:text-left">						
						<div class="text-center xl:text-start">
							<h4 class="font-normal text-orange-600 text-base uppercase">My intro</h4>
							<h1 class="font-bold text-blue-950 text-4xl">About Me</h1>
							<h4 class="pt-5 font-normal text-base text-balance">
								Hi, I'm Tum. I love design websites on the Frontend, but I can work on the Backend as well. 
								and I love learning about Web Development with New framework or library. 
								of which I am adapt and learn quickly friendly because I'm funny.
							</h4>
						</div>

						<div class="pt-5 flex flex-col gap-y-1 ps-2 sm:ps-32 sm:pe-20 md:ps-48 md:pe-20 lg:ps-80 lg:pe-44 xl:px-0">
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldUser /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Name </span>
								<span class="font-normal w-4/5">Phichet Liwvaha</span>
							</div>
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldGraduationCap /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Education </span>
								<span class="font-normal w-4/5">Computer Engineering</span>
							</div>
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldCalendar /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Date of birth </span>
								<span class="font-normal w-4/5">September 02, 1999</span>
							</div>
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldEnvelopeSimple /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Email </span>
								<span class="font-normal w-4/5">phichet.pcl@gmail.com</span>
							</div>
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldPhone /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Phone </span>
								<span class="font-normal w-4/5">(+66) 97 - 2340942</span>
							</div>
							<div class="flex flex-row text-md">
								<span class="text-xl text-orange-600 p-0.5 px-2"><PhBoldMapPin /></span>
								<span class="font-bold me-3 text-blue-950 sm:me-0 w-2/5 sm:w-2/4 xl:w-1/4">Address </span>
								<span class="font-normal w-4/5 lg:hidden">69 Moo.1, Khun Thale,<br /> Mueang Surat Thani,<br /> Surat Thani, 84100</span>
								<span class="font-normal w-4/5 hidden lg:flex">69 Moo.1, Khun Thale, Mueang Surat Thani, Surat Thani, 84100</span>
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
	import { PhBoldUser } from "@kalimahapps/vue-icons";
	import { PhBoldGraduationCap } from "@kalimahapps/vue-icons";
	import { PhBoldCalendar } from "@kalimahapps/vue-icons";
	import { PhBoldEnvelopeSimple } from "@kalimahapps/vue-icons";
	import { PhBoldPhone } from "@kalimahapps/vue-icons";
	import { PhBoldMapPin } from "@kalimahapps/vue-icons";
	export default {
		components: {
			PhBoldUser,
			PhBoldGraduationCap,
			PhBoldCalendar,
			PhBoldEnvelopeSimple,
			PhBoldPhone,
			PhBoldMapPin,
		}
	}
</script>

<style>
    
</style>