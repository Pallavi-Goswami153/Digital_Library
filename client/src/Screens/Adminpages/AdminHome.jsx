import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Adminnav } from "../../Components/Adminnav/Adminnav";

export const AdminHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://localhost:4000/admin/verify", {
          withCredentials: true,
        })
        .then(() => {
          console.log("Session verified.");
        })
        .catch(() => {
          console.log("Redirecting to login.");
          navigate("/admin/login");
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Container fluid className="p-0 m-0">
      <Row className="min-vh-100">
        {/* Sidebar Navigation */}
        <Col md={2} className="text-white p-3" style={{ backgroundColor: "#223e66"}}>
          <Adminnav />
        </Col>

        {/* Main Dashboard Content */}
        <Col md={10} className="p-5">
          <h3 className="text-primary mb-3">
            <i>“Manage. Monitor. Modernize – Your Library at a Glance.”</i>
          </h3>
          <p className="lead">
            <b>Welcome to your Digital Library Admin Panel.</b><br />
            Here, you can manage books, oversee user activity, track borrowing trends,
            and keep your digital shelves organized and up-to-date. Everything you need
            to run your library efficiently — all in one place.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
