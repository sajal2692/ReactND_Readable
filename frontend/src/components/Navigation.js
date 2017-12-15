import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link , withRouter} from 'react-router-dom';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { capitalize } from '../utils/helpers'

import '../styles/Navigation.css';

class Navigation extends Component {

//TODO: Render Categories properly
//TODO: Hide Edit Putton appropriately
//<Button className="btn-edit-post">Edit Post</Button>
  render() {
    const { categories } = this.props
    return (
      <div className="navbar">
        <Navbar collapseOnSelect>
          <div className="nav-buttons">
            <Link to="/newpost">
              <Button className="btn-new-post">New Post</Button>
            </Link>
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
                 <LinkContainer to={`/${category.path}`} key={category.name}>
                   <NavItem className="nav-category">{capitalize(category.name)}</NavItem>
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

export default withRouter(connect(mapStateToProps)(Navigation));
