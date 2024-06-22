import { Request, Response } from 'express';
import { loginService } from './service';

export const loginController = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const tokens = loginService(username, password);
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};
