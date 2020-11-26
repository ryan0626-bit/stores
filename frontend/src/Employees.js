import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./config";
import Employee from "./Employee";

const Employees = (props) => {
  const { storeId } = props;

  const [allEmployees, setAllEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeePosition, setNewEmployeePosition] = useState("");

  const getAllStoreEmployees = async () => {
    let endpoint = `${API}/store-employees?storeId=${storeId}`;
    let response = await axios.get(endpoint);
    setAllEmployees(response.data.employees);
  };

  //you need to fix this
  const createNewEmployee = async () => {
    let endpoint = `${API}/employee`;
    let payload = { storeId, name: newEmployeeName, position: newEmployeePosition };
    let response = await axios.post(endpoint, payload);
    setAllEmployees([...allEmployees, response.data.employee]);
  };

  useEffect(() => {
    getAllStoreEmployees();
    //eslint-disable-next-line
  }, [storeId]);
  return (
    <>
      <input
        placeholder="New Employee Name"
        onChange={(e) => setNewEmployeeName(e.target.value)}
      />
      <input
        placeholder="New Employee Position"
        onChange={(e) => setNewEmployeePosition(e.target.value)}
      />
      <button onClick={createNewEmployee}>Add Employee</button>
      <ul>
        {allEmployees.map((employee) => (
          <Employee
            getAllStoreEmployees={getAllStoreEmployees}
            key={employee.id}
            name={employee.name}
            id={employee.id}
            storeId={storeId}
            position={employee.position}
          />
        ))}
      </ul>
    </>
  );
};

export default Employees;
