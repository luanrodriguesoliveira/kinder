import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = String(process.env.JWT_SECRET);

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, secret);
    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch {
    return res.sendStatus(401);
  }
};
