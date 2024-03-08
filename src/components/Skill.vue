<template lang="">
    <div>
        <div class="flex flex-col w-full lg:flex-row gap-10">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center w-full">
            <div class="card w-1/3 bg-base-100 shadow-md">
                <div class="card-body gap-y-10">
                    <h2 class="card-title justify-center">HTML</h2>
                    <div class="card-actions justify-center">
                
                        <div class="">
               
                            <div class="progress-bar css">
                                <progress id="css" min="0" max="100" value="87"></progress>
                            </div>
                        </div>

                    </div>
                    <div class="card-actions justify-center">
                        HTML is the standard markup language for Web pages.
                        With HTML you can create your own Website.
                        HTML is easy to learn - You will enjoy it!

                    </div>
                </div>
            </div>
        </div>

            

            <!-- <div class="">
                <div class="progress-bar css">
                    <progress id="css" min="0" max="100" value="87"></progress>
                </div>
            </div>

            <div class="">
                <div class="progress-bar js">
                    <progress id="js" min="0" max="100" value="73"></progress>
                </div>
            </div> -->

    </div>
</template>
<script>
export default {
    
}
</script>

<style>
    @property --progress-value {
        syntax: '<integer>';
        inherits: false;
        initial-value: 0;
    }

    @keyframes html-progress {
        to { --progress-value: 92; }
    }

    @keyframes css-progress {
        to { --progress-value: 87; }
    }

    @keyframes js-progress {
        to { --progress-value: 73; }
    }

    .progress-bar {
        width: 100px;
        height: 100px;
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
            conic-gradient(rgb(105, 128, 255) calc(var(--progress-value) * 1%), rgb(15, 25, 163) 0);
        animation: html-progress 2s 1 forwards;
    }

    .html::before {
    animation: html-progress 2s 1 forwards;
    }

    .css {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(rgb(105, 120, 255) calc(var(--progress-value) * 1%), rgb(206, 201, 252) 0);
        animation: css-progress 2s 1 forwards;
    }

    .css::before {
        animation: css-progress 2s 1 forwards;
    }

    .js {
        background: 
            radial-gradient(closest-side, white 79%, transparent 80% 100%, white 0),
            conic-gradient(hotpink calc(var(--progress-value) * 1%), pink 0);
        animation: js-progress 2s 1 forwards;
    }

    .js::before {
        animation: js-progress 2s 1 forwards;
    }

    progress {
        visibility: hidden;
        width: 0;
        height: 0;
    }
</style>