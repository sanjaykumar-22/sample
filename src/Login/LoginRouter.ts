import { Router } from 'express';
import { loginController } from './LoginController';

const router = Router();

router.post('/login', loginController);

export default router;
