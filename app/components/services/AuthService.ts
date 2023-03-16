"use strict";

import {Request} from "express";
import bcrypt from "bcryptjs";

import UserRepository from "@components/repositories/UserRepository";
import JwtToken from "@utilities/JwtToken";
import { success, badRequest, unauthorized } from "@components/responses";

const AuthService = {
  login: async (req: Request) => {
    let user = await UserRepository.getUserByEmail(req.body.email);
    if (!user) return badRequest;

    let passwordCompare = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordCompare) return badRequest;

    let access_token: string = JwtToken.sign(user, "");
    let refresh_token: string = JwtToken.sign(user, "refresh");
    return { ...success, data: { user, access_token, refresh_token } };
  },

  resetToken: async (req: Request) => {
    let user = req.user;
    if (!user) return unauthorized;

    let accessToken = JwtToken.sign(user, "");
    return { ...success, data: { user, accessToken } };
  },
};

export default AuthService;
