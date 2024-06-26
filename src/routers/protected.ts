import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'Protected content!' });
});

export default router;
