<template>

    <ul class="menu">
        <li class="logo"><a href="/"><img src="/assets/images/logo.png" alt="Logo"></a></li>
        <li class="icon">
            <a href="javascript:void(0);" @click="toggleMenu">&#9776;</a>
        </li>
        <li><a href="#home">Applications</a></li>
        <li><a href="#news">Resources</a></li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Accounts <span class="arrow">▼</span></a>
            <div class="dropdown-content mega-menu">
                <div class="row">
                    <div class="column">
                        <h3>Service Accounts</h3>
                        <nuxt-link to="/responsive-boxes">Responsive Boxes</nuxt-link>
                        <a href="#">dropdown list</a>
                        <a href="#">div box</a>
                    </div>
                    <div class="column">
                        <h3>Guest Accounts</h3>
                        <a href="#">radio buttons</a>
                        <a href="#">tree list</a>
                        <a href="#">tree list with checkbox</a>
                    </div>
                    <div class="column">
                        <h3>Guest Accounts</h3>
                        <a href="#">radio buttons</a>
                        <a href="#">tree list</a>
                        <a href="#">tree list with checkbox</a>
                    </div>
                </div>
            </div>
        </li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Employees <span class="arrow">▼</span></a>
            <div class="dropdown-content mega-menu">
                <div class="row">
                    <div class="column">
                        <h3>Employees</h3>
                        <nuxt-link to="/employees/list">Employee CRUD</nuxt-link>
                        <nuxt-link to="/employees/listWithTable">Employee List 1</nuxt-link>
                        <nuxt-link to="/employees/dialogtest">Dialog test</nuxt-link>
                        <a href="#">Vacation Time Report</a>
                    </div>
                    <div class="column">
                        <h3>Employee Update</h3>
                        <a href="#">Contact Info</a>
                        <a href="#">Email Account</a>
                        <a href="#">Profile Update</a>
                        <a href="#">Performance & Feedback</a>
                    </div>
                </div>
            </div>
        </li>
        <li class="search-container">
            <input type="text" placeholder="Search..." class="search-input">
            <button type="button" class="search-button">Search</button>
        </li>
    </ul>

</template>

<script setup>
    import { ref } from "vue";

    function showHelp() {
        console.log('Showing Help');
    }

    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('responsive');
    }
</script>

<style scoped>

    .arrow {
        font-size: 9pt;
        color: gray;
    }

    .menu {
        display: flex;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .logo {
        margin-right: 20px;
        /* Adjust the space between the logo and menu items */
        padding: 0;
        /* Remove padding */
    }

    .logo a {
        display: flex;
        align-items: center;
        height: 100%;
        /* Ensure the logo container matches the height of the menu */
        padding: 0;
        /* Remove padding */
    }

    .logo img {
        height: 40px;
        /* Adjust the height as needed */
        vertical-align: middle;
        margin: 0;
        /* Remove margin */
    }

    li {
        float: none;
        /* Remove float to use flexbox */
    }

    li a,
    .dropbtn {
        display: inline-block;
        color: black;
        text-align: center;
        padding: 14px 14px 14px 14px;
        text-decoration: none;
        font-weight: bold;
        /* Make the main menu items bold */
    }

    li a:hover:not(.logo a),
    .dropdown:hover .dropbtn {
        background-color: #e1e1e1;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 300px;
        /* Set a minimum width */
        max-width: 100%;
        /* Ensure it doesn't exceed the container width */
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content.mega-menu {
        padding: 20px;
        /* Add some padding */
    }

    .dropdown-content .row {
        display: flex;
        flex-wrap: wrap;
        /* Allow wrapping if content overflows */
    }

    .dropdown-content .column {
        flex: 1;
        padding: 10px 10px 10px 10px;
        min-width: 200px;
        /* Ensure columns have a minimum width */
    }

    .dropdown-content .column h3 {
        margin-top: 0;
        font-weight: bold;
        /* Make the heading bold */
    }

    .dropdown-content .column a {
        color: black;
        padding: 2px 20px 2px 0px;
        text-decoration: none;
        display: block;
        text-align: left;
        white-space: nowrap;
        /* Prevent text wrapping */
        font-weight: normal;
        /* Ensure dropdown links are normal weight */
    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .logo a:hover {
        background-color: transparent;
        /* Disable hover background color for logo */
    }

    .search-container {
        margin-left: auto;
        /* Pushes the search container to the right */
        display: flex;
        align-items: center;
    }

    .search-input {
        padding: 6px;
        margin-right: 8px;
        /* Space between input and button */
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .search-button {
        padding: 6px 12px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .search-button:hover {
        background-color: #45a049;
    }

    @media screen and (min-width: 801px) {
        .icon {
            display: none;
        }
    }

    /* Responsive layout */
    @media screen and (max-width: 800px) {
        .menu li:not(.logo) {
            display: none;
            /* Hide all menu items except the logo */
        }

        .menu li.icon {
            display: block;
            /* Show the menu icon */
            margin-left: auto;
            /* Push the icon to the right */
        }

        .menu.responsive {
            flex-direction: column;
            /* Stack the menu items vertically */
            align-items: flex-start;
            /* Align items to the start */
        }

        .menu.responsive li {
            display: block;
            /* Show all menu items */
            width: 100%;
            /* Make them full width */
        }

        .menu.responsive li a,
        .menu.responsive .dropbtn {
            text-align: left;
            /* Align text to the left */
            padding: 14px;
            /* Adjust padding */
        }

        .menu.responsive .search-container {
            flex-direction: column;
            /* Stack the search input and button */
            width: 100%;
            /* Make them full width */
            padding: 14px;
            /* Adjust padding */
        }

        .menu.responsive .search-input {
            margin-right: 0;
            /* Remove margin */
            margin-bottom: 8px;
            /* Add margin below */
            width: 100%;
            /* Make it full width */
        }

        .menu.responsive .search-button {
            width: 100%;
            /* Make it full width */
        }
    }


</style>