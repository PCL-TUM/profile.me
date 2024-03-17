<template lang="">
    <div>
        <div id="skill" class="py-16 text-center">
            <aos-vue animation="slide-up" :duration="800" :once="true">

                <h4 class="font-normal text-base text-orange-600 uppercase">Abilities</h4>
                <h1 class="font-bold text-blue-950 text-4xl">My Skills</h1>
                <h4 class="pt-5 font-normal text-base">
                    My tect skills and tools or framework knowledge that can be applied to website development
                </h4>

            </aos-vue>

            <aos-vue animation="zoom-in" :duration="800" :once="true">

            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :loop="true" :spaceBetween="12"
                    :slidesPerView="'auto'" :coverflowEffect="{
                    rotate: 15,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }" :pagination="{ clickable: true, }" :modules="modules" class="mySwiper">
            <!-- <div class="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-5 "> -->
                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">HTML</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar html">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeHtml5Original />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="90"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">90%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#f5743d]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5743d]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5743d]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5743d]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5743d]" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">CSS</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar css">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeCss3Original />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="80"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">85%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#32a9db]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#32a9db]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#32a9db]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#32a9db]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#32a9db]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Java Script</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar js">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeJavascriptOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="75"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">75%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#f0da4f]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f0da4f]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f0da4f]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f0da4f]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#f0da4f]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">PHP</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar php">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DePhpPlain />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="80"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">80%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#777cb5]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#777cb5]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#777cb5]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#777cb5]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#777cb5]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">MySQL</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar mysql">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeMysqlOriginalWordmark />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="60"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">60%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#00608a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#00608a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#00608a]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#00608a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#00608a]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Java</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar java">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeJavaOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="70"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">70%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#718ebd]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#718ebd]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#718ebd]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#718ebd]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#eb2d2d]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Python</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar python">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DePythonOriginalWordmark />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="40"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">40%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#3771a1]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#3771a1]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5bc20]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5bc20]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#f5bc20]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">C#</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar cshap">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeCsharpOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="65"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">65%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#69217a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#69217a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#69217a]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#69217a]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#69217a]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">C++</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar cplusplus">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeCplusplusOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="60"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">60%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#9c033b]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#9c033b]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#9c033b]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#9c033b]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#9c033b]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">.NET</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar dotnet">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeDotNetOriginalWordmark />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="60"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">60%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#1567ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#1567ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#1567ab]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#1567ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#1567ab]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">React</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar react">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeReactOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="65"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">65%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#61d9fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#61d9fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#61d9fa]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#61d9fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#61d9fa]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Vue</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar vue">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeVuejsOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="65"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">65%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#40b882]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#40b882]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#40b882]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#40b882]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#40b882]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Node.JS</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar nodejs">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeNodejsOriginal />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="65"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">65%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#83cc29]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#83cc29]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#83cc29]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#83cc29]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#83cc29]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Jquery</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar jquery">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeJqueryOriginalWordmark />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="85"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">85%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#0967ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#0967ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#0967ab]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#0967ab]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#0967ab]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Bootstrap</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar bootstrap">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeBootstrapPlain />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="75"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">75%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#7e11fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#7e11fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#7e11fa]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#7e11fa]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#7e11fa]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="card w-80 bg-base-100 shadow-lg">
                        <div class="card-body p-5 pt-10 gap-y-10">
                            <h1 class="card-title justify-center font-bold text-3xl">Tailwind</h1>

                            <div class="card-actions justify-center">
                                <div class="indicator progress-bar tailwind">
                                    <span class="indicator-item indicator-middle indicator-center badge bg-none border-none text-5xl">
                                        <DeTailwindcssPlain />
                                    </span>
                                    <progress class="indicator-item indicator-middle indicator-center" min="0" max="100" value="70"></progress>
                                </div>
                            </div>

                            <div class="card-actions text-center">
                                <div class="flex w-full">
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <h1 class="font-bold text-3xl">70%</h1>
                                    </div>
                                    <div class="divider divider-horizontal"></div>
                                    <div class="grid h-10 flex-grow place-items-center">
                                        <div class="rating">
                                            <input type="radio" class="mask mask-star-2 bg-[#37b3ac]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#37b3ac]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#37b3ac]" disabled />
                                            <input type="radio" class="mask mask-star-2 bg-[#37b3ac]" checked />
                                            <input type="radio" class="mask mask-star-2 bg-[#37b3ac]" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>

            </aos-vue>

        </div>
    </div>

