import React from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import UserContextProvider from "./context/UserContext";

function App() {
    return (
        <UserContextProvider>
            <div className="app">
                <Header/>
                <Content/>
            </div>
        </UserContextProvider>
    );
}

export default App;
