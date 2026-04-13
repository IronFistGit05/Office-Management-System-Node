import Department from "../models/Department.js";

export const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.render("departments/index", { departments });
};

export const newForm = (req, res) => {
  res.render("departments/new");
};

export const createDepartment = async (req, res) => {
  await Department.create(req.body);
  res.redirect("/departments");
};