</template>
<script>
    import { DeHtml5Original } from "@kalimahapps/vue-icons";
    import { DeCss3Original } from "@kalimahapps/vue-icons";
    import { DeJavascriptOriginal } from "@kalimahapps/vue-icons";
    import { DePhpPlain } from "@kalimahapps/vue-icons";
    import { DeMysqlOriginalWordmark } from "@kalimahapps/vue-icons";
    import { DeJavaOriginal } from "@kalimahapps/vue-icons";
    import { DePythonOriginalWordmark } from "@kalimahapps/vue-icons";
    import { DeCsharpOriginal } from "@kalimahapps/vue-icons";
    import { DeCplusplusOriginal } from "@kalimahapps/vue-icons";
    import { DeDotNetOriginalWordmark } from "@kalimahapps/vue-icons";
    import { DeReactOriginal } from "@kalimahapps/vue-icons";
    import { DeVuejsOriginal } from "@kalimahapps/vue-icons";
    import { DeNodejsOriginal } from "@kalimahapps/vue-icons";
    import { DeJqueryOriginalWordmark } from "@kalimahapps/vue-icons";
    import { DeBootstrapPlain } from "@kalimahapps/vue-icons";
    import { DeTailwindcssPlain } from "@kalimahapps/vue-icons";

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';


    // import required modules
    import { EffectCoverflow, Pagination } from 'swiper/modules';

    export default {
        components: {
			DeHtml5Original,
            DeCss3Original,
            DeJavascriptOriginal,
            DeMysqlOriginalWordmark,
            DePhpPlain,
            DeJavaOriginal,
            DePythonOriginalWordmark,
            DeCsharpOriginal,
            DeCplusplusOriginal,
            DeDotNetOriginalWordmark,
            DeReactOriginal,
            DeVuejsOriginal,
            DeNodejsOriginal,
            DeJqueryOriginalWordmark,
            DeBootstrapPlain,
            DeTailwindcssPlain,
            Swiper,
            SwiperSlide,
		}, setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
    }
</script>

