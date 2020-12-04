import express from 'express';
import routes from './routes';
import 'reflect-metadata';
import './database/connection';
import dotenv from 'dotenv';
import multerMiddleware from './middlewares/multerMiddleware';

dotenv.config();
const app = express();
app.use(multerMiddleware.single('file'));
app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  console.log('Server listening on 5000');
});
