import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import '../App.css';

const navbar= () =>{
  return (
  
  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  	<Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
  	<Navbar.Collapse id="navbarScroll">
  		<Nav>
  			<NavLink eventKey="1" as={Link} to="/">Liste</NavLink>
  			<NavLink eventKey="2" as={Link} to="/create-book">Ajouter</NavLink>
  		</Nav>
  	</Navbar.Collapse>
  </Navbar>
  
  );
}
export default navbar;