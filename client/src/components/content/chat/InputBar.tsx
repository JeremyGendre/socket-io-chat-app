import React, {FormEvent} from "react";
import '../../../style/chat/inputbar.css';

export default function InputBar(){

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log('submitting');
    };

    return(
        <form onSubmit={handleSubmit} className="input-bar-container">
            <input type="text" placeholder="Enter your message..." required autoFocus/>
            <button type="submit">Envoyer</button>
        </form>
    );
}
