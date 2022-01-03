import { Module } from '@nestjs/common';
import { ChatController } from 'src/chat/chat.controller';
import { ChatGateway } from 'src/chat/chat.gateway';
import { ChatService } from 'src/chat/chat.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [],
    controllers: [UsersController, ChatController],
    providers: [UsersService, ChatGateway, ChatService],
  })
export class UsersModule {}
