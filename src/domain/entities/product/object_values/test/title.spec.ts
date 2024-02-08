import { Title } from "../title";

describe("Teste de inserção de título de um produto", () => {

    it("Deve criar um título", () => {

        const title = new Title("Alguma descrição interessante");

        expect(title).toBeTruthy();

    });

    it("Deve não criar um título, caso não haja ao menos um caracter", () => {

        expect( () => new Title("") ).toThrow();

    });

})