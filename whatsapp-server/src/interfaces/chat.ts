import { Message } from "src/interfaces/message";

export interface Chat {
    messageList: Message[];
    usersWithAccess: string[];
}