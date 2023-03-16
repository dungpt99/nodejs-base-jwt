"use strict";

import JWT, { JwtPayload } from "jsonwebtoken";
import jwtConfig from "@config/jwt";

const JwtToken = {
  sign: (user: object, kind: string) => {
    if (kind == "refresh") {
      return JWT.sign({ user }, jwtConfig.secret, jwtConfig.refreshTokenOptions);
      return JWT.sign({ user }, jwtConfig.secret);
    }
    return JWT.sign({ user }, jwtConfig.secret, jwtConfig.refreshTokenOptions);
  },

  verify: <T>(token: string): string | JwtPayload => {
    try {
      return JWT.verify(token, jwtConfig.secret);
    } catch (err: any) {
      let message =
        err.name === "JsonWebTokenError" ? "Token is invalid" : "Token has been expired";

      return message;
    }
  },
};

export default JwtToken;
