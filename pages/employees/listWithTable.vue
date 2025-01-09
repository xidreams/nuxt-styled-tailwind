<!-- pages/responsive-boxes.vue -->
<template>
    <div>
        <DataTable :value="employees" paginator :rows="10" :totalRecords="totalRecords" :lazy="true" :first="first"
            @page="onPage" class="custom-datatable">
            <Column field="employeeId" header="ID"></Column>
            <Column field="firstName" header="First Name"></Column>
            <Column field="lastName" header="Last Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="department" header="Department"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="activeStatus" header="Status"></Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
    import { inject, ref, onMounted } from 'vue';
    //import Dialog from 'primevue/dialog';
    //import InputText from 'primevue/inputtext';
    //import Button from 'primevue/button';
    import type { Employee } from '@/models/Employee';
    import { fetchEmployeesFromApi, updateEmployeeApi, addEmployeeApi, deleteEmployeeApi } from '@/services/employeeService';
    const subtitle = inject<Ref<string>>('subtitle');
    const employees = ref<Employee[]>([]);
    const employee = ref<Employee>({} as Employee);
    const totalRecords = ref(0);
    const first = ref(0);

    onMounted(async () => {
        // Set the subtitle value when the component is mounted
        if (subtitle) {
            subtitle.value = 'List of Employees with PrimeVUE table';
        }


        loadEmployees(1, 10);

        /*

        try {
            // Fetch employees from the API
            employees.value = await fetchEmployeesFromApi();
            const response = await fetch('https://localhost:7218/Employees', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching employees:', error);
            } else {
                console.error('Unexpected error:', error);
            }
        }
            */
    });

    const loadEmployees = async (page: number, rows: number) => {
        // Fetch data from your API
        //const apiurl = "https://localhost:7218/Employees/EmployeePaging?page=1&rows=10";
        const apiurl = `https://localhost:7218/Employees/EmployeePaging?page=${page}&rows=${rows}`;
        console.log('api==' + apiurl);

        const response = await fetch(apiurl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        //test

        const data = await response.json();

        console.log(data);

        employees.value = data.employees;
        totalRecords.value = data.totalRecords;

        console.log('totalRecords=' + totalRecords.value);
        console.log(employees.value);

    };

    const onPage = (event: any) => {
        first.value = event.first;
        loadEmployees(event.page + 1, event.rows);
    };

</script>

<style scoped>


    .custom-datatable th {
        background-color: lightgray;
    }

    .custom-datatable td {
        font-size: 14px;
        color: darkblue;
    }

</style>
