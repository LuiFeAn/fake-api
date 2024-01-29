import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/http/database/database.module';
import { ProductsModule } from './infra/http/products/products.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
