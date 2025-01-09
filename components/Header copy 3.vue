<template>

    <ul class="menu">
        <li class="logo"><a href="#"><img src="/assets/images/logo.png" alt="Logo"></a></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Products <span class="arrow">▼</span></a>
            <div class="dropdown-content mega-menu">
                <div class="row">
                    <div class="column">
                        <h3>Category 1</h3>
                        <a href="#">Link 1 test test test test test</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    <div class="column">
                        <h3>Category 2</h3>
                        <a href="#">Link 4</a>
                        <a href="#">Link 5</a>
                        <a href="#">Link 6</a>
                    </div>
                </div>
            </div>
        </li>
    </ul>

</template>

<script setup>
    import { ref } from "vue";

    function showHelp() {
        console.log('Showing Help');
    }
</script>

<style scoped>
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
        padding: 14px 16px;
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
        padding: 10px;
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
        padding: 12px 16px;
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


</style>