<template>

    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Products <span class="arrow">&#9660;</span></a>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
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

    .dropbtn {
        position: relative;
        padding-right: 10px;
        /* Adjust as needed */
    }

    .arrow {
        font-size: 10px;
        /* Adjust size as needed */
        margin-left: 1px;
        /* Space between text and arrow */
    }


    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;

    }

    li {
        float: left;
    }

    li a,
    .dropbtn {
        display: inline-block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover,
    .dropdown:hover .dropbtn {
        background-color: red;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
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
