"use strict";

import { NextFunction, Request, Response } from "express";
import JwtToken from "@utilities/JwtToken";

const AuthMiddleware = {
  authenticated: (req: Request, res: Response, next: NextFunction) => {
    let error = {
      error: true,
      status: 401,
      message: "401 Unauthorized",
      data: {},
    };

    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
      let token = req.headers.authorization.split(" ")[1];
      if (!token) return res.status(error.status).json(error);

      let tokenVerified = JwtToken.verify(token);
      if (typeof tokenVerified === "string") {
        error.message = tokenVerified;
        return res.status(error.status).json(error);
      }

      res.locals.user =  tokenVerified.user;
      req.user = tokenVerified.user;
      return next();
    }
    return res.status(error.status).json(error);
  },
};

export default AuthMiddleware;
