<template lang="">
    <div>

        <div class="py-16 grid gap-y-20">
            
            <div class="text-center xl:px-10">

                <h4 class="font-normal text-base uppercase">Want to</h4>
                <h1 class="font-bold text-4xl">Contact me?</h1>
                <h4 class="pt-5 font-normal text-base">
                    This is the details or information. that you can contact me
                </h4>
            </div>

            <div class="flex flex-col w-full lg:flex-row gap-20"> 
                                 
                <div class="flex-grow justify-center w-full lg:w-1/2">
                    <div class="text-left 2xl:text-left">
                        <form ref="form" @submit.prevent="sendEmail">
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col lg:flex-row gap-3">
                                    <input type="text" class="input input-bordered text-base w-full" placeholder="Your Name" />
                                    <input type="text" class="input input-bordered text-base w-full" placeholder="Your Email" />
                                </div>
                                <div>
                                    <input type="text" class="input input-bordered text-base w-full" placeholder="Subject" />
                                </div>
                                <div>
                                    <textarea type="text" class="textarea textarea-bordered textarea-md text-base w-full h-52" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" class="btn rounded-full w-52 mx-auto px-6">
                                    Send Message
                                    <span class="text-lg"><FeSend /></span>
                                </button>
                            </div>
                        </form>
                    </div> 
                </div>

                <div class="flex-grow flex flex-col  content-start w-full gap-6 lg:w-1/2 lg:flex">
                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 rounded-full"><FeMapPin /></div>
                            <h4 class="font-semibold text-base pt-2">Address</h4>
                        </div>
                        <h4 class="ps-16 font-normal text-base">69 Moo.1, Khun Thale, Mueang Surat Thani, Surat Thani, 84100</h4>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 rounded-full"><BsTelephone /></div>
                            <h4 class="font-semibold text-base pt-2">Phone</h4>
                        </div>
                        <h4 class="ps-16 font-normal text-base">097-234-0942</h4>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 rounded-full"><BxEnvelope /></div>
                            <h4 class="font-semibold text-base pt-2">Email</h4>
                        </div>
                        <a href="mailto:phichet.pcl@gmail.com" class="ps-16 font-normal text-base">phichet.pcl@gmail.com</a>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 rounded-full"><GvWorld /></div>
                            <h4 class="font-semibold text-base pt-2">Website</h4>
                        </div>
                        <a href="https://pcl-tum.github.io/profile-reactjs" class="ps-16 font-normal text-base">https://pcl-tum.github.io/profile-reactjs</a>
                    </div>
                  
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import { FeSend } from "@kalimahapps/vue-icons";
    import { FeMapPin } from "@kalimahapps/vue-icons";
    import { BsTelephone } from "@kalimahapps/vue-icons";
    import { BxEnvelope } from "@kalimahapps/vue-icons";
    import { GvWorld } from "@kalimahapps/vue-icons";

    export default {
        components : {
            FeSend,
            FeMapPin,
            BsTelephone,
            BxEnvelope,
            GvWorld
        }
        
    }
</script>
<style>
    
</style>