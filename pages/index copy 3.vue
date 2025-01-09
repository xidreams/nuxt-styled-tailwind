<template>

    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit
        anim id est laborum.</p>
</template>

<script setup>
    import { inject } from 'vue';
    const subtitle = inject('subtitle'); // Inject the provided subtitle
    onMounted(() => {
        subtitle.value = 'Service Account Management'; // Set the subtitle value when the component is mounted
    });
</script>
