import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { ProductsModule } from './infra/http/products/products.module';
import { ProductsGateWayModule } from './infra/gateways/products/products.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal:true
    }),
    DatabaseModule,
    ProductsModule,
    ProductsGateWayModule
  ],
  controllers: [],
})
export class AppModule {}
