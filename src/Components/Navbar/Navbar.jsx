import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Navbarr = () => {
    return (
        <>
            <Navbar
                variant="dark"
                sticky="top" expand="lg" style={{
                    backgroundColor: "#1d3557"
                }} className="m-0 p-3" sticky-top>
                <Container fluid className="m-0 p-0 justify-content-start">

                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="http://192.168.1.12/images/maimt_logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Maimt"
                        />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'white' }}>MAIMT</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " className="ms-auto" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/rules">Rules</Nav.Link>

                            <NavDropdown title="Papers" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/bca">BCA</NavDropdown.Item>
                                <NavDropdown.Item as={Link}  to="/bba"> BBA </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/mca">MCA</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/mba"> MBA </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="E-Contents" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/sylabus">Syllabus</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/timetable"> Timetable </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/journals"> Journals </NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="E-Books" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/technology">Technology</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/management"> Management </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/class"> Class </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav className=" fw-bold">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact-us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}