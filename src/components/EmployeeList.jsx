import React, { useState } from 'react'
import './EmployeeList.css'
import { employeesData } from './EmployeesData'
import swal from 'sweetalert';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';



const EmployeeList = () => {

    const [employees,setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const handleEdit = (id) =>{
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }







    const handleDelete = (id) =>{
        
        const [employee] = employees.filter(employee => employee.id === id);
        setEmployees(employees.filter(employee => employee.id !== id));

    }




  return (
    <div className='container'>
        {!isAdding && !isEditing &&(
            <>
                <Header
                    setIsAdding={setIsAdding}
                />
                <List
                    employees={employees}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </>
        )}
        {isAdding &&(
            <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
            />
        )}
        {isEditing &&(
            <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
            />
        )}
    </div>
  )
}

export default EmployeeList