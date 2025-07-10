import { Container, Row, Col, Card, Button } from "react-bootstrap";
import College from "../../assets/DDDD.jpg";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const data = [
        { key: "bca", label: "BCA", icon: "🎓", headline: "Your gateway to knowledge starts here.", content: " Explore essential textbooks, reference materials, and guides curated to support your BCA curriculum. From programming to data structures, every page brings you closer to mastery.", ending: "📖 Read more. Know more. Build more." },

        { key: "bba", label: "BBA", icon: "🎓", headline: "Build your business foundation.", content: "Access textbooks and guides covering business principles, economics, communication, and entrepreneurship to support your BBA studies.", ending: "📖 Understand business. Think smart. Grow strong. " },

        { key: "mca", label: "MCA", icon: "🎓", headline: "Advance your skills. Expand your horizons.", content: "Dive into books on advanced programming, AI, machine learning, software engineering, and more—curated to empower your MCA journey.", ending: "📖 Code deeper. Think bigger. Lead smarter." },

        { key: "mba", label: "MBA", icon: "🎓", headline: "Turn insights into impact.", content: "  Explore strategic management, marketing, finance, HR, and business analytics resources—carefully selected to fuel your MBA ambitions.", ending: "📖 Learn strategy. Master leadership. Drive change." }
        // { key: "vacc", label: "VALUE ADDED COURSES FOR COMPUTER APPLICATION", icon: "📘" },
    ];
    const navigate=useNavigate();
    const handleClick=(key)=>{
           console.log("navigaet")
            navigate(`/ebooks/${key}`)
    }

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


            {/* <section className="bg-light py-5">
        <Container>
          <h2 className="text-center text-black mb-4">E-Content</h2>
          <Row className="g-4 justify-content-center">
            {items.map((item) => (
              <Col
                key={item.key}
                xs={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center"
              >
                <Card
                  className="text-center shadow-sm"
                  style={{
                    backgroundColor:"rgb(105, 180, 241)",
                    cursor:"pointer" ,
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                  onClick={handleNavigate}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    {item.icon}
                  </div>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem", fontWeight: "600" }}>
                      {item.label}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Card className="m-10 p-5 shadow-lg " style={{backgroundColor:"rgb(140, 165, 185)"}} >
        <h1>Purpose of DIGITAL LIBRARY</h1>
        <p>The Digital Library at Maharaja Agrasen Institute of Management & Technology has been developed to provide easy access of the resources like E-book, Journal, Syllabus, Previous Years University Questions, Time Table and other academic resources to the student of the institute.</p>
        <Button className="bg-light" style={{color:"black", height:"50px" ,width:"100px"}}>Details</Button>
      </Card>*/}
            <Container>
                {data.map((item, index) => (
                    <Row
                        key={item.key}
                        sm={1}
                        md={2}
                        lg={2}
                        className="m-5 p-5 shadow-lg border rounded border-0"
                        style={{ cursor:"pointer" }}
                        onClick={()=>{handleClick(item.key)}}
                       
                    >
                        {/* Alternate left/right positioning */}
                        {index % 2 === 0 ? (
                            <>
                                <Col>
                                    <Card className="text-dark border-0" style={{ backgroundColor: "#f5f5dc", height: "200px" }}  >
                                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                            <h1>{item.label}</h1>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="py-5">
                                    <h5>{item.headline}</h5>
                                    <p>{item.content}<br /><i>{item.ending}</i></p>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col className="py-5">
                                    <h5>{item.headline}</h5>
                                    {item.content}<br /><i>{item.ending}</i>
                                </Col>
                                <Col>
                                    <Card className="text-dark border-0" style={{ backgroundColor: "#fbeccf", height: "200px" }}>
                                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                            <h1>{item.label}</h1>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        )}
                    </Row>
                ))}
            </Container>


            <Container className="my-5" >
                <Card className="p-5 shadow-lg border rounded border-0" style={{ backgroundColor: "#fef8f2 " }}>
                    <h1 className="mb-3 text-primary ">PURPOSE OF DIGITAL LIBRARY</h1>
                    <p className="mb-4 text-dark" style={{ fontSize: "1.2rem" }}>
                        The Digital Library at Maharaja Agrasen Institute of Management & Technology has been developed to provide easy access to resources like E-books, Journals, Syllabus, Previous Years' University Questions, Time Table, and other academic materials for the students of the institute.
                    </p>
                    <Button sm={6} md={2} lg={2} as={Col}
                    // size="sm"
                        className=" px-4 py-2 border-0"
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
