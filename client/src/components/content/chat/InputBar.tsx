import React, {FormEvent, useContext, useState} from "react";
import '../../../style/chat/inputbar.css';
import {ChatContext} from "../../../context/ChatContext";
import {UserContext} from "../../../context/UserContext";

export default function InputBar(){
    const chatContext = useContext(ChatContext);
    const userContext = useContext(UserContext);
    const [newMessage, setNewMessage] = useState('');

    if(!userContext.user){return (<>Vous devez être connecté pour envoyer un message</>)}

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log('submitting');
        const authorId = userContext.user ? userContext.user.id : 1;
        chatContext.addMessage({value: newMessage, authorId: authorId, createdAt: new Date()});
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
