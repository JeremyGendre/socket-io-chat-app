import React, {FormEvent, useContext, useEffect, useState} from "react";
import '../../../style/chat/inputbar.css';
import {ChatContext} from "../../../context/ChatContext";
import {UserContext} from "../../../context/UserContext";
import {io, Socket} from "socket.io-client";
import {MessageType} from "../../../type/Message";


export default function InputBar(){
    const chatContext = useContext(ChatContext);
    const userContext = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');

    if(!userContext.user){return (<>Vous devez être connecté pour envoyer un message</>)}

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        const authorId = userContext.user ? userContext.user.id : 1;
        const message = {value: newMessage, authorId: authorId, createdAt: new Date()};
        chatContext.socket?.emit('chat message', message);
        chatContext.addMessage(message);
        setNewMessage('');
    };

    return(
        <form onSubmit={handleSubmit} className="input-bar-container">
            <input
                type="text"
                placeholder="Enter your message..."
                required
                autoFocus
                value={newMessage}
                onChange={(e) => {setNewMessage(e.target.value)}}
            />
            <button type="submit">Envoyer</button>
        </form>
    );
}
