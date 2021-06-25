import React, {useEffect} from 'react';
import './style/App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
    const [data, setData] = React.useState(null);

    useEffect(() => {
        fetch("/api/")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="app">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
