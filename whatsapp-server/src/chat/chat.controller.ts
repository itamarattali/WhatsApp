import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from 'src/interfaces/chat';
import { Message } from 'src/interfaces/message';
import { userInfo } from 'os';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) { }

    @Get('all/:username')
    FindAllChats(@Param('username') username: string): Chat[] {
        return this.chatService.AllChatsContainingUser(username);
    }

    @Get('/add/:firstUser/:secondUser')
    AddNewChat(@Param('firstUser') firstUser: string, 
    @Param("secondUser") secondUser: string): void {
        this.chatService.AddNewChat(firstUser, secondUser);
    }

    @Post('/send')
    SendMessage(@Body() message: Message): void {
        this.chatService.AddMessageFromTo(message);
    }
}