<template>

    <div class="normalDiv">
        <div class="bg-gray-200 h-8 text-right flex items-center justify-end space-x-4 pr-4">
            <a href="#" class="link flex items-center">
                <span class="ml-2">></span>Insite
            </a>
            <a href="#" class="link flex items-center">
                <span class="ml-2">></span>chevron.com
            </a>
            <a href="#" class="link flex items-center">
                <span class="ml-2">></span>Finance
            </a>
        </div>
    </div>
    <div class="normalDiv">
        <div style="padding: 10px 0px 10px 0px;">
            <Header />
        </div>
    </div>
    <div style="background-color:#f2f2f2; height: 80px; padding: 25px 0 0 0;">
        <div class="normalDiv">
            <div>
                <h1 class="font-title text-2xl"><b>AZURE IDENTITY MANAGEMENT PORTAL</b></h1>
            </div>
        </div>
    </div>
    <div class="normalDiv">
        <div style="padding: 2px 0px 0px 0px; text-align: right;">
            login: photographer@abc.com
        </div>
    </div>
    <div class="normalDiv" style="min-height: 450px; padding-top: 20px;">
        <div>
            <h2 class="font-semibold text-xl">
                <span style="background: linear-gradient(to right, #e2e2e2, #f4f4f4); padding: 7px 20px 5px 2px">
                    {{ subtitle }}
                </span>
            </h2>
            <div style="padding-top: 40px;">
                <NuxtPage />
            </div>
        </div>
    </div>

    <div class="normalDiv">
        <Footer />
    </div>

</template>

<script setup>
    import { provide, ref } from 'vue';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    const subtitle = ref(''); // Create a reactive subtitle
    provide('subtitle', subtitle); // Provide the subtitle to child components


</script>

<style>

    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif !important;
        /*can overwrite the font*/
    }

    .normalDiv {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        /* Center the div */
    }

    @media (max-width: 1440px) {
        .normalDiv>div:first-child {
            padding-left: 20px !important;
            padding-right: 20px !important;
        }

    }
</style>
