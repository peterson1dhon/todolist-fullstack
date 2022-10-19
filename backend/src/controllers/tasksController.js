const taskModel = require('../models/tasksModel');

const getAll = async (request, response) => {
   const tasks = await taskModel.getAll();
   return response.status(200).json({tasks});
};

const createdTask = async (request, response) => {
   const tasks = await taskModel.createdTask(request.body);
   return response.status(201).json(tasks);
};

const deleteTask = async (request, response) => {
   const { id } = request.params;

   await taskModel.delete.deleteTask(id);
   return response.status(204).json();
};

const updateTasks = async (request, response) => {
   const { id } = request.params;

   await taskModel.updateTasks(id, request.body);
   return response.status(204).json();
};

module.export = {
   getAll,
   createdTask,
   deleteTask,
   updateTasks,
};