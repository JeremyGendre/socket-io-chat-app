import React, {useEffect} from 'react';
import './style/App.css';

function App() {
    const [data, setData] = React.useState(null);

    useEffect(() => {
        fetch("/api/")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);console.log('tg');

    return (
        <div className="app">
            <header className="app-header">
                header
            </header>
            <div className="app-content">
                <p>{!data ? "Loading..." : data}</p>
            </div>
        </div>
    );
}

export default App;
