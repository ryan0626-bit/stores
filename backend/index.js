import { v4 as uuid } from "uuid";
import { response } from "./helpers";
import { EmployeeModel } from "./models";

export const updateEmployee = async ({ body }) => {
  const { id, name, company, position } = JSON.parse(body);
  await EmployeeModel.update({ id }, { name, company, position });
  return response({ success: true });
};

export const createEmployee = async ({ body }) => {
  const { name, company, position } = JSON.parse(body);
  let employee = await EmployeeModel.create({
    id: uuid(),
    name,
    company,
    position,
  });

  return response({ success: true, employee });
};

export const deleteEmployee = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  await EmployeeModel.delete({ id });
  return response({ success: true });
};

export const getEmployees = async () => {
  const employees = await EmployeeModel.scan().exec();
  return response({ success: true, employees });
};
