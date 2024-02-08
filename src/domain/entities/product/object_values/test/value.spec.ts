import { Value } from "../value";

describe("Teste de inserção de valor de um produto", () => {

    it("Deve criar um valor", () => {

        const value = new Value(200);

        expect(value).toBeTruthy();

    });

})