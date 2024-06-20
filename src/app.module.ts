import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { ProductsModule } from './infra/http/products/products.module';
import { UseCasesProxyModule } from './infra/use_cases/proxy.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'images', 'products'),
      serveRoot: '/uploads/images/products',
    }),
    UseCasesProxyModule.register(),
    ProductsModule,
  ],
})
export class AppModule {}
