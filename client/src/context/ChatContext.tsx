import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {ChatContextType} from "../type/context/ChatContext";
import {MessageType} from "../type/Message";
import {io, Socket} from "socket.io-client";

const contextDefaultValue: ChatContextType = {
    messages: [],
    addMessage : () => {},
    socket: null
};

export const ChatContext = createContext<ChatContextType>(contextDefaultValue);

export default function ChatContextProvider({children}: PropsWithChildren<any>){
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [socket, setSocket] = useState<Socket|null>(null);

    const addMessage = (message: MessageType) => {
        setMessages(prevState => [...prevState, message]);
    };

    useEffect(() => {
        setSocket(io());
    }, []);

    useEffect(() => {
        if(socket){
            socket.on('chat message', function(msg: MessageType) {
                addMessage(msg);
            });
            return () => {socket.disconnect()};
        }
    }, [socket]);

    return(
        <ChatContext.Provider value={{
            messages: messages,
            addMessage: addMessage,
            socket: socket
        }}>
            {children}
        </ChatContext.Provider>
    );
}
