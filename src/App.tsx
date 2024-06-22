import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

    const [messages, setMessages] = useState();

    useEffect(() => {
        axios.get('https://coral-app-n5qdo.ondigitalocean.app/1')
            .then(response => {
                setMessages(response.data.body);
            })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                message from the backend from DB : {messages}
            </header>
        </div>
    );
}

export default App;
