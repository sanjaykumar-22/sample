import { Router } from 'express';
import loginRouter from './login.router';

const router = Router();

router.use('/auth', loginRouter);

export default router;
