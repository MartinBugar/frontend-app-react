import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Link, Route, Routes,} from "react-router-dom";
import Other from "./Other";

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
            <Router>
                <Routes>
                    <Route path="/other" element={<Other/>}></Route>
                </Routes>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    message from the backend from DB : {messages}
                    <Link to='/other'>
                        <button>Other</button>
                    </Link>
                </header>
            </Router>
        </div>
    );
}

export default App;
