import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { capitalize } from '../utils/helpers'


class Navigation extends Component {

//TODO: Render Categories properly
//TODO: Hide Edit Putton appropriately
//<Button className="btn-edit-post">Edit Post</Button>
  render() {
    const { categories } = this.props
    console.log(categories);
    return (
      <div className="navbar">
        <Navbar collapseOnSelect fixedTop>
          <div className="nav-buttons">
            <Button className="btn-new-post">New Post</Button>
          </div>
           <Navbar.Header>
             <Navbar.Brand>
               <LinkContainer to="/">
                 <a>Readable</a>
               </LinkContainer>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav pullRight>
               {categories.length > 1 && categories.map((category) => (
                 <LinkContainer to="category" params={{category: category.name}}>
                   <NavItem className="nav-category" key={category.name}>{capitalize(category.name)}</NavItem>
                 </LinkContainer>
               ))}
             </Nav>
           </Navbar.Collapse>
         </Navbar>
      </div>
    )
  }

}

//Can use ownprops here for something
function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Navigation);
