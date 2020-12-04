import multer from 'multer';

const multerMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default multerMiddleware;
