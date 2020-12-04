import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { Photo } from '../models/Photo';
import { uploadImage } from '../helpers/imageUpload';

class UserController {
  async storeImage(req: Request, res: Response) {
    const repository = getRepository(User);

    const { id } = req.params;

    const userExists = await repository.findOne({ where: { id } });

    if (!userExists) {
      return res.status(404).send();
    }

    const image = req.file;
    const imageUrl = await uploadImage(image);

    const profilePicture = String(imageUrl);

    const updatedUser = repository.create({
      id: parseInt(id),
      profilePicture,
    });

    await repository.save(updatedUser);

    return res.status(201).json({ message: 'Upload was successful', imageUrl: profilePicture });
  }

  async storeImageAlbum(req: Request, res: Response) {
    const imageRepository = getRepository(Photo);
    const userRepository = getRepository(User);

    const { id } = req.params;

    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const image = req.file;
    const picture = await uploadImage(image);

    const imageUrl = String(picture);

    const newPhoto = imageRepository.create({
      imageUrl,
      user,
    });

    await imageRepository.save(newPhoto);

    return res.status(201).json(newPhoto);
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);

    const { firstName, lastName, age, description, email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.status(403).send('User already exists');
    }

    const user = repository.create({
      firstName,
      lastName,
      age,
      description,
      email,
      password,
    });

    await repository.save(user);

    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const repository = getRepository(User);

    const { id } = req.params;

    const { firstName, lastName, age, description, email, password } = req.body;

    const user = await repository.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send();
    }

    const updatedUser = repository.create({
      id: parseInt(id),
      firstName,
      lastName,
      age,
      description,
      email,
      password,
    });

    await repository.save(updatedUser);

    return res.status(200).json('success');
  }

  async delete(req: Request, res: Response) {
    const repository = getRepository(User);

    const { id } = req.params;

    const user = await repository.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send();
    }

    await repository.delete({ id: parseInt(id) });

    return res.status(200).json('success');
  }
}

export default new UserController();
