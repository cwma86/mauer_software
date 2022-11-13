import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PageNav() {
  return (
    <Navbar bg="primary"  variant='dark' expand="lg" >
      <Container style={{margin:"0"}}>
        <Navbar.Brand href="/" sytle={{padding:"0"}}>
          <img
            src="./mauerSW-Logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutme">About Me</Nav.Link>
            <NavDropdown title="Apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="/plotter">plotter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;