import jwt from 'jsonwebtoken';
import config from '../config/config';
import { validateUser } from './Validation';

export const generateAccessToken = (user: any) => {
  return jwt.sign(
    { userId: user.userid, roles: user.roles },
    config.jwtAccessTokenSecret,
    { expiresIn: '15m' }
  );
};

export const generateRefreshToken = (user: any) => {
  return jwt.sign(
    { userId: user.userid },
    config.jwtRefreshTokenSecret,
    { expiresIn: '7d' }
  );
};

export const loginService = (userid: string, password: string, phoneNumber: string) => {
  const user = validateUser(userid, password, phoneNumber);
  if (!user) throw new Error('Invalid credentials');

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return { accessToken, refreshToken };
};
