<template>

    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Products <span class="arrow">▼</span></a>
            <div class="dropdown-content mega-menu">
                <div class="row">
                    <div class="column">
                        <b>Category 1</b>
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
                    <div class="column">
                        <h3>Category 3</h3>
                        <a href="#">Link 7 test test test</a>
                        <a href="#">Link 8</a>
                        <a href="#">Link 9</a>
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
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        white-space: nowrap;
        /* Prevent text wrapping */
    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }



</style>