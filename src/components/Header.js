import React from 'react-dom';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({teamAmount}) => {
  return (
    <Navbar className="nav-align-items nav-bg">
      <Link to="/" className="navbar-brand">
        <img 
          src="https://www.pikpng.com/pngl/b/100-1003967_dog-png-icon-free-flat-animal-icons-clipart.png" 
          width="40" 
          height="40" 
          className="d-inline-block align-top" 
          alt="Dog Team!"
        />
        <span className="nav-brand-title">Dog Team</span>
      </Link>
      <Nav>
        <Link to="/my-team" className="navbar-brand nav-brand-my-team"  data-notification-hidden={teamAmount ? "false": "true"} data-notification-amount={teamAmount}>
          My Team
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;