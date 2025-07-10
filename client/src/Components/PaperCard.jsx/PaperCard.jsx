import { Card, Row, Col } from "react-bootstrap";
import { FiDownload, FiEye } from "react-icons/fi";

export const PaperCards = ({ papers = [] }) => {
  return (
    <>
    
    <Row className="mt-4">
      {papers.map((paperLink, idx) => (
        <Col key={idx} lg={4} md={6} sm={12} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>{`Previous Year Paper ${idx + 1}`}</Card.Title>
              <Row className="text-center mt-3">
                <Col>
                  <a
                    href={paperLink} target="_blank" title="Download"
                  >
                    <FiDownload size={24} style={{ cursor: "pointer" }} />
                  </a>
                </Col>
                <Col>
                  <a
                    href={paperLink} target="_blank" title="View"
                  >
                    <FiEye size={24} style={{ cursor: "pointer" }} />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};
