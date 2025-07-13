import { Card, Container,Row,Col, Button } from "react-bootstrap"
export const About = () => {
    return (
        <>
            <Container className="bg-light">
                <h1 className="text-center pt-5">About Us</h1>
                <Container fluid className="m-4 d-flex justify-content-center border-0 border rounded">
                    <Row lg={4} md={2} sm={1} style={{backgroundColor:"#1d3557"}} className="m-4">
                    <Col>
                    <Card className="d-flex justify-content-center align-items-center m-3 p-4" >
                        <h3>4,500+</h3>
                        <p>Placement offers                                               </p>
                        
                    </Card>
                    </Col>
                    <Col>
                    <Card className="d-flex justify-content-center align-items-center m-3 p-4" >
                        <h3>5,100+</h3>
                        <p>Students Enrolled</p>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="d-flex justify-content-center align-items-center m-3 p-4" >
                        <h3>70+</h3>
                        <p>Companies Visited</p>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="d-flex justify-content-center align-items-center m-3 p-4" >
                        <h3>27 LPA</h3>
                        <p>Highest Package                                                            </p>
                    </Card>
                    </Col>
                    </Row>
                </Container>
                <Container className="p-5" style={{ fontFamily: "sans-serif" }}>
                    MAIMT was founded in 1997, the Golden Jubilee year of India's Independence, as the result of the vision of Maharaja Agrasen under Kurukshetra University, Kurukshetra with the approval of AICTE. MAIMT is one of the premier institutes engaged in providing the necessary environment to facilitate advanced learning in the Management & Technical education. The infrastructure of the institute, facilities, course curriculum and teaching methodology are designed keeping in view its commitment to achieve excellence in the field of professional education. our motto is:
                    <br />
                    <ul>
                        <li>

                            To serve the society <br />
                        </li>
                        <li>

                            To bring awareness among general public <br />
                        </li>
                        <li>
                            To increase the standard of living <br />

                        </li>
                        <li>
                            To educate the public <br />

                        </li>
                        <li>
                            To fulfill the social responsibility <br />

                        </li>
                    </ul>

                    It is a charitable and non-profit organisation, that initially built its huge infrastructure in the form of Maharaja Agrasen College to cater to the needs of students in the domains of commerce, Arts, Economics & Computers by running B.A., B.Com., BIM, BCA, MBE, M.Com. courses. It expanded its arena of responsibility by incepting its sister concern, MAIMT to offer MBA and MCA courses. The sabha is not only discharging its corporate social responsibility well on the ground but also continuously expanding its origin under the prime guidance of Sh. Shushil Gupta (President), Sh. Praveen Goel(Vice President), Dr. Ashwini Goel (General Secretary) and Sh. Pawan Kumar Garg (Finance Secretary) by continuously developing the new charitable institutions.
                <br />
               
                    <div className="d-flex justify-content-center">
                <Button className="m-5 bg-warning border-0" style={{height:"70px" , width:"200px"}} 
               onClick={() => {
    window.location.href = "https://maimt.com/";
  }}
                >Know More</Button>
                    </div>
                
                </Container>

            </Container>


        </>
    )
}