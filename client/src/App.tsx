import React, {useContext} from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import {UserContext} from "./context/UserContext";
import Login from "./components/connection/Login";

function App() {
    const userContext = useContext(UserContext);

    return (
        <div className="app">
            {!userContext.user ? (
                <Login/>
            ) : (
                <>
                    <Header/>
                    <Content/>
                </>
            )}
        </div>
    );
}

export default App;
