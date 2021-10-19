import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <>
            <Navbar bg="info bg-opacity-75" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className=" text-dark fw-bold fs-3">Prime care diagnostic center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="nav-link text-dark fw-bold" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-link text-dark fw-bold" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/contact">Contact us</Nav.Link>
                        <Navbar.Text><a href="#login" style={{ textDecoration: 'none', color: "purple", fontWeight: "700", fontSize: "18px" }}>{user.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} className="mx-3 fw-bold" variant="warning">Logout</Button> :
                            <Nav.Link as={Link} className="nav-link text-dark fw-bold" to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;