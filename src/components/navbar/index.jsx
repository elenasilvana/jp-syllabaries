import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//export default class Example extends React.Component {
    /*
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    }
    render() {
    });*/
    export default function NavBar ({
        collapsed
    }) { 
        return (
      <div>
       <Navbar color="faded" light> 
          <NavbarBrand  className="mr-auto"><Link to='/'>Learn Syllabaries</Link></NavbarBrand>
          <NavbarToggler onClick={()=>{toggleNavbar()}} className="mr-2" />
          <Collapse isOpen={collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink><Link to='/syllabary'>Syllabaries</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/game'>Play</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
