import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const auth = Router();

auth.post('/auth', AuthController.authenticate);

export default auth;
