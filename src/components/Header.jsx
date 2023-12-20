import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const headerStyle = {
        marginRight: '20px',
        marginLeft: '20px',
        backgroundColor: '#00796b',
        borderBottom: '2px solid #004d40',
        borderRadius: '0',
        padding: '10px 20px',
    };

    return (
        <Navbar expand="lg" style={headerStyle}>
            <Navbar.Brand href="#" className="text-white">Polis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto w-100 justify-content-end">
                    <Nav.Link href="/about" className="text-white">Главная</Nav.Link>
                    <Nav.Link href="/posts" className="text-white">Посты</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
