import { Nav, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Adminnav = () => {
    const [selectTitle, setTitle] = useState(null);

    const data = [
        { key: "1", title: "Add Course" ,to:"/admin/addcourse"},
        { key: "2", title: "Update Course",to:"/admin/updatecourse"} ,
        { key: "3", title: "Delete Course" ,to:"/admin/deletecourse"},
        { key: "4", title: "Add E-Book ",to:"/admin/addebook"},
        { key: "5", title: "Delete E-Book ",to:"/admin/deleteebook" },
    ];
// setTitle(0)
    return (
        <Col  className="text-white min-vh-100 p-3" style={{ backgroundColor: "#223e66" }}>
            <h1 className="mb-4">Dashboard</h1>
            <Nav className="flex-column">
                {data.map((item) => (
                    <Nav.Link
                    as={Link}
                    to={item.to}
                        key={item.key}
                        onClick={() => setTitle(item)}
                        className={`text-white px-3 py-2 rounded my-1 ${selectTitle?.title === item.title ? 'fw-bold bg-primary' : ''}`}
                    >
                        {item.title}
                    </Nav.Link>
                ))}
            </Nav>
        </Col>
    );
};
