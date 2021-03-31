import React from 'react';
import {Col, Card, Row} from "react-bootstrap";
import "./Rules.css";


function Rules(props) {
    return (
        <div>
            <h4 className="title">Trust & safety</h4>
            <div className="rules-container">
                <h5 className="rules-text">Food safety is extremely important to take into account when sharing surplus
                    food and both the person giving the food and the person picking the food up should always take the
                    following into account:</h5>
                <Row className="cards-container">
                    <Col md={6}>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title>#1</Card.Title>
                                <Card.Text>
                                    Only add food that you would be willing to eat yourself. Any person giving away food
                                    must not give away food they believe is unsafe to eat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title>#2</Card.Title>
                                <Card.Text>
                                    Any person requesting food is responsible for asking the questions that give them
                                    the comfort that food is safe to eat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Rules;