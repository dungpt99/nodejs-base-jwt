'use strict';

const AuthUserService = require('../services/AuthUserService');

const LoginController = {
    login: async (req, res) => {
      let response = await AuthUserService.login(req.body);
  
      res.status(response.status).json(response);
    },
  
    resetToken: async (req, res) => {
      let response = await AuthUserService.resetToken(req);
  
      res.status(response.status).json(response);
    }
  };
  
  module.exports = LoginController;
  