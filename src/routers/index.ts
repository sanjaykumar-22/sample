import { Router } from 'express';
import loginRouter from '../Login/LoginRouter';
import protectedRouter from './protected';

const router = Router();

router.use('/auth', loginRouter);
router.use('/protected', protectedRouter);

export default router;
