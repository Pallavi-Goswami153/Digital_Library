// Course.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';

export const Course = () => {
  const { courseId } = useParams(); // like 'bca', 'mba'
  const [courseData, setCourseData] = useState({});
  const [selectedSemester, setSelectedSemester] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setCourseData(data[courseId]);
        // Auto-select the first semester
        const firstSemester = Object.keys(data[courseId])[0];
        setSelectedSemester(firstSemester);
      });
  }, [courseId]);

  if (!courseData || Object.keys(courseData).length === 0) return <p>Loading...</p>;

  const semesters = Object.keys(courseData);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} variant="dark" className="text-white min-vh-100 p-3" style={{backgroundColor:"#223e66"}}>
          <h4 className="mb-4">{courseId.toUpperCase()}</h4>
          <Nav className="flex-column">
            {semesters.map((sem) => (
              <Nav.Link
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`text-white ${sem === selectedSemester ? 'fw-bold' : ''}`}
              >
                {sem}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h2>{selectedSemester}</h2>
          {courseData[selectedSemester]?.map((book, index) => (
            <Card key={index} className="mb-3 shadow-sm p-3">
              <h5>{book.title}</h5>
              <p className="text-muted">by {book.author}</p>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
