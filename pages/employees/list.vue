<!-- pages/responsive-boxes.vue -->
<template>

    <div class="overflow-x-auto">
        <Button label="Add New" icon="pi pi-plus" @click="openDialogNew()" />

        <table class="table-auto bg-white border border-gray-200 text-left">
            <thead>
                <tr class="bg-gray-300 text-sm">
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Employee ID</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">First Name</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Last Name</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Email</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Phone</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Department</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Report To</th>
                    <th class="px-2 py-1 border border-gray-400 text-left uppercase text-xs">Action</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees" :key="employee.employeeId"
                    :class="{ 'bg-[#f4f4f4]': index % 2 === 1 }" class="hover:bg-yellow-100 text-sm">
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.employeeId }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.firstName }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.lastName }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.email }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.phone }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.department }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs">{{ employee.reportTo }}</td>
                    <td class="px-2 py-1 border border-gray-300 text-left text-xs flex space-x-2">
                        <button class="text-blue-500 hover:text-blue-700" @click="viewDetails(employee)">
                            <i class="pi pi-book"></i>
                        </button>
                        <button class="text-green-500 hover:text-green-700" @click="updateEmployee(employee)">
                            <i class="pi pi-pencil"></i>
                        </button>
                        <button class="text-red-500 hover:text-red-700" @click="deleteEmployee(employee)">
                            <i class="pi pi-trash"></i>
                        </button>
                    </td>
                </tr>
                <tr v-if="errorMessage">
                    <td colspan="8" class="px-2 py-1 border border-gray-300 text-left text-xs text-red-500">
                        {{ errorMessage }}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

    <Dialog :modal="true" header="Employee Details" v-model:visible="showDialogDetail" @hide="closeDialogDetail"
        :style="{ width: '600px' }">
        <table>
            <tbody>
                <tr>
                    <td><b>First Name</b>:</td>
                    <td>
                        {{ selectedEmployee.firstName }}
                    </td>
                </tr>
                <tr>
                    <td><b>Last Name</b>:</td>
                    <td>
                        {{ selectedEmployee.lastName }}
                    </td>
                </tr>
                <tr>
                    <td><b>Email</b>:</td>
                    <td>
                        {{ selectedEmployee.email }}
                    </td>
                </tr>
                <tr>
                    <td><b>Phone</b>:</td>
                    <td>
                        {{ selectedEmployee.phone }}
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <Button label="Cancel" class="p-button-secondary" @click="cancelDetail" />
                        <Button label="Cancel" @click="() => closeDialog('detail')" />
                    </td>
                </tr>
            </tbody>
        </table>
    </Dialog>

    <Dialog :modal="true" header="Edit Employee Details" v-model:visible="showDialogEdit" @hide="closeDialogEdit"
        :style="{ width: '600px' }">
        <form @submit.prevent="submitEdit">
            <table>
                <tbody>
                    <tr>
                        <td><b>First Name</b>:</td>
                        <td>
                            <InputText v-model="selectedEmployee.firstName" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Last Name</b>:</td>
                        <td>
                            <InputText v-model="selectedEmployee.lastName" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Email</b>:</td>
                        <td>
                            <InputText v-model="selectedEmployee.email" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Phone</b>:</td>
                        <td>
                            <InputText v-model="selectedEmployee.phone" required />
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <Button label="Update" type="submit" />
                            <Button label="Cancel" class="p-button-secondary" @click="cancelEdit" />
                            <Button label="Cancel" @click="() => closeDialog('edit')" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </Dialog>

    <Dialog :modal="true" header="Add New Employee" v-model:visible="showDialogNew" @hide="closeDialogNew"
        :style="{ width: '600px' }">
        <form @submit.prevent="submitNew">
            <table>
                <tbody>
                    <tr>
                        <td><b>First Name</b>:</td>
                        <td>
                            <InputText v-model="employee.firstName" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Last Name</b>:</td>
                        <td>
                            <InputText v-model="employee.lastName" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Email</b>:</td>
                        <td>
                            <InputText v-model="selectedEmployee.email" required @input="handleEmailInput" />
                            <span v-if="!isEmailValid" class="error-message">Please enter a valid email address.</span>
                            <span v-if="isEmailValid && !isLengthValid" class="error-message">Email must be less than
                                250 characters.</span>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Phone</b>:</td>
                        <td>
                            <InputText v-model="employee.phone" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Department</b>:</td>
                        <td>
                            <InputText v-model="employee.department" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Department</b>:</td>
                        <td>
                            <InputText v-model="employee.department" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Active Status</b>:</td>
                        <td>
                            <InputText v-model="employee.activeStatus" required />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Report To</b>:</td>
                        <td>
                            <InputNumber v-model="employee.reportTo" required />
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <Button label="Add New" type="submit" />
                            <Button label="Cancel" class="p-button-secondary" @click="cancelNew" />
                            <Button label="Cancel" @click="() => closeDialog('new')" />

                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </Dialog>

    <Dialog :modal="true" header="Delete Employee" v-model:visible="showDialogDelete" @hide="closeDialogDelete"
        :style="{ width: '600px' }">
        <form @submit.prevent="submitDelete">
            <table>
                <tbody>
                    <tr>
                        <td><b>First Name</b>:</td>
                        <td>
                            {{ selectedEmployee.firstName }}
                        </td>
                    </tr>
                    <tr>
                        <td><b>Last Name</b>:</td>
                        <td>
                            {{ selectedEmployee.lastName }}
                        </td>
                    </tr>
                    <tr>
                        <td><b>Email</b>:</td>
                        <td>
                            {{ selectedEmployee.email }}
                        </td>
                    </tr>
                    <tr>
                        <td><b>Phone</b>:</td>
                        <td>
                            {{ selectedEmployee.phone }}
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <Button label="Delete" type="submit" />
                            <Button label="Cancel" class="p-button-secondary" @click="cancelDelete" />
                            <Button label="Cancel" @click="() => closeDialog('delete')" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </Dialog>
