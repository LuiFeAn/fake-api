import { InMemoryProductsRepository } from "../../test/repositories/in-memory-products-repository";

export default function inMemoryProductsRepository(){

    return new InMemoryProductsRepository();

}