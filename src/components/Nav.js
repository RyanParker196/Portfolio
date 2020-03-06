import React from 'react'
//! TODO: finish implementing search feature
// import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap'
import { Navbar , Nav } from 'react-bootstrap'

export default function MyNav() {
    return (
        <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="https://www.linkedin.com/in/ryan-parker196/" target="_blank" >LinkedIn</Nav.Link>
                <Nav.Link href="#Resume">Resume</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form> */}
        </Navbar>
    )
}
