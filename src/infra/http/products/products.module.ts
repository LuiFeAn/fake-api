import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { FileImageMiddleware } from './middlewares/file-image.middleware';

@Module({
  controllers: [ProductsController],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileImageMiddleware).forRoutes('products');
  }
}
