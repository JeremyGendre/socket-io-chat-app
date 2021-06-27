import React, {useContext} from "react";
import '../../../style/chat/timeline.css';
import {ChatContext} from "../../../context/ChatContext";
import MessageStrategy from "./Message";

export default function MessageTimeLine(){
    const chatContext = useContext(ChatContext);
    return(
        <div className="chat-timeline">
            {chatContext.messages.map((message, index) => <MessageStrategy message={message} key={index}/>)}
        </div>
    );
}
