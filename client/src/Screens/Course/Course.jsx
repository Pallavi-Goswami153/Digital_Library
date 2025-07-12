import React, { useEffect, useState } from 'react';
import { EBook } from '../../Components/EBooks/EBooks';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';

export const Course = () => {
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

  if (loading) return  <BeatLoader
    color="#1d3557"
    loading={loading}
    // cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader" />
  //  <p className="text-center mt-4">Loading...</p>;
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
          <Col>
          <h3 className="mb-4">E-books - {selectedSemester.semester}</h3>
          </Col>

          {/* Syllabus and Timetable */}
          <Col className="text-end">
          <div className="mb-4">
            <a href={selectedSemester.syllabus_pdf} target="_blank"  className="btn btn-outline-info me-2 mb-2">
              Syllabus 
            </a>
            <a href={selectedSemester.timetable_pdf} target="_blank"  className="btn btn-outline-secondary mb-2">
              Timetable
            </a>
          </div>
          </Col>
            </Row>
          {/* Subjects */}
          {selectedSemester.subjects.map((subject, index) => (
            <Container fluid key={index} className="mb-4 shadow-sm bg-light">
              <Card.Body>
                <h5 className="text-center primary">{subject.name}</h5>

                {/* E-books */}
                {subject.ebooks?.length > 0 && (
                  <div className="mb-2">
                    {/* <b>E-books:</b> */}
                    <Row>
                      {subject.ebooks.map((ebook, idx) => (
                        <Col key={idx} lg={3} md={4} sm={6} xs={12} className="mb-4">
                          <EBook ebook={ebook} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </Card.Body>
            </Container>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
