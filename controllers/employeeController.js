import Employee from "../models/Employee.js";
import Department from "../models/Department.js";

export const getEmployees = async (req, res) => {
  const { page = 1, search = "", department } = req.query;
  const limit = 5;

  let query = {
    name: { $regex: search, $options: "i" }
  };

  if (department) query.department = department;

  const employees = await Employee.find(query)
    .populate("department supervisor")
    .skip((page - 1) * limit)
    .limit(limit);

  const departments = await Department.find();

  res.render("employees/index", { employees, departments });
};

export const newForm = async (req, res) => {
  const departments = await Department.find();
  const employees = await Employee.find();

  res.render("employees/new", { departments, employees });
};

export const createEmployee = async (req, res) => {
  if (!req.body.supervisor) {
    req.body.supervisor = null;
  }

  await Employee.create(req.body);
  res.redirect("/employees");
};

export const editForm = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  const departments = await Department.find();
  const employees = await Employee.find();

  res.render("employees/edit", { employee, departments, employees });
};

export const updateEmployee = async (req, res) => {
  if (!req.body.supervisor) {
    req.body.supervisor = null;
  }

  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/employees");
};

export const deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/employees");
};