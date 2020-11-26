import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./config";

const Employee = (props) => {
  const { id, name, position, storeId, getAllStoreEmployees } = props;
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPosition, setUpdatedPosition] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const updateEmployee = async () => {
    let endpoint = `${API}/employee`;
    let payload = { name: updatedName, position: updatedPosition, storeId, id };
    const reponse = await axios.put(endpoint, payload);
    await getAllStoreEmployees();
    setIsEditing(false);
  };

  useEffect(() => {
    setUpdatedName(name);
  }, [name]);
  useEffect(() => {
    setUpdatedPosition(position);
  }, [position]);

  return isEditing ? (
    <>
      <input
        placeholder="name"
        onChange={(e) => {
          setUpdatedName(e.target.value);
        }}
      />
      <input
        placeholder="position"
        onChange={(e) => {
          setUpdatedPosition(e.target.value);
        }}
      />
      <button onClick={updateEmployee}>Save</button>
    </>
  ) : (
    <>
      <div>{`${name}, ${position}`}</div>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
};

export default Employee;
