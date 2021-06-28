import React, {useContext} from "react";
import {MESSAGE_TYPES, MessageType} from "../../../type/Message";
import '../../../style/chat/message.css';
import {UserContext} from "../../../context/UserContext";

type Type = {
    message: MessageType
};

export default function MessageStrategy({message}: Type){
    switch(message.type){
        case MESSAGE_TYPES.INFO:
            return <MessageAlert message={message}/>;
        case MESSAGE_TYPES.NORMAL:
            return <Message message={message}/>;
        default:
            return <Message message={message}/>;
    }
}

export function Message({message}: Type){
    const userContext = useContext(UserContext);

    const isOwnerMessage = (message.author.id === userContext.user?.id);
    return(
        <div className={`message-row ${isOwnerMessage ? 'message-row-owner' : ''}`}>
            <div>
                {!isOwnerMessage && <div className="message-username">{message.author.username}</div>}
                <div className={`message-container message${!isOwnerMessage ? '-not' : ''}-owner-container`}>
                    {message.value}
                </div>
            </div>
        </div>
    );
}

export function MessageAlert({message}: Type){
    return (
        <div className="message-alert-row">
            <div className="message-alert-delimiter-container">
                <div className="message-alert-delimiter"/>
            </div>
            <div className="message-alert-text">{message.value}</div>
            <div className="message-alert-delimiter-container">
                <div className="message-alert-delimiter"/>
            </div>
        </div>
    );
}
