import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Message } from 'src/interfaces/message';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server

  handleConnection() {
    console.log("connected");
  }

  handleDisconnect() {
      console.log("disconnected")
  }

  @SubscribeMessage('sendMessage')
  handleMessage(message: Message) {    
    this.server.emit('newMessage', message);
  }
}