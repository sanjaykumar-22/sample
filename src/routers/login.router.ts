import { Router } from 'express';
import { loginController } from '../Login/controller';

const router = Router();

router.post('/login', loginController);

export default router;
