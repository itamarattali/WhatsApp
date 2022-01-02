import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from 'src/interfaces/chat';

@Controller('chat')
export class ChatController {

    constructor(private chatService: ChatService) { }

    @Get('/:username')
    FindAllChatsContainingUser(@Param('username') username: string): Chat[] {
        return this.chatService.GetAllChatsContainingUser(username);
    }

    @Get('/add/:firstUser/:secondUser')
    AddNewChat(@Param('firstUser') firstUser: string, 
    @Param("secondUser") secondUser: string): void {
        this.chatService.AddNewChat(firstUser, secondUser);
    }
}