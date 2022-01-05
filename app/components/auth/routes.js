const express = require('express');
const router = express.Router();
const AuthMiddleware = require('@auth/middlewares/AuthMiddleware');

const LoginController = require('./controllers/LoginController');

router.post('/login', (req, res, next) => LoginController.login(req, res));

router.post('/reset-token', AuthMiddleware.authenticated, (req, res, next) => LoginController.resetToken(req, res));

module.exports = router;
