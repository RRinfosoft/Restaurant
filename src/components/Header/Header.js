import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import '../../App.css'
import './head.css'

const Header = () => {
  return (
    <>
      <Navbar className='bc' expand="lg" sticky='top'>
      <Container>
        <div className='reslogo'>
            <img className='res' src='logo.png' />
        </div>
        {/* <Navbar.Brand style={{color:"white"}}>Business Website</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link className='header' to="/">Home</Link>
            <Link className='header' to="/about">About</Link>
            <Link className='header' to="/menu">Menu</Link>
            <Link className='header' to="/events">Events</Link>
            <Link className='header' to="/chefs">Chefs</Link>
            <Link className='header' to="/gallery">Gallery</Link>
            <Link className='header' to="/contact">Contact</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
  )
}

export default Header