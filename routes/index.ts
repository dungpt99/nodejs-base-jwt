import express from "express";
import { NextFunction, Request, Response } from "express";
import AuthRoutes from "@components/routes/AuthRoutes";
import TaskRoutes from "@components/routes/TaskRoutes";
import AuthMiddleware from "@components/middlewares/AuthMiddleware";

const router = express.Router();

/* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Node Base JWT" });
});

router.use("/api/auth", AuthRoutes);
router.use("/api/task", AuthMiddleware.authenticated, TaskRoutes);

export default router;
