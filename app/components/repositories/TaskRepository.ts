"use strict";

import db from "@database/index";
const { Task } = db;

const TaskRepository = {
  create: async (payload: object) => {
    let task = await Task.create(payload);
    return task;
  },

  getOne: async (id: number) => {
    let task = await Task.findOne({ where: { id } });
    return task;
  },

  getList: async (req: any) => {
    let task = await Task.findAll({ where: { user_id: req?.user?.id } });
    return task;
  },

  update: async (id: number, payload: object) => {
    let task = await Task.update(payload, { where: { id } });
    return task;
  },

  delete: async (id: number) => {
    let task = await Task.destroy({ where: { id } });
    return task;
  },
};

export default TaskRepository;
