import type { Employee } from '@/models/Employee';
export const fetchEmployeesFromApi = async (): Promise<Employee[]> => {
  const response = await fetch('https://localhost:7218/Employees', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export async function updateEmployeeApi(employee:Employee) {
  const url = `https://localhost:7218/Employees/${employee.employeeId}`;
  const body = {
    employeeId: employee.employeeId,
    activeStatus: employee.activeStatus,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    phone: employee.phone,
    department: employee.department,
    reportTo: employee.reportTo
  };

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
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


export async function addEmployeeApi(employee: Employee): Promise<Employee | null> {
  const url = `https://localhost:7218/Employees`; 
  const body = {
    employeeId: 0,
    activeStatus: employee.activeStatus,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    phone: employee.phone,
    department: employee.department,
    reportTo: employee.reportTo
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
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
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}



export async function deleteEmployeeApi(employee: Employee) {
  console.log(employee.employeeId);
  const url = `https://localhost:7218/Employees/${employee.employeeId}`;
  console.log('url='+url);
  try {
    const response = await fetch(url, {
      method: 'DELETE'

    });


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
import type { Employee } from '@/models/Employee';

export const getListOfEmployees = async (): Promise<Employee[]> => {
  // Mock data for demonstration purposes
  return [
      {
      employeeId:1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      departmentId: 1,
      department: 'Engineering',
      phone: '123-456-7890',
      location: 'New York'
    },
    {
      employeeId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      departmentId: 2,
      department: 'Marketing',
      phone: '987-654-3210',
      location: 'San Francisco'
    }
    // Add more employees as needed
  ];
};

export const fetchEmployeesFromApi = async (): Promise<Employee[]> => {
  const response = await fetch('https://localhost:7218/Employees', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
*/