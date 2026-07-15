import { tasks } from "../Data/tasks.js";

export const getAllTaskController = (req, res) => {
  res.status(200).json({
    message: "tasks are fetched successfully",
    data: tasks,
  });
};

export const getTaskByIdController = (req, res) => {
  const Id = Number(req.params.id);
  const result = tasks.find((el) => {
    return el.id === Id;
  });
  if (!result) {
    return res.status(404).json({
      error: `Task ${Id} not found`,
    });
  }
  res.status(200).json({
    message: `The task ${Id} is fetched successfully`,
    data: result,
  });
};

export const createTaskController = (req, res) => {
    const Id = tasks[tasks.length - 1].id+ 1;
  if (!req.body.title) {
    return res.status(400).json({
      error: "The title of the task is missing",
    });
  }
  const newTask = {
    id: Id,
    title: req.body.title,
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json({
    message: "the task created successfully",
    data: newTask,
  });
};
