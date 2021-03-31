import React from 'react';
import {Row, Col, Image} from "react-bootstrap";
import sharing from "../../images/sharing.jpg";
import "./About.css";

function About(props) {
    return (
        <div className="about-container">
            <h4 className="title">About us</h4>
            <Row>
                <Col md={6}>
                    <h1>Sharing is caring.</h1>
                </Col>
                <Col md={5}>
                    <h5 className="about-text">"Here at SchabCoin, we say no to the wasteful, throw-away society driven by consumerism. Every
                        year, in the US alone, $43 billion worth of edible food is estimated to be thrown away. Our goal
                        is to create a community where you can share your food for free and meet like-minded people, as
                        we all take a small step towards ending hunger, poverty, and climate change." </h5>
                </Col>
            </Row>
            <div className="photo-container">
                <Image src={sharing} fluid/>
            </div>
        </div>
    );
}

export default About;