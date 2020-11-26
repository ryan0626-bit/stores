import dynamoose from "dynamoose";
import { stringify } from "uuid";
const StoreSchema = new dynamoose.Schema({
  id: {
    hashKey: true,
    required: true,
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  employees: {
    type: String,
    required: true,
  },
  state: { type: String, required: true },
});

const EmployeeSchema = new dynamoose.Schema({
  storeId: {
    hashKey: true,
    required: true,
    type: String,
  },
  id: {
    rangeKey: true,
    required: true,
    type: String,
  },
  name: { type: String, required: true },
  position: { type: String, required: true },
});

export const StoreModel = dynamoose.model("store", StoreSchema);
export const EmployeeModel = dynamoose.model('store-employee', EmployeeSchema);

