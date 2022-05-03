import React, { useState, useEffect } from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
  const [userLoginInfo, setuserLoginInfo] = useState(false);
  useEffect(() =>
    setInterval(() => {
      if (localStorage.getItem('token')) {
      setuserLoginInfo(true);
      }
    },setuserLoginInfo), 
    []);
    return(
    
        <Navbar collapseOnSelect expand="lg" style={{background:"#09425A"}} variant="dark">
        <Container>
            
        <Navbar.Brand href="/">Crownpass Monitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/regions">Regions</Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
          
          {userLoginInfo === false ? (
            <Nav className='navbar-nav ml-auto'>
            <Nav.Link href="/login" style={{color:'#fff'}}>

            <FontAwesomeIcon icon={faUser} style={{padding: '0px 2px'}} />
             Login
            </Nav.Link> 
            <Nav.Link href="/signup" style={{color:'#fff'}}>
              Sign Up
            </Nav.Link>
            </Nav>
          ): (
            <Nav className='navbar-nav ml-auto'>
              <Nav.Link to="/my-profile" className="sign-in">
                My Profile
              </Nav.Link>
              <Nav.Link
                to="/"
                className="sign-in"
                onClick={() => {
                  setuserLoginInfo(false);
                  console.log('clicked');
                  localStorage.clear();
                }}
              >
                LOGOUT
              </Nav.Link>
            </Nav>
          )}
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
    )
}