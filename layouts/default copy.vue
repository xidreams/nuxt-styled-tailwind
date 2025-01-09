<template>
    <div class="min-h-screen bg-gray-100">
        <Header />
        <main>
            <NuxtPage /> <!-- This is crucial for rendering your pages -->
        </main>
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

<style scoped>
    /* Add any scoped styles here */
</style>
