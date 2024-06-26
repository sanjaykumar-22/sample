import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.jwtAccessTokenSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.body = decoded;
    next();
  });
};
