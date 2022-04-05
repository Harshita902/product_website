import React,{Component} from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import{AiOutlineShoppingCart} from 'react-icons/ai';
 export default class Header extends Component {
  render(){
    return(
    
      <div>
        <Navbar className='nav'  expand="lg">
  <Container>
    <Navbar.Brand href="#logo"><img src="images.png" className='logo'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/" className='link'><AiFillHome/>Home</Link></Nav.Link>
        <Nav.Link><Link to="/about" className='link'>About</Link></Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to="/lips" className='link'>Lips</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/face" className='link'>Face</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/eyes" className='link'>Eyes</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/nails" className='link'>Nails</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to="/contact" className='link'>Contact</Link></Nav.Link>
        <Nav.Link><Link to="/services" className='link'>Services</Link></Nav.Link>
        <Nav.Link><Link to="/gallery" className='link'>Gallery</Link></Nav.Link>
        <Nav.Link><Link to="/otherItem" className='link'>OtherItem</Link></Nav.Link>
        <Nav.Link><Link to="/api" className='link'>Api</Link></Nav.Link>
        <Nav.Link><Link to="/faq" className='link'>FAQ</Link></Nav.Link>
        <Nav.Link><Link to="/cart" className='link'><AiOutlineShoppingCart/></Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    

    
     </div>



    )
  };
};
