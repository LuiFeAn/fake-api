import { Product } from '../entities/product/product';
import { Title } from '../entities/product/object_values/title';
import { Description } from '../entities/product/object_values/description';
import { Value } from '../entities/product/object_values/value';
interface IProductFactory {
  title: string;
  description: string;
  value: number;
  image?: string;
}

export function productFactory({
  title,
  description,
  value,
  image = '',
}: IProductFactory) {
  return new Product({
    title: new Title(title),
    description: new Description(description),
    value: new Value(+value),
    image: image,
  });
}