</template>

<script setup lang="ts">
    import { inject, ref, onMounted } from 'vue';
    //import Dialog from 'primevue/dialog';
    //import InputText from 'primevue/inputtext';
    //import Button from 'primevue/button';
    import type { Employee } from '@/models/Employee';
    import { fetchEmployeesFromApi, updateEmployeeApi, addEmployeeApi, deleteEmployeeApi } from '@/services/employeeService';
    import { errorMessages } from '@vue/compiler-core';

    import { useEmailValidation } from '@/composables/validations';

    const subtitle = inject<Ref<string>>('subtitle');
    const employees = ref<Employee[]>([]);
    const employee = ref<Employee>({} as Employee);
    const errorMessage = ref('');

    const showDialogDetail = ref(false);
    const showDialogEdit = ref(false);
    const showDialogNew = ref(false);
    const showDialogDelete = ref(false);
    //const selectedEmployee = ref<Employee | null>(null);
    const selectedEmployee = ref<Employee>({} as Employee);

    onMounted(async () => {
        // Set the subtitle value when the component is mounted
        if (subtitle) {
            subtitle.value = 'List of Employees';
        }

        //throw new Error('This is a test error xyz');

        try {

            /*
            const a: number = 0;
            const b: number = 1;
            var c = 0;

            if (a === 0) {
                throw new Error('Division by zero');
            } else {
                c = b / a;
            }
*/
            // Fetch employees from the API
            employees.value = await fetchEmployeesFromApi();

        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching employees:', error);
                errorMessage.value = `Error fetching employees: ${error.message}`;
            } else {
                console.error('Unexpected error:', error);
                errorMessage.value = 'An unexpected error occurred';
            }
        }
    });

    const viewDetails = (employee: Employee) => {
        console.log('View details for employee:', employee.employeeId);
        // Add your logic here
        selectedEmployee.value = employee;
        showDialogDetail.value = true;
    };
    const openDialogNew = () => {
        console.log('open new dialog:');
        showDialogNew.value = true;
        isEmailValid.value = true; //reset
    };
    const updateEmployee = (employee: Employee) => {
        console.log('Update employee:', employee.employeeId);
        // Add your logic here
        selectedEmployee.value = employee;
        showDialogEdit.value = true;
    };

    const deleteEmployee = (employee: Employee) => {
        console.log('delete employee:', employee.employeeId);
        // Add your logic here
        selectedEmployee.value = employee;
        showDialogDelete.value = true;
    };

    const cancelDetail = () => {
        // Add your cancel logic here
        console.log('Detail cancelled');
        alert('canceled');
        closeDialogDetail();
    };
    const cancelEdit = () => {
        // Add your cancel logic here
        console.log('Edit cancelled');
        alert('canceled');
        closeDialogEdit();
    };
    const cancelDelete = () => {
        // Add your cancel logic here
        console.log('Delete cancelled');
        alert('canceled');
        closeDialogDelete();
    };
    const closeDialogDetail = () => {
        showDialogDetail.value = false;
    };
    const closeDialogEdit = () => {
        showDialogEdit.value = false;
    };
    const closeDialogDelete = () => {
        showDialogDelete.value = false;
    };
    const cancelNew = () => {
        // Add your cancel logic here
        console.log('New  cancelled');
        alert('canceled');
        closeDialogNew();
    };
    const closeDialogNew = () => {
        showDialogNew.value = false;
    };
    const submitNew = async () => {
        //console.log('Edited employee details:', selectedEmployee.value);
        // Add your submit logic here
        const body = {
            //employeeId: employee.value.employeeId,
            firstName: employee.value.firstName,
            lastName: employee.value.lastName,
            email: employee.value.email,
            phone: employee.value.phone,
            activeStatus: employee.value.activeStatus,
            department: employee.value.department,
            reportTo: employee.value.reportTo
        };

        console.log('edit...');

        const newEmployee = await addEmployeeApi(employee.value);

        //employees.value = await fetchEmployeesFromApi(); //sync the list of employee - works
        if (newEmployee) {
            employees.value.push(newEmployee);
        }

        /*
                const url = `https://localhost:7218/Employees/${selectedEmployee.value.employeeId}`;
                try {
                    const response = await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    });
        
                    console.log(response);
        
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
        
                    const data = await response.json();
                    console.log('Success:', data);
                } catch (error) {
                    console.error('Error:', error);
                }
        */
        closeDialogNew();
    };
    const submitEdit = async () => {
        //console.log('Edited employee details:', selectedEmployee.value);
        // Add your submit logic here
        const body = {
            employeeId: selectedEmployee.value.employeeId,
            firstName: selectedEmployee.value.firstName,
            lastName: selectedEmployee.value.lastName,
            email: selectedEmployee.value.email,
            phone: selectedEmployee.value.phone,
            activeStatus: selectedEmployee.value.activeStatus,
            department: selectedEmployee.value.department,
            reportTo: selectedEmployee.value.reportTo
        };

        console.log(body);

        await updateEmployeeApi(selectedEmployee.value);
        /*
                const url = `https://localhost:7218/Employees/${selectedEmployee.value.employeeId}`;
                try {
                    const response = await fetch(url, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    });
        
                    console.log(response);
        
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
        
                    const data = await response.json();
                    console.log('Success:', data);
                } catch (error) {
                    console.error('Error:', error);
                }
        */
        closeDialogEdit();
    };
    const submitDelete = async () => {

        console.log('delete...');
        await deleteEmployeeApi(selectedEmployee.value);
        //employees.value = await fetchEmployeesFromApi(); //sync the list of employee-works
        employees.value = employees.value.filter(emp => emp.employeeId !== selectedEmployee.value.employeeId); //update the list

        closeDialogDelete();
    };

    const { isEmailValid, isLengthValid, validateEmail } = useEmailValidation();
    //const isEmailValid = ref(true);

    const handleEmailInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        validateEmail(target.value);
    };

    const closeDialog = (dialog: string) => {
        if (dialog === 'detail') {
            showDialogDetail.value = false;
        } else if (dialog === 'edit') {
            showDialogEdit.value = false;
        } else if (dialog === 'new') {
            showDialogNew.value = false;
        }
        else if (dialog === 'delete') {
            showDialogDelete.value = false;
        }
    };

    /* local use
    //const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Define the email pattern as a string
    //const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.source;
    const emailPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';

    // Function to validate the email
    const validateEmail = (email: string): boolean => {
        console.log(emailPattern);
        const regex = new RegExp(emailPattern);
        return regex.test(email);
    };

    // Handler for the input event
    const handleEmailInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        console.log(target.value);

        isEmailValid.value = validateEmail(target.value);
    };

*/
</script>

<style scoped>
    /* Your styles go here */
</style>
