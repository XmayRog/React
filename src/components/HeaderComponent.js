import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Navlink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href="/">
                            <img src="assets/logo.png" height="30" width="41" alt="Restaurante con fusión"/>
                        </NavbarBrand>
                        <Nav navbar >
                            <NavItem>
                                <Navlink className="nav-link" to ="/home">
                                    <span className="fa fa-home fa-lg "> Home </span>
                                </Navlink>
                            </NavItem>
                            <NavItem>
                                <Navlink className="nav-link" to ="/aboutus">
                                    <span className="fa fa-info fa-lg "> Aboutus </span>
                                </Navlink>
                            </NavItem>
                            <NavItem>
                                <Navlink className="nav-link" to ="/menu">
                                    <span className="fa fa-list fa-lg "> Menu </span>
                                </Navlink>
                            </NavItem>
                            <NavItem>
                                <Navlink className="nav-link" to ="/contactus">
                                    <span className="fa fa-address-card fa-lg "> Contact Us </span>
                                </Navlink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className="col-12 col-sm-6">
                                <h1>Restaurante con fusión</h1>
                                <p>We take insperation from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses !</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;