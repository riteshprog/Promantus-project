import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
<div>
<MDBNavbar  className="nav-bar fixed-top" style={{padding: '10px'}}  id="parallelogram" dark expand="md" >
        <MDBNavbarBrand href="/">
       
        </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse id="navbarCollapse3" isOpen = { this.state.collapse } navbar>

          <MDBNavbarNav left>
            <MDBNavItem active  onClick={ this.onClick }>
              <MDBNavLink  to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/front-end">Front End</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/back-end">Back End</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/testing">Testing</MDBNavLink>
            </MDBNavItem>

            
          </MDBNavbarNav>
           </MDBCollapse>
      </MDBNavbar>

</div>    );
  }
}

export default NavbarPage;