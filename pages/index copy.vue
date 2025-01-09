<template>
    <div class="p-6">
        <h2 class="text-xl">Welcome to My Website!</h2>
        <p>This is the main content area.</p>
    </div>

    <div class="bg-white border border-gray-300 shadow-lg p-6 rounded-lg">
        <h2 class="text-lg font-semibold mb-4">Sample Box</h2>
        <p class="mb-4">This div has a shaded border and a blue button.</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me
        </button>
    </div>

    <div>
        <Button label="Verify" />
    </div>

    <div>
        <ToggleSwitch v-model="checked" />
        <p>Toggle is {{ checked ? 'On' : 'Off' }}</p>
    </div>
    <div>
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
    <div>
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-80" />
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
        }
    };
</script>
