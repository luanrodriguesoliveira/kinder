import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const secret = String(process.env.JWT_SECRET);

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' });

    const userId = user.id;

    return res.json({
      userId,
      token,
    });
  }
}

export default new AuthController();
