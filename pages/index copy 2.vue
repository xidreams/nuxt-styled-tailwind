<template>
    <div>
        <h2 class="font-semibold text-xl">Service Account Management</h2>

        <div style="padding-top: 40px;">

            <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.</p>
        </div>
    </div>

</template>

<script>
    import ToggleSwitch from 'primevue/toggleswitch';
    import MegaMenu from 'primevue/megamenu';
    import InputMask from 'primevue/inputmask';
    import MultiSelect from 'primevue/multiselect';


    export default {
        name: 'Index',
        components: {
            ToggleSwitch
        },
        data() {
            return {
                checked: false,
                value: '',
                // Array of city objects
                cities: [
                    { name: 'New York', code: 'NY' },
                    { name: 'Los Angeles', code: 'LA' },
                    { name: 'Chicago', code: 'CHI' },
                    { name: 'Houston', code: 'HOU' },
                    { name: 'Phoenix', code: 'PHX' }
                ],
                // Array to hold selected cities
                selectedCities: []
            };
        },
        methods: {
            alertMsg(msg) {
                alert('msg=' + msg);
            },
            handleClick() {
                t//his.alertMsg('Button was clicked!'); // Call your function here
            }
        }
    };
</script>
