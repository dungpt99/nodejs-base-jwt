import { body } from "express-validator/check";

const AuthRequest = {
  loginRules: [
    body("email", "Email invalidate!").isEmail(),
    body("password", "Password must be more than 5 characters!").isLength({
      min: 6,
    }),
  ],
};

export default AuthRequest;
