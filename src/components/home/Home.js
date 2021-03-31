import React from 'react';
import './Home.css';
import {Button} from "react-bootstrap";

function Home(props) {
    return (
        <div className="home-container">
            <div className="home-text ">
                <h1 className="mb-3">SchabCoin</h1>
                <h4 className="mb-3">Great satisfaction comes from sharing with others.</h4>
                <Button className="login-button" variant="dark">Log in</Button>
            </div>
        </div>
    );
}

export default Home;