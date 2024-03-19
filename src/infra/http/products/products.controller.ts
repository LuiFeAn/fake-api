import {
  Body,
  ConflictException,
  Controller,
  Post,
  Get,
  Inject,
  Query,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductToHttp } from './mapper/to-http';
import { ProductAlreadyExists } from 'src/application/use_cases/product/errors/product-already-exits';
import { FindManyProductsDto } from './dtos/find-many-products.dto';
import { NoProducts } from 'src/application/use_cases/product/errors/no-products';
// import { ProductsGateWay } from 'src/infra/gateways/products/products.gateway';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'src/infra/configs/multer-config';
import { UseCasesProxyModule } from 'src/infra/use_cases/proxy.module';
import { FindManyProductsUseCase } from 'src/application/use_cases/product/find-many-product-use-case';
import { CreateProductUseCase } from 'src/application/use_cases/product/create-product-use-case';
@Controller('products')
export class ProductsController {
  constructor(
    @Inject(UseCasesProxyModule.FIND_PRODUCT_USECASE_PROXY)
    private readonly findManyProducts: FindManyProductsUseCase,
    @Inject(UseCasesProxyModule.CREATE_PRODUCT_USECASE_PROXY)
    private readonly createProducts: CreateProductUseCase,
    // private readonly productGateway: ProductsGateWay,
  ) {}

  @Get()
  async all(@Query() params: FindManyProductsDto) {
    try {
      const result = await this.findManyProducts.execute(params);

      const mappedHttProducts = ProductToHttp.many(result.products);

      return {
        ...result,
        products: mappedHttProducts,
      };
    } catch (err) {
      if (err instanceof NoProducts) {
        throw new UnauthorizedException(err.message);
      }
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', multer('images/products')))
  async create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 100000,
          }),
          new FileTypeValidator({
            fileType: '.(png|jpeg|jpg)',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      const originalFileName = file.originalname.trim();

      const product = await this.createProducts.execute(
        createProductDto,
        originalFileName,
      );

      // this.productGateway.server.emit('new-product');

      return ProductToHttp.one(product);
    } catch (err) {
      if (err instanceof ProductAlreadyExists) {
        throw new ConflictException(err.message);
      }
    }
  }
}
