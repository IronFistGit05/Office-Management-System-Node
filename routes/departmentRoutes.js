import express from "express";
import {
  getDepartments,
  newForm,
  createDepartment
} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", getDepartments);
router.get("/new", newForm);
router.post("/", createDepartment);

export default router;