<style>
    .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
    }

    .swiper-slide .card {
        display: block;
        border-radius: 1rem;
        width: 100%;
    }

    @property --progress-value {
        syntax: '<integer>';
        inherits: false;
        initial-value: 0;
    }

    @keyframes html-progress {
        to { --progress-value: 90; }
    }

    @keyframes css-progress {
        to { --progress-value: 85; }
    }

    @keyframes js-progress {
        to { --progress-value: 75; }
    }

    @keyframes php-progress {
        to { --progress-value: 80; }
    }

    @keyframes mysql-progress {
        to { --progress-value: 60; }
    }

    @keyframes java-progress {
        to { --progress-value: 70; }
    }

    @keyframes python-progress {
        to { --progress-value: 40; }
    }

    @keyframes cshap-progress {
        to { --progress-value: 65; }
    }

    @keyframes cplusplus-progress {
        to { --progress-value: 60; }
    }

    @keyframes dotnet-progress {
        to { --progress-value: 60; }
    }

    @keyframes react-progress {
        to { --progress-value: 65; }
    }

    @keyframes vue-progress {
        to { --progress-value: 65; }
    }

    @keyframes nodejs-progress {
        to { --progress-value: 65; }
    }

    @keyframes jquery-progress {
        to { --progress-value: 85; }
    }

    @keyframes bootstrap-progress {
        to { --progress-value: 75; }
    }

    @keyframes tailwind-progress {
        to { --progress-value: 70; }
    }

    .progress-bar {
        width: 120px !important;
        height: 120px;
        border-radius: 50%;
        
        /* to center the percentage value */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progress-bar::before {
        counter-reset: percentage var(--progress-value);
        content: counter(percentage) '%';
    }

    .html {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%),
            conic-gradient(rgb(242, 102, 41, 0.9) calc(var(--progress-value) * 1%), rgba(242, 102, 41, 0.3) 0);
        animation: html-progress 2s 1 forwards;
    }

    .html::before {
    animation: html-progress 2s 1 forwards;
    }

    .css {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(22, 115, 181, 0.9) calc(var(--progress-value) * 1%), rgb(22, 115, 181, 0.3) 0);
        animation: css-progress 2s 1 forwards;
    }

    .css::before {
        animation: css-progress 2s 1 forwards;
    }

    .js {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(240, 218, 79, 0.9) calc(var(--progress-value) * 1%), rgb(240, 218, 79, 0.3) 0);
        animation: js-progress 2s 1 forwards;
    }

    .js::before {
        animation: js-progress 2s 1 forwards;
    }

    .php {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(119, 124, 181, 0.9) calc(var(--progress-value) * 1%), rgb(119, 124, 181, 0.3) 0);
        animation: php-progress 2s 1 forwards;
    }

    .php::before {
        animation: php-progress 2s 1 forwards;
    }

    .mysql {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(0, 96, 138, 0.9) calc(var(--progress-value) * 1%), rgb(0, 96, 138, 0.3) 0);
        animation: mysql-progress 2s 1 forwards;
    }

    .mysql::before {
        animation: mysql-progress 2s 1 forwards;
    }

    .java {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(96, 129, 181, 0.9) calc(var(--progress-value) * 1%), rgb(235, 45, 45, 0.3) 0);
        animation: java-progress 2s 1 forwards;
    }

    .java::before {
        animation: java-progress 2s 1 forwards;
    }

    .python {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(55, 113, 161, 0.9) calc(var(--progress-value) * 1%), rgb(255, 205, 69, 0.3) 0);
        animation: python-progress 2s 1 forwards;
    }

    .python::before {
        animation: python-progress 2s 1 forwards;
    }

    .cshap {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(105, 33, 122, 0.9) calc(var(--progress-value) * 1%), rgb(105, 33, 122, 0.3) 0);
        animation: cshap-progress 2s 1 forwards;
    }

    .cshap::before {
        animation: cshap-progress 2s 1 forwards;
    }

    .cplusplus {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(156, 3, 59, 0.9) calc(var(--progress-value) * 1%), rgb(156, 3, 59, 0.3) 0);
        animation: cplusplus-progress 2s 1 forwards;
    }

    .cplusplus::before {
        animation: cplusplus-progress 2s 1 forwards;
    }

    .dotnet {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(20, 117, 186, 0.9) calc(var(--progress-value) * 1%), rgb(137, 207, 240, 0.3) 0);
        animation: dotnet-progress 2s 1 forwards;
    }

    .dotnet::before {
        animation: dotnet-progress 2s 1 forwards;
    }

    .react {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(97, 217, 250, 0.9) calc(var(--progress-value) * 1%), rgb(97, 217, 250, 0.3) 0);
        animation: react-progress 2s 1 forwards;
    }

    .react::before {
        animation: react-progress 2s 1 forwards;
    }

    .vue {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(64, 184, 130, 0.9) calc(var(--progress-value) * 1%), rgb(64, 184, 130, 0.3) 0);
        animation: vue-progress 2s 1 forwards;
    }

    .vue::before {
        animation: vue-progress 2s 1 forwards;
    }

    .nodejs {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(110, 166, 96, 0.9) calc(var(--progress-value) * 1%), rgb(110, 166, 96, 0.3) 0);
        animation: nodejs-progress 2s 1 forwards;
    }

    .nodejs::before {
        animation: nodejs-progress 2s 1 forwards;
    }

    .jquery {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(7, 104, 173, 0.9) calc(var(--progress-value) * 1%), rgb(7, 104, 173, 0.3) 0);
        animation: jquery-progress 2s 1 forwards;
    }

    .jquery::before {
        animation: jquery-progress 2s 1 forwards;
    }

    .bootstrap {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(134, 17, 250, 0.9) calc(var(--progress-value) * 1%), rgb(134, 17, 250, 0.3) 0);
        animation: bootstrap-progress 2s 1 forwards;
    }

    .bootstrap::before {
        animation: bootstrap-progress 2s 1 forwards;
    }

    .tailwind {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(55, 179, 172, 0.9) calc(var(--progress-value) * 1%), rgb(55, 179, 172, 0.3) 0);
        animation: tailwind-progress 2s 1 forwards;
    }

    .tailwind::before {
        animation: tailwind-progress 2s 1 forwards;
    }

    progress {
        visibility: hidden;
        width: 0;
        height: 0;
    }
</style>