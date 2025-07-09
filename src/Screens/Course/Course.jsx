// SidebarLayout.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

export const Course = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white min-vh-100 p-3">
          <h4 className="mb-4">My Sidebar</h4>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="text-white">Semester 1</Nav.Link>
            <Nav.Link href="/profile" className="text-white">Semester 2</Nav.Link>
            <Nav.Link href="/settings" className="text-white">Semester 3</Nav.Link>
            <Nav.Link href="/logout" className="text-white">Semester 4</Nav.Link>
            <Nav.Link href="/logout" className="text-white">Semester 5</Nav.Link>
            <Nav.Link href="/logout" className="text-white">Semester 6</Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h2>BCA</h2>
          <p>This is the main area of your dashboard.</p>
        </Col>
      </Row>
    </Container>
  );
};
