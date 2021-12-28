import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from 'src/interfaces/chat';
import { Message } from 'src/interfaces/message';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) { }

    @Get('all/:username')
    findAllChats(@Param('username') username: string): Chat[] {
        return this.chatService.AllChatsContainingUser(username);
    }

    @Post('/send')
    addNewUser(@Body() message: Message): void {
        this.chatService.AddMessageFromTo(message);
    }
}