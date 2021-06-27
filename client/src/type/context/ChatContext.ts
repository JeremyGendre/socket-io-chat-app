import {MessageType} from "../Message";
import {Socket} from "socket.io-client";

export interface ChatContextType {
    messages: Array<MessageType>,
    addMessage(message: MessageType): void,
    socket: Socket|null,
}
