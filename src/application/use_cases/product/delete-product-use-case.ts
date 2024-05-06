import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';

export class DeleteProductUseCase {
  constructor(private readonly productRepository: AbstractProductRepository) {}

  async execute() {}
}
