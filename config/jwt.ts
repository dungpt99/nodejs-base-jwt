'use strict';

import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

interface JwtValue {
  secret: string,
  accessTokenOptions: {
    algorithm: any,
    expiresIn: any,
  },
  refreshTokenOptions: {
    algorithm: any,
    expiresIn: any,
  }
};

const jwtConfig: JwtValue = {
  secret: process.env.JWT_SECRET || 'secret',
  // access token
  accessTokenOptions: {
    algorithm: process.env.JWT_ALGO || 'HS256',
    expiresIn: process.env.JWT_TAT || '60000'
  },
  //refresh token
  refreshTokenOptions: {
    algorithm: process.env.JWT_ALGO || 'HS256',
    expiresIn: process.env.JWT_TRT || '300000'
  }
};

// if (process.env.JWT_TAT === 'null') {
//   delete jwt.accessTokenOptions.expiresIn;
// }

export default jwtConfig;
