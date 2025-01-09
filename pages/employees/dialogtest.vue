<template>
    <div>
        <Button label="Open Dialog" @click="showDialog = true" />
        <Dialog header="Create New Employee X" v-model:visible="showDialog" :modal="true" @hide="dialogboxclose"
            :style="{ width: '600px' }">
            <form @submit.prevent="updateEmployee">

                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>
                                <InputText id="firstName" v-model="employee.firstName" required />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>
                                <InputText id="lastName" v-model="employee.lastName" required />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <InputText id="email" v-model="employee.email" required />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>
                                <InputText id="phone" v-model="employee.phone" required />
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <Button label="Submit" type="submit" />
                                <Button label="Cancel" class="p-button-secondary" @click="cancelEdit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
    import { inject, ref, onMounted } from 'vue';
    import Button from 'primevue/button';
    import Dialog from 'primevue/dialog';
    import InputText from 'primevue/inputtext';
    import type { Employee } from '@/models/Employee';

    const subtitle = inject<Ref<string>>('subtitle');

    onMounted(async () => {
        // Set the subtitle value when the component is mounted
        if (subtitle) {
            subtitle.value = 'Dialog Testings';
        }
    });

    //interface Employee {
    //name: string;
    //position: string;
    //}

    const showDialog = ref(false);


    const employee = ref({
        employeeId: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        departmentId: 1,
        department: 'Engineering',
        phone: '123-456-7890',
        reportTo: 2
    });

    const updateEmployee = () => {
        // Add your update logic here
        console.log('Employee updated:', employee.value);
        alert('update');
    };

    const cancelEdit = () => {
        // Add your cancel logic here
        console.log('Edit cancelled');
        alert('canceled');
        dialogboxclose();
    };


    /*
        const createNewEmployee = () => {
            console.log('Employee Created:', employee);
            showDialog.value = false;
        };
    */
    const dialogboxclose = () => {
        showDialog.value = false;
    };

</script>

<style scoped>
    .p-field {
        margin-bottom: 1rem;
    }

    .p-dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
</style>