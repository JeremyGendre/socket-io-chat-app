import React from "react";
import '../../style/content.css';
import ContactBox from "./ContactBox";
import ChatBox from "./chat/ChatBox";
import ChatContextProvider from "../../context/ChatContext";

export default function Content(){
    return(
        <div className="app-content">
            <ChatContextProvider>
                <ContactBox/>
                <ChatBox/>
            </ChatContextProvider>
        </div>
    );
}
