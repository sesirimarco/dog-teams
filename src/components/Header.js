import React from 'react-dom';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">Dog Team</Link>
      <Nav>
        <Link to="/my-team">My Team</Link>
      </Nav>
    </Navbar>
  );
};

export default Header;