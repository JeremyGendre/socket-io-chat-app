import React from 'react';
import '../../style/connection/login.css';

export default function Login(){
    return(
        <div className="app-login-container">
            <div className="login-form-container">
                <form className="login-form">
                    <div className="login-form-row">Please, log in to use the chat</div>
                    <div className="login-form-row">
                        <input type="text" required placeholder="Username"/>
                    </div>
                    <div className="login-form-row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
