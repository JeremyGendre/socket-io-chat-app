import React, {useContext} from "react";
import '../../style/contact.css';
import {ChatContext} from "../../context/ChatContext";
import {UserType} from "../../type/User";

export default function ContactBox(){
    const chatContext = useContext(ChatContext);
    return (
        <div className="contact-box">
            <div>
                Connected users
            </div>
            <hr/>
            <div className="contacts-container">
                {chatContext.connectedUsers.map(user => {
                    if(user.socketId !== chatContext.socket?.id){
                        return <Contact user={user} key={user.socketId}/>
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

function Contact({user}: {user: UserType}){
    return (
        <div className="contact">
            {user.username}
        </div>
    )
}
