import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import { PDFViewer } from '../../Components/PDFviewer/Pdf';
export const Timetable = () => {
  const { courseId } = useParams(); // e.g. "bca", "mba"
  const [course, setCourse] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data.json');
        return res.json();
      })
      .then((data) => {
        const foundCourse = data.courses.find(
          (c) => c.course_name.toLowerCase() === courseId.toLowerCase()
        );
        if (!foundCourse) throw new Error('Course not found');
        setCourse(foundCourse);
        setSelectedSemester(foundCourse.semesters[0]); // default to 1st sem
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-danger text-center mt-4">Error: {error}</p>;
  if (!course || !selectedSemester) return null;

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} 
        className="text-white min-vh-100 p-3"
         style={{ backgroundColor: "#223e66" }}>
          <h1 className="mb-4">{course.course_name}</h1>
          <Nav className="flex-column">
            {course.semesters.map((sem, idx) => (
              <Nav.Link
                key={idx}
                onClick={() => setSelectedSemester(sem)}
                className={`text-white px-3 py-2 rounded my-1 ${sem.semester === selectedSemester.semester ? 'fw-bold bg-primary' : ''}`}
              >
                {sem.semester}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        {/* Main Content */}
        
        <Col md={10} className="p-4">
        <Row>
          
          <h3 className="mb-4">TimeTable - {selectedSemester.semester}</h3>
         

          {/* Syllabus */}
          <Col>
            <PDFViewer link={selectedSemester.timetable_pdf}/>
          </Col>
            </Row>
         
        </Col>
      </Row>
    </Container>
  );
};
