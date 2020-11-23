import dynamoose from "dynamoose";
const EmployeeSchema = new dynamoose.Schema({
  id: {
    hashKey: true,
    required: true,
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: { type: String, required: true },
});

export const EmployeeModel = dynamoose.model("employee", EmployeeSchema);
