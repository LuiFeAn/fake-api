import { Injectable } from "@nestjs/common";
import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection } from "@nestjs/websockets";
import { Server } from "socket.io";
import { NestJsFindManyProdutsUseCase } from "src/infra/use_cases/find-many-products-use-case";
@Injectable()
@WebSocketGateway(3003,{
    cors:true
})
export class ProductsGateWay implements 
OnGatewayInit, 
OnGatewayConnection {

    @WebSocketServer() server: Server

    constructor(
        private readonly findManyProductsUseCase: NestJsFindManyProdutsUseCase
    ){}

    afterInit(server: Server) {

    }

    handleConnection(client: Server, ...args: any[]) {

        client.emit("welcome",this.findManyProductsUseCase.execute({
            page:1,
            quanty:10,
        }));

    }

}
