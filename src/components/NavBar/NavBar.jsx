import React from 'react'
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap'
import { FcDribbble } from "react-icons/fc";
import {CartWidget} from "./CartWidget";
import { Link } from "react-router-dom"
import "./NavBar.scss"

export const NavBar = () => {
  return (
       <Navbar bg="dark" variant="dark" id="nav-bar">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"} id="brand">
                    <FcDribbble />
                    Mi Ecommerce
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link to={"/category/camperas"}>
                                     Camperas
                                    </Link>
                                   
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to={"/category/remeras"}>
                                     Remeras
                                    </Link>
                                </NavDropdown.Item>
                               
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
          </Container>
      </Navbar>
  )
}
