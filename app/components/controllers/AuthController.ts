'use strict';

import {Request, Response} from "express";
import AuthService from '../services/AuthService';

const AuthController = {
  login: async (req: Request, res: Response) => {
    let response = await AuthService.login(req);
    res.status(response.status).json(response);
  },

  resetToken: async (req: Request, res: Response) => {
    let response = await AuthService.resetToken(req);
    res.status(response.status).json(response);
  },
};
  
export default AuthController;
  