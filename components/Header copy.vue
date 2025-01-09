<template>
    <Menubar :model="items">
        <template #start>
            <a href="/" class="logo-link" title="Go to Home Page">
                <img src="/assets/images/logo.png" alt="Logo" class="logo" />
            </a>
        </template>
        <template #end>
            <div class="search-container">
                <input type="text" placeholder="Search..." class="search-input" />
                <button class="search-button">Search</button>
            </div>
        </template>
    </Menubar>

</template>

<script setup>
    import { ref } from "vue";
    import Menubar from 'primevue/menubar'; // Ensure this import is correct
    components: { Menubar };

    const items = ref([
        {
            label: 'Accounts',
            items: [
                { label: 'Request Vacation', url: '/request-vacation' },
                { label: 'Update My Account', url: '/update-account' },
                { label: 'Timesheet', url: '/timesheet' },
                { label: 'Performance Review', url: '/performance-review' },
                { label: 'Rewards', url: '/rewards' },
                { label: 'My Links', url: '/my-links' }
            ]
        },
        {
            label: 'Contact Us',
            url: '/contact-us'
        },
        {
            label: 'Help',
            url: '/help'
        },
        {
            label: 'Search',
            url: '/search'
        }
    ]);

    function navigateToHome() {
        console.log('Navigating to Home');
    }

    function requestVacation() {
        console.log('Requesting Vacation');
    }

    function updateAccount() {
        console.log('Updating Account');
    }

    function viewTimesheet() {
        console.log('Viewing Timesheet');
    }

    function performanceReview() {
        console.log('Viewing Performance Review');
    }

    function viewRewards() {
        console.log('Viewing Rewards');
    }

    function viewLinks() {
        console.log('Viewing My Links');
    }

    function contactUs() {
        console.log('Contacting Us');
    }

    function showHelp() {
        console.log('Showing Help');
    }
</script>

<style scoped>

    .p-menubar {
        border: none !important;
    }

    .logo-link {
        display: flex;
        align-items: center;
    }

    .logo {
        height: 45px;
        /* Adjust height as needed */
        margin-right: 1rem;
        /* Space between logo and menu items */
    }

    .search-container {
        display: flex;
        align-items: center;
    }

    .search-input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 0.5rem;
    }

    .search-button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .search-button:hover {
        background-color: #0056b3;
    }
</style>
