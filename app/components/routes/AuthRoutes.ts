import  { NextFunction, Request, Response } from 'express';
import express from 'express';

import ValidateRequest from '../helper';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import LoginController from '../controllers/AuthController';
import AuthRequest from '../requests/AuthRequest'

const router = express.Router();

router.post('/login', AuthRequest.loginRules, ValidateRequest, (req: Request, res: Response, next: NextFunction) => LoginController.login(req, res));
router.post('/reset-token', AuthMiddleware.authenticated, (req: Request, res: Response, next: NextFunction) => LoginController.resetToken(req, res));

export default router;
