import { Request, Response } from 'express';
import { loginService } from './Service';

export const loginController = (req: Request, res: Response) => {
  try {
    const { userid, password, phoneNumber } = req.body;
    const tokens = loginService(userid, password, phoneNumber);
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};
