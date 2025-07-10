import { Card, Row, Col } from "react-bootstrap";
import { FiDownload, FiEye } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";

export const EBook = ({ ebook }) => {
  if (!ebook) return null;  // safety check

  const { 
    // cover_image,
     book_title, link } = ebook;

  return (
    <Card className="shadow-sm border-0 mb-4">
      {/* <Card.Img variant="top" src={cover_image} alt={book_title} /> */}
      <Card.Body>
        <Card.Title>{book_title}</Card.Title>
        <Row className="text-center mt-3">
          <Col>
            <a href={link} target="_blank" title="Download">
              <FiDownload size={24} style={{ cursor: "pointer" }} />
            </a>
          </Col>
          <Col>
            <a href={link} target="_blank"  title="View">
              <FiEye size={24} style={{ cursor: "pointer" }} />
            </a>
          </Col>
          {/* If you have video links, replace '#' below */}
          <Col>
            <a href={link}  title="Watch">
              <FaVideo size={24} style={{ cursor: "pointer" }} />
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
