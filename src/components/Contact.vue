<template lang="">
    <div>

        <div class="py-16 grid gap-y-20">
            
            <div class="text-center xl:px-10">

                <h4 class="font-normal text-base text-orange-600 uppercase">Want to</h4>
                <h1 class="font-bold text-blue-950 text-4xl">Contact me?</h1>
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
                                    <input type="text" class="input input-bordered text-base w-full" ref="user_name" name="user_name" placeholder="Your Name"/>
                                    <input type="email" class="input input-bordered text-base w-full" ref="user_email" name="user_email" placeholder="Your Email"/>
                                </div>
                                <div>
                                    <input type="text" class="input input-bordered text-base w-full" ref="subject" name="subject" placeholder="Subject"/>
                                </div>
                                <div>
                                    <textarea type="text" class="textarea textarea-bordered textarea-md text-base w-full h-52" ref="message" name="message" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" value="Send" class="btn rounded-full w-52 mx-auto px-6 text-white bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700 focus:bg-orange-500 focus:border-orange-500">
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
                            <div class="p-3 bg-slate-100 text-blue-950 rounded-full"><FeMapPin /></div>
                            <h4 class="font-semibold text-orange-600 text-base pt-2">Address</h4>
                        </div>
                        <h4 class="ps-16 font-normal text-base">69 Moo.1, Khun Thale, Mueang Surat Thani, Surat Thani, 84100</h4>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 text-blue-950 rounded-full"><BsTelephone /></div>
                            <h4 class="font-semibold text-orange-600 text-base pt-2">Phone</h4>
                        </div>
                        <h4 class="ps-16 font-normal text-base">097-234-0942</h4>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 text-blue-950 rounded-full"><BxEnvelope /></div>
                            <h4 class="font-semibold text-orange-600 text-base pt-2">Email</h4>
                        </div>
                        <a href="mailto:phichet.pcl@gmail.com" class="ps-16 font-normal text-base">phichet.pcl@gmail.com</a>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex flex-row gap-5">
                            <div class="p-3 bg-slate-100 text-blue-950 rounded-full"><GvWorld /></div>
                            <h4 class="font-semibold text-orange-600 text-base pt-2">Website</h4>
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

    import emailjs from '@emailjs/browser';

    export default {
        components : {
            FeSend,
            FeMapPin,
            BsTelephone,
            BxEnvelope,
            GvWorld
        },
        methods: {
            sendEmail() {
                let user_name = this.$refs.user_name.value;
                let user_email = this.$refs.user_email.value;
                let subject = this.$refs.subject.value;
                let message = this.$refs.message.value;

                if ( user_name == '' || user_email == '' || subject == '' || message == '') {
                    this.$swal({
                        title: "Invalid",
                        text: "Please fill in complete information.",
                        icon: "warning",
                    });
                } else {
                    emailjs
                        .sendForm('service_9i6k2td', 'template_aolv1sc', this.$refs.form, {
                        publicKey: 'fR0rWhNF4IsOCQ2gq',
                        })
                        .then(
                        () => {
                            this.$swal({
                                title: "Success",
                                text: "Email sent successfully",
                                icon: "success"
                            });
                        },
                        (error) => {
                            this.$swal({
                                title: "Failed",
                                text: error.text,
                                icon: "error"
                            });
                            // console.log('FAILED...', error.text);
                        },
                    );
                }
                
            },
        },
    }
</script>
<style>
    
</style>