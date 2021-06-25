import {MessageType} from "./Message";

export interface ChatContextType {
    messages: Array<MessageType>,
    addMessage(message: MessageType): void
}
