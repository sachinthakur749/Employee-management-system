import React, { useState, useRef, useEffect } from "react";



const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date){
        
        alert('All fields are required')
    }

    const id = employees.length + 1;
    const newEmployee = {
        id,
        firstName,
        lastName,
        email,
        salary,
        date
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false)
    alert(`${firstName} ${lastName}'s data has been added`)


  };


  const myStyle = {
    color : '#BF8B59'
  }
  const btnStyle = {
    backgroundColor : '#BF8B59',
    color : 'white',
    border : 'none'
  }



  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1 style={myStyle}>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" style={btnStyle} value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;