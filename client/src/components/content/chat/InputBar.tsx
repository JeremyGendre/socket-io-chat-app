import React from "react";
import '../../../style/chat/inputbar.css';

export default function InputBar(){
    return(
        <div className="input-bar-container">
            <input type="text" placeholder="Enter your message..."/>
        </div>
    );
}
