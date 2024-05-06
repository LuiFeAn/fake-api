import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { ProductsModule } from './infra/http/products/products.module';
import { UseCasesProxyModule } from './infra/use_cases/proxy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UseCasesProxyModule.register(),
    ProductsModule,
  ],
})
export class AppModule {}
