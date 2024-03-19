import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';

@Injectable()
export class FileImageMiddleware implements NestMiddleware {
  constructor(private productRepository: AbstractProductRepository) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST') {
      const product = await this.productRepository.findProductsByTitle(
        req.body.title,
      );
    }
    next();
  }
}
