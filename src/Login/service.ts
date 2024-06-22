import jwt from 'jsonwebtoken';
import config from '../config/env';
import { validateUser } from './validation';

export const generateAccessToken = (user: any) => {
  return jwt.sign(
    { userId: user.id, username: user.username, roles: user.roles },
    config.jwtAccessTokenSecret,
    { expiresIn: '15m' }
  );
};

export const generateRefreshToken = (user: any) => {
  return jwt.sign(
    { userId: user.id, username: user.username },
    config.jwtRefreshTokenSecret,
    { expiresIn: '7d' }
  );
};

export const loginService = (username: string, password: string) => {
  const user = validateUser(username, password);
  if (!user) throw new Error('Invalid credentials');

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return { accessToken, refreshToken };
};
