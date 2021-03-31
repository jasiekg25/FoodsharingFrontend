import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import './AppNavbar.css';


function AppNavbar(props) {
    return (
        <Navbar collapseOnSelect className="navbar-container" expand="lg" fixed="top">
            <Navbar.Brand href="#home" className="mr-auto">SC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#trust">Trust & safety</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;