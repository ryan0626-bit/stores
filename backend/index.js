import { v4 as uuid } from "uuid";
import { response } from "./helpers";
import { EmployeeModel, StoreModel } from "./models";

export const updateStore = async ({ body }) => {
  const { id, name, employees, state } = JSON.parse(body);
  await StoreModel.update({ id }, { name, employees, state });
  return response({ success: true });
};

export const createStore = async ({ body }) => {
  const { name, employees, state } = JSON.parse(body);
  let store = await StoreModel.create({
    id: uuid(),
    name,
    employees,
    state,
  });

  return response({ success: true, store });
};

export const deleteStore = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  await StoreModel.delete({ id });
  return response({ success: true });
};

export const getStores = async () => {
  const stores = await StoreModel.scan().exec();
  return response({ success: true, stores });
};

export const createEmployee = async ({body}) => {
  const { storeId, name, position } = JSON.parse(body);
  let employee = await EmployeeModel.create({
    id: uuid(),
    storeId,
    name,
    position,
  });
  return response({ employee });
};

export const updateEmployee = async ({ body }) => {
  const { storeId, id, name, position } = JSON.parse(body);
  await EmployeeModel.update({ storeId, id }, { name, position });
  return response({ success: true });
};

export const getAllEmployees = async () => {
  const employees = await EmployeeModel.scan().exec();
  return response({ success: true, employees });
};

export const getStoreEmployees = async ({ queryStringParameters }) => {
  const { storeId } = queryStringParameters;
  const employees = await EmployeeModel.query({ storeId }).exec();
  return response({ success: true, employees });
};

export const deleteEmployee = async ({ queryStringParameters }) => {
  const { storeId, id } = queryStringParameters;
  await EmployeeModel.delete({ storeId, id });
  return response({ success: true });
};
//createEmployee
//updateEmployee
//getAllEmployees
//getStoreEmployees
//deleteEmployee
