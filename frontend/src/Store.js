import React, { useState } from "react";
import axios from "axios";
import { API } from "./config";
import Grid from '@material-ui/core/Grid';


const EditStore = (props) => {
  const { state, id, name, employees, getStores, setSelectStore} = props;
  const [isEditing, setIsEditing] = useState(false);
  const [updateStoreName, setUpdateStoreName] = useState("");
  const [updateStoreEmployees, setUpdateStoreEmployees] = useState("");
  const [updateStoreState, setUpdateStoreState] = useState("");

  const updateStore = async () => {
    let response = await axios.put(`${API}/store`, {
      id: id,
      name: updateStoreName,
      employees: updateStoreEmployees,
      state: updateStoreState,
    });
    console.log(response.data);
    setIsEditing(false);
    await getStores();
  };
  const deleteStore = async (id) => {
    let endpoint = `${API}/store?id=${id}`;

    let response = await axios.delete(endpoint);
    await getStores();
  };
  return (
    <li>
      <button onClick={() => {
        setSelectStore(id)
      }} >employees</button>
      <button
        onClick={() => {
          deleteStore(id);
        }}
      >
        Delete
      </button>

      {isEditing ? (
        <>
          <button onClick={updateStore}>Update Store</button>
          <input
            placeholder="name"
            value={updateStoreName}
            onChange={(e) => setUpdateStoreName(e.target.value)}
          />
          <input
            placeholder="employees"
            value={updateStoreEmployees}
            onChange={(e) => setUpdateStoreEmployees(e.target.value)}
          />
          <input
            placeholder="state"
            value={updateStoreState}
            onChange={(e) => setUpdateStoreState(e.target.value)}
          />
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          {name}, {employees}, {state}
        </>
      )}
    </li>
  );
};
export default EditStore;
