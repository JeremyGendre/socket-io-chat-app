import React, {useContext} from "react";
import {MessageType} from "../../../type/Message";
import '../../../style/chat/message.css';
import {UserContext} from "../../../context/UserContext";

type Type = {
    message: MessageType
};

export default function Message({message}: Type){
    const userContext = useContext(UserContext);

    const isOwnerMessage = (message.authorId === userContext.user?.id);
    return(
        <div className={`message-row ${isOwnerMessage ? 'message-row-owner' : ''}`}>
            <div className={`message-container message${!isOwnerMessage ? '-not' : ''}-owner-container`}>
                {message.value}
            </div>
        </div>
    );
}
