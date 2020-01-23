import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  isOpen: boolean;
}

export class NavigationBar extends Component<Props, State> {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Gabriella Pelton</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/portfolio/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio/contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Work
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/portfolio/frontend">
                    <DropdownItem>Front End</DropdownItem>
                  </Link>
                  <Link to="/portfolio/backend">
                    <DropdownItem>Back End</DropdownItem>
                  </Link>
                  <Link to="/portfolio/fullstack">
                    <DropdownItem>Full Stack</DropdownItem>
                  </Link>
                  <Link to="/portfolio/mobile">
                    <DropdownItem>Mobile</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText><a href="https://github.com/greatgabsp">github</a></NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);