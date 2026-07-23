import { Router } from "express";
import {
  getAllTaskController,
  getTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controller/task.controller.js";

const router = Router();

router.get("/", getAllTaskController);
router.get("/:id", getTaskByIdController);
router.post("/", createTaskController);
router.put('/:id', updateTaskController);
router.delete('/:id', deleteTaskController);

export default router;
