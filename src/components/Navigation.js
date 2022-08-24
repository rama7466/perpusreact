import {Navbar, Container, Nav} from "react-bootstrap"

const Navigation = () =>  {
    return (
        <Navbar >
            <Container>
                <div className="textnav">
                <Navbar.Brand>REACT RAMA</Navbar.Brand>
                </div>
             <Nav>
                <Nav.Link href="#trending">Navigation</Nav.Link>
                <Nav.Link href="#gengre">Navbar</Nav.Link>
             </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;