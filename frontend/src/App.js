import React, { useEffect, useState } from "react";
import { API } from "./config";
import axios from "axios";
import { v4 as uuid } from "uuid";
import EditStore from "./Store";
import Grid from "@material-ui/core/Grid";
import Employees from "./Employees";
import _ from "lodash";

function App() {
  const [stores, setStores] = useState([]);
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState("");
  const [state, setState] = useState("");
  const [totalEmployees, setTotalEmployees] = useState(0);

  const [selectStore, setSelectStore] = useState(null);

  const getStores = async () => {
    let endpoint = `${API}/stores`;
    let response = await axios.get(endpoint);
    setStores(response.data.stores);
  };

  const addStore = async () => {
    let endpoint = `${API}/store`;
    let payload = { name, employees, state };
    let response = await axios.post(endpoint, payload);
    setStores([...stores, response.data.store]);
  };

  const handleSelectChange = (e) => {
    let state = e.target.value;
    let tempTotal = 0;
    stores.forEach((store) => {
      if (state === "all") {
        tempTotal = tempTotal + parseInt(store.employees);
      } else if (store.state === state) {
        tempTotal = tempTotal + parseInt(store.employees);
      }
    });
    setTotalEmployees(tempTotal);
    // selectedState
  };

  useEffect(() => {
    getStores();
  }, []);

  let states = _.uniq(stores.map((store) => store.state)).sort();

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <input
            placeholder="Add Store name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Add Store employees here"
            onChange={(e) => {
              setEmployees(e.target.value);
            }}
          />
          <input
            placeholder="Add Store state here"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <button variant="contained" color="primary" onClick={addStore}>
            Add Store Here
          </button>
          <select onChange={handleSelectChange}>
            <option value="all">All</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {`Total Employees: ${totalEmployees}`}
          <ul>
            {stores.map((stores) => (
              <EditStore
                setSelectStore={setSelectStore}
                getStores={getStores}
                key={stores.id}
                name={stores.name}
                employees={stores.employees}
                state={stores.state}
                id={stores.id}
              />
            ))}
          </ul>
        </Grid>
        <Grid item xs={6}>
          {selectStore && <Employees storeId={selectStore} />}
        </Grid>
      </Grid>
    </div>
  );
}
export default App;

// 1.)  build an input that you can use to creatae an employee in the backend
// 2.) Create a simple list (not complex) that will simply list all employee names (don't worry about the other stuff yet)
// have have the get the id of the specific employee you want to delete
//the only way of doing that is if this button exists inside the rendering of the list
// so when the employee is rendered from the list you can get the specifc id from that
//employee and send it
