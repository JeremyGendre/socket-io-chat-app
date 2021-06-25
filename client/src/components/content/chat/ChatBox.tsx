import React from "react";
import '../../../style/chat/chat.css';
import InputBar from "./InputBar";
import MessageTimeLine from "./MessageTimeLine";

export default function ChatBox(){
    return (
        <div className="chat-box">
            <MessageTimeLine/>
            <InputBar/>
        </div>
    );
}
