import React from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Dog Team</Navbar.Brand>
      <Nav>
        <Nav.Link href="#link">My Team</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;