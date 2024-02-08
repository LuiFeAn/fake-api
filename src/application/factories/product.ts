import { Product } from "../../../src/domain/entities/product/product";
import { Title } from "../../../src/domain/entities/product/object_values/title";
import { Description } from "../../../src/domain/entities/product/object_values/description";
import { Value } from "../../../src/domain/entities/product/object_values/value";
interface IProductFactory {
    title: string
    description: string;
    value: number
}

export function productFactory({
    title,
    description,
    value
}: IProductFactory){

    return new Product({
        title: new Title(title),
        description: new Description(description),
        value: new Value(value)
    });

}