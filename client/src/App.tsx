import React from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
    return (
        <div className="app">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
