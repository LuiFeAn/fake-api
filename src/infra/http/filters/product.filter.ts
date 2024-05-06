import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { NoProducts } from 'src/application/use_cases/product/errors/no-products';

@Catch(NoProducts)
export class ProductsExceptionFilters implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let error = '';
    let statusCode = 200;
    if (exception instanceof NoProducts) {
      error = exception.message;
      statusCode = 400;
    }
    response.status(statusCode).json({
      statusCode,
      error,
      path: request.url,
    });
  }
}
