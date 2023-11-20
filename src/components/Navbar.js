import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import marginRightAllocator from "../modules/marginRightAllocator";

const Component = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Icon.Gem style={ marginRightAllocator.defaultQuantity } />
                <Navbar.Brand as={Link} to="/">MICHAEL SINCLAIR</Navbar.Brand>
                <Nav className="me-auto desktop-only-flex">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/roadmap">My Value</Nav.Link>
                    <Nav.Link as={Link} to="/developments">Developments</Nav.Link>
                    <Nav.Link as={Link} to="/designs">Designs</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Component;