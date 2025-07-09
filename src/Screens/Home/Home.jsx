import { Container, Row, Col, Card, Button } from "react-bootstrap";
import College from "../../assets/DDDD.jpg";
import { Navigate,useNavigate } from "react-router-dom";
    

export const Home = () => {
const navigate=useNavigate();
const handleNavigate = (props) => {
        navigate(`/${props.variant}`)

}

    // const items = [
    //     { key: "bca", label: "BCA", icon: "🎓" },
    //     { key: "bba", label: "BBA", icon: "🎓" },
    //     { key: "mca", label: "MCA", icon: "💼" },
    //     { key: "mba", label: "MBA", icon: "🏛" },
    //     { key: "ctis", label: "BCA-CTIS", icon: "💻" },
    //     // { key: "vacc", label: "VALUE ADDED COURSES FOR COMPUTER APPLICATION", icon: "📘" },
    // ];

    return (
        <>

            <div
                style={{
                    backgroundImage: `url(${College})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    position: "relative",
                }}
            >
                {/* Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                    }}
                />


                <Container
                    fluid
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        height: "100vh",
                        position: "relative",
                        zIndex: 2,
                        color: "white"
                        // color: "#f8b400",
                    }}
                >
                    <Container>
                        <h1 className="text-center fw-semibold">Welcome To </h1>
                        <h1 className="text-center fw-semibold">MAHARAJA AGRASEN INSTITUTE OF</h1>
                        <h1 className="text-center fw-semibold">MANAGEMENT & TECHNOLOGY</h1>
                        <h1 className="text-center fw-bold ">DIGITAL LIBRARY</h1>
                    </Container>
                </Container>
            </div>

            <Container >
                <Row sm={1} md={2} lg={2} className="m-5 p-5 shadow-lg border rounded cursor-pointer " style={{ cursor: "pointer", minHeight: "250px" }} onClick={handleNavigate} variant="bca">
                    <Col>
                        <Card className=" text-dark" style={{ backgroundColor: "#f5f5dc", height: "240px" }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <h1>BCA</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div>
                            <h5>Your gateway to knowledge starts here.</h5>
                            <p>
                                Explore essential textbooks, reference materials, and guides curated to support your BCA curriculum. From programming to data structures, every page brings you closer to mastery.
                                <br />
                                <b><i>📖 Read more. Know more. Build more.</i></b>
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row sm={1} md={2} lg={2} className="m-5 p-5 shadow-lg border rounded cursor-pointer" style={{ cursor: "pointer", minHeight: "250px" }} onClick={handleNavigate} variant={"bba"}>
                    <Col>
                        <p>
                            <h5>Build your business foundation.</h5>

                            Access textbooks and guides covering business principles, economics, communication, and entrepreneurship to support your BBA studies.
                            <br />
                            <b><i>📖 Understand business. Think smart. Grow strong. </i>    </b>                    </p>
                    </Col>
                    <Col>
                        <Card className=" text-dark" style={{ backgroundColor: "	#f7e7ce	", height: "240px" }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <h1>BBA</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row sm={1} md={2} lg={2} className="m-5 p-5 shadow-lg border rounded " style={{ cursor: "pointer", minHeight: "250px" }} onClick={handleNavigate} variant={"mca"}>
                    <Col>
                        <Card className=" text-dark" style={{ backgroundColor: "#faf0e6", height: "240px" }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <h1>MCA</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <p>
                            <h5>Advance your skills. Expand your horizons.</h5>

                            Dive into books on advanced programming, AI, machine learning, software engineering, and more—curated to empower your MCA journey.
                            <br />
                            <b><i>📖 Code deeper. Think bigger. Lead smarter.    </i></b>                    </p>
                    </Col>
                </Row>
                <Row sm={1} md={2} lg={2} className="m-5 p-5 shadow-lg border rounded cursor-pointer" style={{ cursor: "pointer", minHeight: "250px" }} onClick={handleNavigate} variant={"mba"}>
                    <Col>
                        <p>
                            <h5>Turn insights into impact.</h5>

                            Explore strategic management, marketing, finance, HR, and business analytics resources—carefully selected to fuel your MBA ambitions.
                            <br />
                            <b><i>📖 Learn strategy. Master leadership. Drive change.  </i>   </b>                   </p>
                    </Col>
                    <Col >
                        <Card className="text-dark" style={{ backgroundColor: "#fbeccf", height: "240px" }}>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <h1>MBA</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Card className="p-5  border-0" style={{ backgroundColor: "#fef8f2 " }}>
                    <h1 className="mb-3 text-primary">Purpose of DIGITAL LIBRARY</h1>
                    <p className="mb-4 text-dark" style={{ fontSize: "1.5rem" }}>
                        The Digital Library at Maharaja Agrasen Institute of Management & Technology has been developed to provide easy access to resources like E-books, Journals, Syllabus, Previous Years' University Questions, Time Table, and other academic materials for the students of the institute.
                    </p>
                    <Button
                        className="rounded-pill px-4 py-2 border-0"
                        style={{
                            backgroundColor: "#003366", // deep navy to match navbar
                            color: "white",
                            transition: "all 0.3s ease"
                        }}
                    >
                        Details
                    </Button>
                </Card>
            </Container>

        </>
    );
}; 
