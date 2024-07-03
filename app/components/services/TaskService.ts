"use strict";

import { Request } from "express";

import { success, badRequest, serverError } from "@components/responses";
import TaskRepository from "@components/repositories/TaskRepository";

const TaskService = {
  create: async (req: Request) => {
    try {
      const task = await TaskRepository.create({
        ...req.body,
        user_id: req.user?.id,
        created_at: new Date(),
        updated_at: new Date(),
      });
      if (!task) return badRequest;
      return { ...success, data: { task } };
    } catch (error) {
      console.log(error);
      return serverError;
    }
  },

  getOne: async (req: Request) => {
    try {
      const task = await TaskRepository.getOne(Number(req.params.id));
      if (
        !task ||
        (task.user_id !== req.user?.id && !req.user?.roles?.includes("admin"))
      )
        return badRequest;
      return { ...success, data: { task } };
    } catch (error) {
      console.log(error);
      return serverError;
    }
  },

  getList: async (req: Request) => {
    try {
      const task = await TaskRepository.getList(req);
      return { ...success, data: { task } };
    } catch (error) {
      console.log(error);
      return serverError;
    }
  },

  update: async (req: Request) => {
    try {
      const getTask = await TaskRepository.getOne(Number(req.params.id));
      if (
        !getTask ||
        (getTask.user_id !== req.user?.id &&
          !req.user?.roles?.includes("admin"))
      )
        return badRequest;
      const task = await TaskRepository.update(Number(req.params.id), req.body);
      return { ...success, data: { task } };
    } catch (error) {
      console.log(error);
      return serverError;
    }
  },

  delete: async (req: Request) => {
    try {
      const getTask = await TaskRepository.getOne(Number(req.params.id));
      if (
        !getTask ||
        (getTask.user_id !== req.user?.id &&
          !req.user?.roles?.includes("admin"))
      )
        return badRequest;
      const task = await TaskRepository.delete(Number(req.params.id));
      return { ...success, data: { task } };
    } catch (error) {
      console.log(error);
      return serverError;
    }
  },
};

export default TaskService;
