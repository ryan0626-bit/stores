import React, { useEffect, useState } from "react";
import { API } from "./config";
import axios from "axios";
import { v4 as uuid } from "uuid";
import EditEmployee from "./Employee";

function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    let endpoint = `${API}/employees`;
    let response = await axios.get(endpoint);
    setEmployees(response.data.employees);
  };

  const addEmployee = async () => {
    let endpoint = `${API}/employee`;
    let payload = { name, company, position };
    let response = await axios.post(endpoint, payload);
    setEmployees([...employees, response.data.employee]);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <input
        placeholder="Add Employee name here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Add Employee company here"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <input
        placeholder="Add Employee position here"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
      <button variant="contained" color="primary" onClick={addEmployee}>
        Add Employee Here
      </button>
      <ul>
        {employees.map((employee) => (
          <EditEmployee
            getEmployees={getEmployees}
            key={employee.id}
            name={employee.name}
            company={employee.company}
            position={employee.position}
            id={employee.id}
          />
        ))}
      </ul>
    </>
  );
}
export default App;

// 1.)  build an input that you can use to creatae an employee in the backend
// 2.) Create a simple list (not complex) that will simply list all employee names (don't worry about the other stuff yet)
// have have the get the id of the specific employee you want to delete
//the only way of doing that is if this button exists inside the rendering of the list
// so when the employee is rendered from the list you can get the specifc id from that
//employee and send it
