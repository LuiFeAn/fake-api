import { Injectable } from "@nestjs/common";
import { OnGatewayInit, WebSocketGateway, WebSocketServer, OnGatewayConnection } from "@nestjs/websockets";
import { Server } from "socket.io";
import { ProductToWs } from "./mapper/to-ws";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";
@Injectable()
@WebSocketGateway(3003,{
    cors:true
})
export class ProductsGateWay implements 
OnGatewayInit, 
OnGatewayConnection {

    @WebSocketServer() server: Server

    constructor(
        private readonly findManyProductsUseCase: FindManyProductsUseCase
    ){}

    afterInit(server: Server) {

    }

    async handleConnection(client: Server, ...args: any[]) {

        const products = await this.findManyProductsUseCase.execute({
            page:1,
            quanty:10
        });

        client.emit("send-products",ProductToWs.many(products.products));

    }

}
