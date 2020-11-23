import React, { useState } from "react";
import axios from "axios";
import { API } from "./config";

const EditEmployee = (props) => {
  const { company, id, name, position, getEmployees } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [updateEmployeeName, setUpdateEmployeeName] = useState("");
  const [updateEmployeePosition, setUpdateEmployeePosition] = useState("");
  const [updateEmployeeCompany, setUpdateEmployeeCompany] = useState("");

  const updateEmployee = async () => {
    let response = await axios.put(`${API}/employee`, {
      id: id,
      name: updateEmployeeName,
      company: updateEmployeeCompany,
      position: updateEmployeePosition,
    });
    console.log(response.data);
    setIsEditing(false);
    await getEmployees();
  };
  const deleteEmployee = async (id) => {
    let endpoint = `${API}/employee?id=${id}`;

    let response = await axios.delete(endpoint);
    await getEmployees();
  };
  return (
    <li>
      <button
        onClick={() => {
          deleteEmployee(id);
        }}
      >
        Delete
      </button>

      {isEditing ? (
        <>
          <button onClick={updateEmployee}>Update Employee</button>
          <input
            placeholder="name"
            value={updateEmployeeName}
            onChange={(e) => setUpdateEmployeeName(e.target.value)}
          />
          <input
            placeholder="company"
            value={updateEmployeeCompany}
            onChange={(e) => setUpdateEmployeeCompany(e.target.value)}
          />
          <input
            placeholder="position"
            value={updateEmployeePosition}
            onChange={(e) => setUpdateEmployeePosition(e.target.value)}
          />
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          {name}, {company}, {position}
        </>
      )}
    </li>
  );
};
export default EditEmployee;
