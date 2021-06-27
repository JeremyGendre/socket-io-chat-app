import React, {useContext} from "react";
import '../../style/header.css';
import {UserContext} from "../../context/UserContext";

export default function Header(){
    const userContext = useContext(UserContext);

    const handleDisconnect = () => {
        userContext.setUser(null);
    };

    return (
        <header className="app-header">
            <div className="my-auto">Welcome <span className="font-bold">{userContext.user?.username}</span></div>
            <div>
                <button className="disconnect-btn" onClick={handleDisconnect}>Disconnect</button>
            </div>
        </header>
    );
}
