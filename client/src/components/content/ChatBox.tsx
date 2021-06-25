import React from "react";
import '../../style/chat.css';

export default function ChatBox(){
    return (
        <div className="chat-box">
            <div className="chat-timeline">
                chat timeline
            </div>
            <div className="input-bar-container">
                <input type="text" placeholder="Enter your message..."/>
            </div>
        </div>
    );
}
