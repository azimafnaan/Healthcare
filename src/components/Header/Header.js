import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hook/useAuth';



const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Surgeon Heath Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#expertise">Expertise</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/facility">Facility</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        {user?.email && <Button onClick={logout} variant="primary">Logout </Button>}
                        {user?.email && <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;