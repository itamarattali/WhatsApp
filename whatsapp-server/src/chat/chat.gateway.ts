import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { Message } from 'src/interfaces/message';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private chatService: ChatService) { }

  @WebSocketServer()
  server: Server

  handleConnection() {
    console.log("connected");
  }

  handleDisconnect() {
      console.log("disconnected")
  }
  
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message: Message) {  
    this.chatService.AddMessageFromTo(message);
    this.server.emit('newMessage', message);
  }
}