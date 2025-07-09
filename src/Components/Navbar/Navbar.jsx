import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
// import {Maimt} from "../assets/Maimt.png"
export const Navbarr = () => {
    return (
        <>
            <Navbar
                // variant="dark"
                sticky="top" expand="lg" style={{
                    backgroundColor: "  #5590bf"
                }} className="m-0 p-3 ">
                <Container fluid className="m-0 p-0 justify-content-start">

                    <Navbar.Brand href="#home">
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
                            <Nav.Link href="#home">Home</Nav.Link>

                            <NavDropdown title="Papers" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">BCA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> BBA </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">MCA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4"> MBA </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="E-Contents" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Syllabus</NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2"> Timetable </NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="E-Books" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                                <NavDropdown.Item href="/management"> Management </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav className=" fw-bold">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact-us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}