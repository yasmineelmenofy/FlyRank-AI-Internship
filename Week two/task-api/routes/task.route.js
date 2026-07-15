import { Router } from "express";
import { getAllTaskController,getTaskByIdController } from "../controller/task.controller.js";


const router = Router();



router.get('/',getAllTaskController);
router.get('/:id', getTaskByIdController);


export default router;