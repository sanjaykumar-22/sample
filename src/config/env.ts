import dotenv from 'dotenv';

dotenv.config();

export default {
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || 'defaultAccessTokenSecret',
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || 'defaultRefreshTokenSecret',
};
