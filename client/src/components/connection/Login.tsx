import React, {FormEvent, useContext, useState} from 'react';
import '../../style/connection/login.css';
import {UserContext} from "../../context/UserContext";
import {getRandomInt} from "../../utils/main";

export default function Login(){
    const userContext = useContext(UserContext);
    const [username, setUsername] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const uid = getRandomInt(99999);
        userContext.setUser({
            username: username,
            email: `${username}${uid}@gmail.com`,
            name: 'Nom Test',
            id: uid
        });
    };

    return(
        <div className="app-login-container">
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-row">Please, log in to use the chat</div>
                    <div className="login-form-row">
                        <input type="text" required placeholder="Username" value={username} onChange={e => {setUsername(e.target.value)}}/>
                    </div>
                    <div className="login-form-row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
