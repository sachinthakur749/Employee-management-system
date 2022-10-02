import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";

import NoMatchFound from "./components/NoMatchFound";
import Login from "./Login";



function App() {

  return (
    <>
    <Routes>
          {/* <Login/> */}
          <Route  path="/" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard/>} /> 
              {/* <Route path="userlist" element={<UserList/>}/> */}
              <Route path="emplist" element={<EmployeeList/>} />
          
          <Route path="*" element={<NoMatchFound/>}/>
          
          
    </Routes>
    </>
  );
}

export default App;
