<template>

    <div class="normalDiv">
        <div style="background-color: #f2f2f2; height: 30px; text-align: right;">
            <i class="pi pi-fw pi-chevron-right separator icon-small"></i><a href="#" class="link">Insite</a>
            <i class="pi pi-fw pi-chevron-right separator icon-small"></i>
            <a href="#" class="link">chevron.com</a>
            <i class="pi pi-fw pi-chevron-right separator icon-small"></i>
            <a href="#" class="link">Finance</a>
        </div>
    </div>
    <div class="normalDiv">
        <div style="padding: 10px 0px 0px 0px;">
            <Header />
        </div>

    </div>
    <div style="background-color:#f2f2f2; height: 80px; padding: 25px 0 0 0;">
        <div class="normalDiv">
            <h1 class="font-title text-2xl"><b>EMPLOYEE ACCOUNT MANAGEMENT</b></h1>
        </div>
    </div>
    <div class="normalDiv">
        <NuxtPage />
    </div>

    <div class="normalDiv">
        <Footer />
    </div>

</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        },
    };
</script>

<style>

    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    .normalDiv {
        margin: 0 auto;
        /* Centers the div */
        width: 85%;
        /* Ensures the div takes up the full width of its parent container */
    }

</style>
