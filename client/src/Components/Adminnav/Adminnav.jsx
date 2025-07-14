import { Nav, Col } from "react-bootstrap";
import { useState } from "react";

export const Adminnav = () => {
    const [selectTitle, setTitle] = useState(null);

    const data = [
        { key: "1", title: "Add Course" },
        { key: "2", title: "Update Course" },
        { key: "3", title: "Delete Course" },
        { key: "4", title: "Add E-Book (which is not in course)" },
        { key: "5", title: "Delete E-Book (which is not in course)" },
    ];

    return (
        <Col md={2} className="text-white min-vh-100 p-3" style={{ backgroundColor: "#223e66" }}>
            <h1 className="mb-4">Dashboard</h1>
            <Nav className="flex-column">
                {data.map((item) => (
                    <Nav.Link
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
