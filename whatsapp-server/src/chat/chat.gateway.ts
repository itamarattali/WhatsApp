import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect{

  handleConnection() {
    console.log('connected');
  }

  handleDisconnect() {
      console.log('disconnected');
  }

  @SubscribeMessage('sendMessage')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
