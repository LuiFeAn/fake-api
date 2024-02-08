import { InMemoryProductsRepository } from "test/repositories/in-memory-products-repository";
import inMemoryProductsRepository from "../../../../../test/factories/in-memory-product-repository";
import { productFactory } from "../../../../domain/factories/product";

describe("Testes de criação de produto", () => {

    let productInMemoryRepository: InMemoryProductsRepository;

    beforeEach( () => {
        productInMemoryRepository = inMemoryProductsRepository();

    });

    afterEach( () => {

        productInMemoryRepository.products = [];

    })

    it("Deve criar um novo produto", async () => {

        const product = productFactory({
            title:"Novo produto",
            description:"Descrição Interessante",
            value:200
        });

        await productInMemoryRepository.create(product)

        expect(productInMemoryRepository.products.length).toBe(1)


    });

    it("Não deve criar um produto caso o título não possua ao menos um caracter", () => {

        expect(() => productFactory({
            title:"",
            description:"Descrição Interessante",
            value:200
        })).toThrow()

    });

    it("Não deve criar um produto caso a descrição não possua ao menos um caracter", () => {

        expect(() => productFactory({
            title:"Título do Produto",
            description:"",
            value:200
        })).toThrow();

    });

})