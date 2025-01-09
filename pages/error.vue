<template>
    <div class="bg-yellow-50 p-4 border shadow-md">
        <h1 class="text-red-600 font-bold">Error</h1>
        <p>{{ errorMessage }}</p>
        <br />
        <br />
        Please contact technical support for help at <a href="#">helpdesk</a>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { inject, ref, onMounted } from 'vue';

    const route = useRoute();
    const errorMessage = route.query.message || 'An unexpected error occurred';
    const subtitle = inject('subtitle', ref(''));

    onMounted(() => {
        // Set the subtitle value
        subtitle.value = 'Unexpected Application Error';
    });
</script>

<style scoped></style>
