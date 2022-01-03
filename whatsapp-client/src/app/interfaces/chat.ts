import { Message } from "./message";

export interface Chat {
    messageList: Message[];
    usersWithAccess: string[];
}