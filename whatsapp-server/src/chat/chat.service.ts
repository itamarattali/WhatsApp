import { Injectable } from '@nestjs/common';
import { Chat } from 'src/interfaces/chat';
import { Message } from 'src/interfaces/message';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ChatService {
    private allChats: Chat[];

    constructor(private usersService: UsersService) { }

    public AddNewChat(firstUser: string, secondUser: string): void {
        const newChat: Chat = {messageList: [], usersWithAccess: [firstUser, secondUser]};
        this.allChats.push(newChat);
    }

    public AllChatsContainingUser(username: string): Chat[] {
        const chatList: Chat[] = [];
        this.allChats.forEach((chat: Chat) => {
            if (chat.usersWithAccess.includes(username)) {
                chatList.push(chat);
            }
        })
        return chatList;
    }

    public AddMessageFromTo(message: Message): void {
        const chatIndex: number = this.findChatFromToIndex(message.from, message.to);
        this.allChats[chatIndex].messageList.push(message);
    }

    private findChatFromToIndex(from: string, to: string): number {
        for (let i = 0; i < this.allChats.length; i++) {
            if (this.allChats[i].usersWithAccess.includes(from) && 
            this.allChats[i].usersWithAccess.includes(to)) {
                return i;
            }
''        }
    }
}