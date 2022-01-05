'use strict';

const bcrypt = require('bcryptjs');
const CoreUserRepository = require('@core/repositories/CoreUserRepository');
const JwtToken = require('@utilities/JwtToken');

const AuthUserService = {
  login: async (credentials) => {
    let user = await CoreUserRepository.getUserByEmail(credentials.email);

    if (!user)
      return {
        error: true,
        status: 401,
        message: 'Email account does not exist',
        data: {}
      }

    let passwordCompare = bcrypt.compareSync(credentials.password, user.password);

    if (!passwordCompare)
      return {
        error: true,
        status: 401,
        message: 'Your password does not match',
        data: {}
      }

    user = {
      id: user.id,
      email: user.email,
      name: user.name
    }

    let access_token = await JwtToken.sign(user);
    let refresh_token = await JwtToken.sign(user, 'refresh');

    return {
      error: false,
      status: 200,
      message: 'You are successfully logged in',
      data: {
        user,
        access_token,
        refresh_token
      }
    }
  },

  resetToken: async (request) => {
    let response = {
      error: true,
      status: 401,
      message: 'Invalid token',
      data: {}
    };

    let user = request.auth;

    if (!user) return response;

    let accessToken = await JwtToken.sign(user);

    return {
      error: false,
      status: 200,
      message: 'Successful',
      data: {
        user,
        accessToken
      }
    }
  },

};

module.exports = AuthUserService;