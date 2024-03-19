import { Product } from 'src/domain/entities/product/product';

export class ProductMapper {
  static many(products: Product[]) {
    return products.map(this.one);
  }

  static one(product: Product) {
    return {
      id: product.id,
      title: product.title.value,
      description: product.title.value,
      value: product.value.value.toLocaleString('pt-br', {
        currency: 'BRL',
        style: 'currency',
      }),
      image: product.image,
    };
  }
}
