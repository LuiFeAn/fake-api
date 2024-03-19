import { Module, Global } from '@nestjs/common';
import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';
import { InMemoryProductsRepository } from 'test/repositories/in-memory-products-repository';

@Global()
@Module({
  providers: [
    {
      provide: AbstractProductRepository,
      useClass: InMemoryProductsRepository,
    },
  ],
  exports: [AbstractProductRepository],
})
export class DatabaseModule {}
