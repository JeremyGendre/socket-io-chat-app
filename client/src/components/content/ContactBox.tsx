import React, {useContext} from "react";
import '../../style/contact.css';
import {ChatContext} from "../../context/ChatContext";

export default function ContactBox(){
    const chatContext = useContext(ChatContext);
    return (
        <div className="contact-box">
            <div>
                Connected users
            </div>
            <hr/>
            <div>
                {chatContext.connectedUsers.map(user => {
                    if(user.socketId !== chatContext.socket?.id){
                        return <div key={user.socketId}>{user.username}</div>
                    }
                })}
            </div>
        </div>
    );
}
