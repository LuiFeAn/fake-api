import { Description } from "../description"

describe("Teste de inserção de descrição de um produto", () => {

    it("Deve criar uma descrição", () => {

        const description = new Description("Alguma descrição interessante");

        expect(description).toBeTruthy();

    });

    it("Deve não criar uma descrição, caso não haja ao menos um caracter", () => {

        expect( () => new Description("") ).toThrow();

    });

})