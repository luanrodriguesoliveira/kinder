import { Router } from 'express';
import user from './user';
import auth from './auth';

const router = Router();

router.use(user, auth);

export default router;
