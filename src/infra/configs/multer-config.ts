import { diskStorage } from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export default function multer(destination: string) {
  const multerConfig: MulterOptions = {
    storage: diskStorage({
      destination: `uploads/${destination}`,
      filename: (req, file, cb) => {
        cb(null, `${file.originalname.trim()}`);
      },
    }),
  };

  return multerConfig;
}
