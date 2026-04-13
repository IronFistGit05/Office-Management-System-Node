import express from "express";
import {
  getEmployees,
  newForm,
  createEmployee,
  editForm,
  updateEmployee,
  deleteEmployee
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getEmployees);
router.get("/new", newForm);
router.post("/", createEmployee);
router.get("/:id/edit", editForm);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;