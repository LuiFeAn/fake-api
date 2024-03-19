import { DynamicModule, Module } from '@nestjs/common';
import { CreateProductUseCase } from 'src/application/use_cases/product/create-product-use-case';
import { InMemoryProductsRepository } from 'test/repositories/in-memory-products-repository';
import { DatabaseModule } from '../database/database.module';
import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';
import { FindManyProductsUseCase } from 'src/application/use_cases/product/find-many-product-use-case';

@Module({
  imports: [DatabaseModule],
})
export class UseCasesProxyModule {
  static 'CREATE_PRODUCT_USECASE_PROXY' = 'createProductUseCaseProxy';
  static 'FIND_PRODUCT_USECASE_PROXY' = 'findProductUseCaseProxy';

  static register(): DynamicModule {
    return {
      module: UseCasesProxyModule,
      global: true,
      providers: [
        {
          inject: [AbstractProductRepository],
          provide: UseCasesProxyModule.CREATE_PRODUCT_USECASE_PROXY,
          useFactory: (productRepository: InMemoryProductsRepository) =>
            new CreateProductUseCase(productRepository),
        },
        {
          inject: [AbstractProductRepository],
          provide: UseCasesProxyModule.FIND_PRODUCT_USECASE_PROXY,
          useFactory: (productRepository: InMemoryProductsRepository) =>
            new FindManyProductsUseCase(productRepository),
        },
      ],
      exports: [
        UseCasesProxyModule.CREATE_PRODUCT_USECASE_PROXY,
        UseCasesProxyModule.FIND_PRODUCT_USECASE_PROXY,
      ],
    };
  }
}
