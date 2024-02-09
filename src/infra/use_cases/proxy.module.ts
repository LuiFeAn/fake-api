import { DynamicModule, Global, Module } from "@nestjs/common"
import { CreateProductUseCase } from "src/application/use_cases/product/create-product-use-case"
import { InMemoryProductsRepository } from "test/repositories/in-memory-products-repository"
import { DatabaseModule } from "../database/database.module"

@Global()
@Module({
    imports:[DatabaseModule]
})
export class UseCasesProxyModule {

    static "CREATE_PRODUCT_USECASE_PROXY" = "getProductUseCaseProxy"

    static register(): DynamicModule {

        return {
            module: UseCasesProxyModule,
            providers:[
                {
                    inject:[InMemoryProductsRepository],
                    provide: UseCasesProxyModule.CREATE_PRODUCT_USECASE_PROXY,
                    useFactory: ( productRepository: InMemoryProductsRepository ) => new CreateProductUseCase(productRepository)
                }
            ],
            exports:[
                UseCasesProxyModule.CREATE_PRODUCT_USECASE_PROXY
            ]
        }

    }

}