import { Module } from '@nestjs/common';
import { ProductsController } from 'src/infra/http/products/products.controller';
import { ProductsGateWay } from './products.gateway';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsGateWay],
  exports: [ProductsGateWay],
})
export class ProductsGateWayModule {}
