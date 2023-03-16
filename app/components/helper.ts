'use strict';

import { validationResult } from 'express-validator/check';
import {Request, Response, NextFunction} from "express";

const ValidateRequest = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err: any) {
    res.status(422).json({
      error: true,
      status: 422,
      message: "Unprocessable Entity",
      data: {
        errors: err.array(),
      },
    });
  }
};

export default ValidateRequest;
