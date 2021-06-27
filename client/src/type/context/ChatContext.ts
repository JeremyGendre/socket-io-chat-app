import {MessageType} from "../Message";
import {Socket} from "socket.io-client";
import {ConnectedUserType} from "../User";

export interface ChatContextType {
    messages: Array<MessageType>,
    addMessage(message: MessageType): void,
    socket: Socket|null,
    connectedUsers: Array<ConnectedUserType>
}
