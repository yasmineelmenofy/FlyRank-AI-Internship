import { Router } from "express";
import {
  getAllTaskController,
  getTaskByIdController,
  createTaskController,
} from "../controller/task.controller.js";

const router = Router();

router.get("/", getAllTaskController);
router.get("/:id", getTaskByIdController);
router.post('/', createTaskController);

export default router;
