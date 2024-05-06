import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { FileImageMiddleware } from './middlewares/file-image.middleware';
import { ProductsGateWayModule } from 'src/infra/gateways/products/products.module';

@Module({
  imports: [ProductsGateWayModule],
  controllers: [ProductsController],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileImageMiddleware).forRoutes('products');
  }
}
