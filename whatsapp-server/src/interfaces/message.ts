import { Time } from "./time";

export interface Message {
    from: string;
    to: string;
    time: Time;
    text: string;
}