"use strict";

import { Request, Response } from "express";
import TaskService from "@components/services/TaskService";

const TaskController = {
  create: async (req: Request, res: Response) => {
    let response = await TaskService.create(req);
    res.status(response.status).json(response);
  },

  getOne: async (req: Request, res: Response) => {
    let response = await TaskService.getOne(req);
    res.status(response.status).json(response);
  },

  getList: async (req: Request, res: Response) => {
    let response = await TaskService.getList(req);
    res.status(response.status).json(response);
  },

  update: async (req: Request, res: Response) => {
    let response = await TaskService.update(req);
    res.status(response.status).json(response);
  },

  delete: async (req: Request, res: Response) => {
    let response = await TaskService.delete(req);
    res.status(response.status).json(response);
  },
};

export default TaskController;
