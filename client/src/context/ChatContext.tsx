import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from 'react';
import {ChatContextType} from "../type/context/ChatContext";
import {MessageType} from "../type/Message";
import {io, Socket} from "socket.io-client";
import {UserContext} from "./UserContext";
import {ConnectedUserType} from "../type/User";

const contextDefaultValue: ChatContextType = {
    messages: [],
    addMessage : () => {},
    socket: null,
    connectedUsers: []
};

export const ChatContext = createContext<ChatContextType>(contextDefaultValue);

export default function ChatContextProvider({children}: PropsWithChildren<any>){
    const userContext = useContext(UserContext);
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [socket, setSocket] = useState<Socket|null>(null);
    const [connectedUsers, setConnectedUsers] = useState<Array<ConnectedUserType>>([]);

    const addMessage = (message: MessageType) => {
        setMessages(prevState => [...prevState, message]);
    };

    useEffect(() => {
        setSocket(io());
    }, []);

    useEffect(() => {
        if(socket && userContext.user){
            socket.emit('setUser', userContext.user);
            socket.on('chatMessage', function(msg: MessageType) {
                addMessage(msg);
            });
            socket.on('connectedUsers', function(users: Array<ConnectedUserType>) {
                setConnectedUsers(users);
            });
            return () => {socket.disconnect()};
        }
    }, [socket, userContext.user]);

    return(
        <ChatContext.Provider value={{
            messages: messages,
            addMessage: addMessage,
            socket: socket,
            connectedUsers: connectedUsers
        }}>
            {children}
        </ChatContext.Provider>
    );
}
