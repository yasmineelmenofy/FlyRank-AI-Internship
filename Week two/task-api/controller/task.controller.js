import { tasks } from "../Data/tasks.js";

export const getAllTaskController = (req, res) => {
  const query = req.query.done;
  if (typeof query !== 'undefined' && query !== 'true' && query !== 'false') {
    return res.status(400).json({
      error:'Enter valid query '
    })
  }
  let ans;
  if (typeof query !== 'undefined') {
    ans = tasks.filter((el) => {
      return String(el.done) === query;
    })
  } else {
    ans = tasks;
  }
  res.status(200).json({
    message: "tasks are fetched successfully",
    data: ans,
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
  const Id = tasks[tasks.length - 1].id + 1;
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

export const updateTaskController = (req, res) => {
  const Id = Number(req.params.id);
  const result = tasks.find((el) => {
    return el.id === Id;
  });
  if (!result) {
    return res.status(404).json({
      error: `Task ${Id} not found`,
    });
  }
  if (
    typeof req.body.title === "undefined" &&
    typeof req.body.done === "undefined"
  ) {
    return res.status(400).json({
      error: "empty/invalid data",
    });
  }
  if (
    typeof req.body.title !== "undefined" &&
    (typeof req.body.title !== "string" || req.body.title.trim() === "")
  ) {
    return res.status(400).json({
      error: "Title must be a non-empty string",
    });
  }
  if (
    typeof req.body.done !== "undefined" &&
    typeof req.body.done !== "boolean"
  ) {
    return res.status(400).json({
      error: "Done must be a boolean",
    });
  }
  const updatedTask = {
    id: Id,
    title: req.body.title ?? result.title,
    done: req.body.done ?? result.done,
  };
  const idx = tasks.findIndex((el) => {
    return el.id === Id;
  });
  tasks[idx] = updatedTask;
  res.status(200).json({
    message: "The task is updated successfully",
    data: updatedTask,
  });
};

export const deleteTaskController = (req, res) => {
  const Id = Number(req.params.id);
  const result = tasks.find((el) => {
    return el.id === Id;
  });
  if (!result) {
    return res.status(404).json({
      error: `unkown id ${Id}`,
    });
  }
  const idx = tasks.findIndex((el) => {
    return el.id === Id;
  });
  tasks.splice(idx, 1);
  res.status(204).send();
};
