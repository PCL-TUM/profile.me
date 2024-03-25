<template lang="">
	<div>
		<div class="py-10 xl:py-0 grid gap-y-20">
			<div id="home" class="flex flex-col w-full xl:flex-row-reverse gap-4"> 
				<div class="flex-grow justify-center w-full xl:w-1/2 xl:flex">

					<aos-vue animation="zoom-in-left" :duration="800" :once="true">
						<img class="h-auto mx-auto drop-shadow-lg sm:max-w-sm xl:max-w-full xl:p-20" src="../assets/images/thisisme.png" alt="image description">
					</aos-vue>

				</div>

				<div class="flex-grow flex justify-center w-full xl:w-1/2 xl:items-center xl:justify-start">

					<aos-vue animation="zoom-in-right" :duration="800" :once="true">

					<div class="text-left 2xl:text-left">
						<div class="text-center xl:text-start">
							<div class="flex flex-col gap-2">

								<h4 class="font-normal text-2xl text-orange-600 tracking-wide uppercase glitch" data-glitch="WEB DEVELOPER">Web developer</h4>
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
					link.download = 'Phichet Resume.pdf';

				document.body.appendChild(link);
				
				link.click();
				document.body.removeChild(link);
			}
		}
	}
</script>

<style>
	.glitch-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: none;
	}

	.glitch {
	position: relative;
	font-weight: 700;
	line-height: 1.2;
	letter-spacing: 5px;
	z-index: 1;
	}

	.glitch:before {
	content: attr(data-glitch);
	position: absolute;
	top: 0;
	left: -2px;
	width: 100%;
	background-color: none;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-before 3s infinite linear alternate-reverse;
	}

	.glitch:after {
	content: attr(data-glitch);
	position: absolute;
	top: 0;
	left: 2px;
	width: 100%;
	background-color: none;
	overflow: hidden;
	clip: rect(0, 900px, 0, 0);
	animation: noise-after 2s infinite linear alternate-reverse;
	}

	@keyframes noise-before {
	0% {
		clip: rect(61px, 9999px, 52px, 0);
	}

	5% {
		clip: rect(33px, 9999px, 144px, 0);
	}

	10% {
		clip: rect(121px, 9999px, 115px, 0);
	}

	15% {
		clip: rect(144px, 9999px, 162px, 0);
	}

	20% {
		clip: rect(62px, 9999px, 180px, 0);
	}

	25% {
		clip: rect(34px, 9999px, 42px, 0);
	}

	30% {
		clip: rect(147px, 9999px, 179px, 0);
	}

	35% {
		clip: rect(99px, 9999px, 63px, 0);
	}

	40% {
		clip: rect(188px, 9999px, 122px, 0);
	}

	45% {
		clip: rect(154px, 9999px, 14px, 0);
	}

	50% {
		clip: rect(63px, 9999px, 37px, 0);
	}

	55% {
		clip: rect(161px, 9999px, 147px, 0);
	}

	60% {
		clip: rect(109px, 9999px, 175px, 0);
	}

	65% {
		clip: rect(157px, 9999px, 88px, 0);
	}

	70% {
		clip: rect(173px, 9999px, 131px, 0);
	}

	75% {
		clip: rect(62px, 9999px, 70px, 0);
	}

	80% {
		clip: rect(24px, 9999px, 153px, 0);
	}

	85% {
		clip: rect(138px, 9999px, 40px, 0);
	}

	90% {
		clip: rect(79px, 9999px, 136px, 0);
	}

	95% {
		clip: rect(25px, 9999px, 34px, 0);
	}

	100% {
		clip: rect(173px, 9999px, 166px, 0);
	}
	}

	@keyframes noise-after {
	0% {
		clip: rect(26px, 9999px, 33px, 0);
	}

	5% {
		clip: rect(140px, 9999px, 198px, 0);
	}

	10% {
		clip: rect(184px, 9999px, 89px, 0);
	}

	15% {
		clip: rect(121px, 9999px, 6px, 0);
	}

	20% {
		clip: rect(181px, 9999px, 99px, 0);
	}

	25% {
		clip: rect(154px, 9999px, 133px, 0);
	}

	30% {
		clip: rect(134px, 9999px, 169px, 0);
	}

	35% {
		clip: rect(26px, 9999px, 187px, 0);
	}

	40% {
		clip: rect(147px, 9999px, 137px, 0);
	}

	45% {
		clip: rect(31px, 9999px, 52px, 0);
	}

	50% {
		clip: rect(191px, 9999px, 109px, 0);
	}

	55% {
		clip: rect(74px, 9999px, 54px, 0);
	}

	60% {
		clip: rect(145px, 9999px, 75px, 0);
	}

	65% {
		clip: rect(153px, 9999px, 198px, 0);
	}

	70% {
		clip: rect(99px, 9999px, 136px, 0);
	}

	75% {
		clip: rect(118px, 9999px, 192px, 0);
	}

	80% {
		clip: rect(1px, 9999px, 83px, 0);
	}

	85% {
		clip: rect(145px, 9999px, 98px, 0);
	}

	90% {
		clip: rect(121px, 9999px, 154px, 0);
	}

	95% {
		clip: rect(156px, 9999px, 44px, 0);
	}

	100% {
		clip: rect(67px, 9999px, 122px, 0);
	}
	}
	</style>