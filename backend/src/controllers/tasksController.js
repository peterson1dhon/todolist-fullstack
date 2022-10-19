const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
   const tasks = await tasksModel.getAll();
   return response.status(200).json({tasks});
};

const createdTask = async (request, response) => {
   const createdTask = await tasksModel.createdTask(request.body);
   return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
   const { id } = request.params;

   await tasksModel.delete.deleteTask(id);
   return response.status(204).json();
};

const updateTask = async (request, response) => {
   const { id } = request.params;
 
   await tasksModel.updateTask(id, request.body);
   return response.status(204).json();
};

module.export = {
   getAll,
   createdTask,
   deleteTask,
   updateTask,
};