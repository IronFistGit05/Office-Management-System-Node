import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  jobTitle: String,

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },

  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  },

  country: String,
  state: String,
  city: String
});

export default mongoose.model("Employee", employeeSchema);