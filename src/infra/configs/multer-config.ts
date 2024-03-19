import { diskStorage } from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export default function multer(destination: string) {
  const multerConfig: MulterOptions = {
    storage: diskStorage({
      destination: `uploads/${destination}`,
      filename: (req, file, cb) => {
        const { hostname, protocol } = req;

        cb(
          null,
          `${protocol}://${hostname}:${process.env.SERVER_PORT}/pics/${Date.now()}-${file.originalname.trim()}`,
        );
      },
    }),
  };

  return multerConfig;
}
