import { Injectable } from '@nestjs/common';
import {
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ProductToWs } from './mapper/to-ws';
import { FindManyProductsUseCase } from 'src/application/use_cases/product/find-many-product-use-case';
import { Inject } from '@nestjs/common';
import { UseCasesProxyModule } from 'src/infra/use_cases/proxy.module';

@Injectable()
@WebSocketGateway(3003, {
  cors: true,
})
export class ProductsGateWay implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(
    @Inject(UseCasesProxyModule.FIND_PRODUCT_USECASE_PROXY)
    private readonly findManyProducts: FindManyProductsUseCase,
  ) {}

  afterInit(server: Server) {}

  async handleConnection(client: Server, ...args: any[]) {
    const products = await this.findManyProducts.execute({
      page: 1,
      quanty: 10,
    });

    client.emit('send-products', ProductToWs.many(products.products));
  }
}
