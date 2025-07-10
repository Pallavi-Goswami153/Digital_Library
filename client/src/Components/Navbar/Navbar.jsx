import { Navbar, Nav, Container, NavDropdown,Dropdown } from "react-bootstrap"
import "./navbar.css"
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
                           

                            <NavDropdown title="Papers" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/papers/bca">BCA</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/papers/bba"> BBA </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/papers/mca">MCA</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/papers/mba"> MBA </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="E-Contents" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item as={Link} to="/sylabus">Syllabus</NavDropdown.Item> */}
                                <Dropdown drop="end" className="submenu-dropdown">
                                    <Dropdown.Toggle as="div" className="dropdown-item submenu-toggle">
                                        Syllabus
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/sylabus/bca">BCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/bba">BBA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mca">MCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mba">MBA</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <NavDropdown.Item as={Link} to="/timetable"> Timetable </NavDropdown.Item> */}
                                <Dropdown drop="end" className="submenu-dropdown">
                                    <Dropdown.Toggle as="div" className="dropdown-item submenu-toggle">
                                        TimeTable
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/sylabus/bca">BCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/bba">BBA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mca">MCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mba">MBA</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <NavDropdown.Item as={Link} to="/journals"> Journals </NavDropdown.Item> */}
                                <Dropdown drop="end" className="submenu-dropdown">
                                    <Dropdown.Toggle as="div" className="dropdown-item submenu-toggle">
                                        Journal
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/journal/technical">Technology</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/journal/management">Management</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </NavDropdown>
                           
                            <NavDropdown title="E-Books" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/technology">Technology</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/management"> Management </NavDropdown.Item>
                                {/* <Dropdown drop="end" className="submenu-dropdown">
                                    <Dropdown.Toggle as="div" className="dropdown-item submenu-toggle">
                                        Course
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/sylabus/bca">BCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/bba">BBA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mca">MCA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/sylabus/mba">MBA</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                {/* <NavDropdown.Item as={Link} to="/class"> Course </NavDropdown.Item> */}
                            </NavDropdown>
                              <Nav.Link as={Link} to="/rules">Rules</Nav.Link>

                        </Nav>
                        <Nav className="fw-bold">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact-us</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}