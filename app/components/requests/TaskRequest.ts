import { body } from "express-validator/check";

const TaskRequest = {
  taskRules: [body("done", "Done invalidate!").isBoolean()],
};

export default TaskRequest;
