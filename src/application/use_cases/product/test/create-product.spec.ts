import inMemoryProductsRepository from "../../../../../test/factories/in-memory-product-repository";
import { productFactory } from "../../../factories/product";


describe("Testes de criação de produto", () => {

    it("Deve criar um novo produto", () => {

        const productInMemoryRepository = inMemoryProductsRepository();

        const product = productFactory({
            title:"Novo produto",
            description:"Descrição Interessante",
            value:200
        });

        productInMemoryRepository.create(product)

        expect(productInMemoryRepository.products.length).toBeGreaterThanOrEqual(1);


    });

    it("Não deve criar um produto caso o título não possua ao menos um caracter", () => {

        const product = productFactory({
            title:"",
            description:"Descrição Interessante",
            value:200
        });

        expect(product).toThrow()

    });

    it("Não deve criar um produto caso a descrição não possua ao menos um caracter", () => {

        const product = productFactory({
            title:"Título do Produto",
            description:"",
            value:200
        });

        expect(product).toThrow();

    });

})