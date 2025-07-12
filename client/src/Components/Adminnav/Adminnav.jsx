import { Nav, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

export const Adminnav = () => {
    return (
        <>
            <Col md={2}
                className="text-white min-vh-100 p-3"
                style={{ backgroundColor: "#223e66" }}>
                <h1 className="mb-4">Admin Home</h1>

                <Nav className="flex-column">
                    <Nav.Link
                        className="text-white px-3 py-2 rounded my-1"
                        as={NavLink} to="/admin/add">Add Course</Nav.Link>
                    <Nav.Link as={NavLink}
                        className={({ isActive }) =>
                            `text-white px-3 py-2 rounded my-1 fw-bold ${isActive ? 'bg-primary' : ''}`
                        } to="/admin/update"
                    >update Course</Nav.Link>
                    <Nav.Link as={NavLink}
                        className={({ isActive }) =>
                            `text-white px-3 py-2 rounded my-1 fw-bold ${isActive ? 'bg-primary' : ''}`
                        } to="/admin/delete">delete Course</Nav.Link>
                    <Nav.Link as={NavLink}
                        className={({ isActive }) =>
                            `text-white px-3 py-2 rounded my-1 fw-bold ${isActive ? 'bg-primary' : ''}`
                        } to="/admin/addbook">Add E-books (Which is not in syllabus)</Nav.Link>
                    <Nav.Link as={NavLink}
                        className={({ isActive }) =>
                            `text-white px-3 py-2 rounded my-1 fw-bold ${isActive ? 'bg-primary' : ''}`
                        } to="/admin/dltbook">Delete E-books (Which is not in syllabus)</Nav.Link>
                </Nav>
            </Col>
        </>
    )
}