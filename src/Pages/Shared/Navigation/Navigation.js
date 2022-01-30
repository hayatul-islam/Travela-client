import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container className='sectionContainer'>
                <Navbar.Brand >
                    <div className='logo'>
                        Travela.
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navigationMenu d-flex align-items-center">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/tour">Tour</NavLink>
                        <NavLink to="/hotels">Hotels</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <Button className='addListingBtn'>Add listing</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;