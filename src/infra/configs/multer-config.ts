import { diskStorage } from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export default function multer(destination: string) {
  const multerConfig: MulterOptions = {
    storage: diskStorage({
      destination: `uploads/${destination}`,
      filename: (req, file, cb) => {
        console.log(file)
        cb(
          null,
          `${Date.now()}-${file.originalname.trim()}`,
        );
      },
    }),
  };

  return multerConfig;
}
