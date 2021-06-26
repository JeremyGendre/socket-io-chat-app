import React, {createContext, PropsWithChildren, useState} from 'react';
import {ChatContextType} from "../type/context/ChatContext";
import {MessageType} from "../type/Message";

const contextDefaultValue: ChatContextType = {
    messages: [],
    addMessage : () => {}
};

export const ChatContext = createContext<ChatContextType>(contextDefaultValue);

export default function ChatContextProvider({children}: PropsWithChildren<any>){
    const [messages, setMessages] = useState<Array<MessageType>>([]);

    const addMessage = (message: MessageType) => {
        setMessages(prevState => [...prevState, message]);
    };

    return(
        <ChatContext.Provider value={{
            messages: messages,
            addMessage: addMessage
        }}>
            {children}
        </ChatContext.Provider>
    );
}
