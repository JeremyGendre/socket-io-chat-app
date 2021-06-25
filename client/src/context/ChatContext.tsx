import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {ChatContextType} from "../type/ChatContext";
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

    useEffect(() => {
        for(let i = 10; i < 14; i++){
            addMessage({
                value: 'test de message' + i,
                createdAt: new Date(),
                authorId: (i%3 === 0 ? 1 : 2)
            });
        }
    }, []);

    return(
        <ChatContext.Provider value={{
            messages: messages,
            addMessage: addMessage
        }}>
            {children}
        </ChatContext.Provider>
    );
}
