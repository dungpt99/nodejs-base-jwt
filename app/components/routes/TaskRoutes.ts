import { NextFunction, Request, Response } from "express";
import express from "express";

import ValidateRequest from "../helper";
import TaskController from "@components/controllers/TaskController";
import TaskRequest from "@components/requests/TaskRequest";

const router = express.Router();

router.post(
  "/",
  TaskRequest.taskRules,
  ValidateRequest,
  (req: Request, res: Response, next: NextFunction) =>
    TaskController.create(req, res)
);

router.get(
  "/",
  TaskRequest.taskRules,
  ValidateRequest,
  (req: Request, res: Response, next: NextFunction) =>
    TaskController.getList(req, res)
);

router.get(
  "/:id",
  TaskRequest.taskRules,
  ValidateRequest,
  (req: Request, res: Response, next: NextFunction) =>
    TaskController.getOne(req, res)
);

router.put(
  "/:id",
  TaskRequest.taskRules,
  ValidateRequest,
  (req: Request, res: Response, next: NextFunction) =>
    TaskController.update(req, res)
);

router.delete(
  "/:id",
  TaskRequest.taskRules,
  ValidateRequest,
  (req: Request, res: Response, next: NextFunction) =>
    TaskController.delete(req, res)
);

export default router;
