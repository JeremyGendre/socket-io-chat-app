import React from "react";
import {MessageType} from "../../../type/Message";
import '../../../style/chat/message.css';

type Type = {
    message: MessageType
};

export default function Message({message}: Type){
    const isOwnerMessage = (message.authorId === 1);
    return(
        <div className={`message-row ${isOwnerMessage ? 'message-row-owner' : ''}`}>
            <div className={`message-container message${!isOwnerMessage ? '-not' : ''}-owner-container`}>
                {message.value}
            </div>
        </div>
    );
}
