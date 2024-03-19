import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';
import { ProductAlreadyExists } from './errors/product-already-exits';
import { productFactory } from 'src/domain/factories/product';

export interface ICreateProductRequest {
  title: string;
  description: string;
  value: number;
}

export class CreateProductUseCase {
  constructor(private readonly productRepository: AbstractProductRepository) {}

  async execute(product: ICreateProductRequest, image: string) {
    const productExists = await this.productRepository.findProductsByTitle(
      product.title,
    );

    if (productExists) {
      throw new ProductAlreadyExists();
    }

    const productInstance = productFactory({
      title: product.title,
      description: product.description,
      value: product.value,
      image,
    });

    await this.productRepository.create(productInstance);

    return productInstance;
  }
}
