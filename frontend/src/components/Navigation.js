import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'

class Navigation extends Component {

//TODO: Render Categories properly
  render() {
    return (
      <div className="navbar">
        <Navbar collapseOnSelect fixedTop>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#">Readable</a>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>
               <NavItem eventKey={1} href="#">Categories</NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
      </div>
    )
  }

}

export default Navigation;
