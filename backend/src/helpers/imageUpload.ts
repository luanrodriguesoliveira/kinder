import util from 'util';
import gc from '../config/googleCloud';

const bucket = gc.bucket('kinder-images');

export const uploadImage = (file: any) =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    const blob = bucket.file(originalname.replace(/ /g, '_'));
    const blobStream = blob.createWriteStream({
      resumable: false,
    });
    blobStream
      .on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      })
      .on('error', () => {
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });
