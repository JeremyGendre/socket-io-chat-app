import React, {FormEvent, useContext, useState} from "react";
import '../../../style/chat/inputbar.css';
import {ChatContext} from "../../../context/ChatContext";
import {UserContext} from "../../../context/UserContext";
import {MESSAGE_TYPES} from "../../../type/Message";


export default function InputBar(){
    const chatContext = useContext(ChatContext);
    const userContext = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');

    if(!userContext.user){return (<>Vous devez être connecté pour envoyer un message</>)}

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!userContext.user){return;}
        const message = {value: newMessage, author: userContext.user, createdAt: new Date(), type: MESSAGE_TYPES.NORMAL};
        chatContext.socket?.emit('chatMessage', message);
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
