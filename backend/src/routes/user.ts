import UserController from '../controllers/UserController';
import authMiddleware from '../middlewares/authMiddleware';
import { Router } from 'express';

const user = Router();

user.post('/users', authMiddleware, UserController.store);
user.put('/users/:id', authMiddleware, UserController.update);
user.post('/users/:id/profilePicture', authMiddleware, UserController.storeImage);
user.post('/users/:id/photos', authMiddleware, UserController.storeImageAlbum);
user.delete('/users/:id', authMiddleware, UserController.delete);

export default user;
