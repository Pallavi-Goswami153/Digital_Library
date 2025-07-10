import { Formik, useFormik } from "formik"
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap"
import * as yup from "yup"
const validateSchema = yup.object().shape({

    name: yup.string()
        .required("name cannot be empty")
        .matches(/^[A-Za-z]$/, "useranme should conatin characters only"),
    contact: yup.string()
        .required("contact cannot be empty")
        .matches(/^[0-9]{10}$/, "Conatct number should conatin 10 numeric values only"),
    email: yup.string()
        .required("E-Mail cannot be empty")
                .matches(/^\S+@\S+\.\S+$/, "Enter a valid E-Mail"),
    subject: yup.string()
        .required("Subject cannot be empty"),
    remarks: yup.string()
        .required("Remarks cannot be empty"),
})
export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            email: "",
            subject: "",
            remarks: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },

        validationSchema: validateSchema
    })
    return (
        <>
            <Container fluid>
                <Row sm={1} md={2} lg={2} className="m-5">
                    <Col>
                        <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded">
                            <h1 className="text-center">Send Us Message</h1>
                            <Row className="d-flex justify-content-center">
                                <Col sm={12} md={4} lg={8}>
                                    <FormGroup>
                                        <Form.Label htmlFor="name">Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="name"
                                            placeholder="Enter Your Name"
                                            name="name"
                                            {...formik.getFieldProps("name")}
                                        />
                                    </FormGroup>
                                    {formik.touched.name && formik.errors.name && (
                                        <div style={{ color: "red" }}>{formik.errors.name}</div>
                                    )}
                                    <FormGroup>
                                        <Form.Label htmlFor="contact">Contact</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="contact"
                                            placeholder="Enter Your Contact"
                                            name="contact"
                                            {...formik.getFieldProps("contact")}
                                        />
                                        {formik.touched.contact && formik.errors.contact && (
                                            <div style={{ color: "red" }}>{formik.errors.contact}</div>
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="email">E-mail</Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            {...formik.getFieldProps("email")}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div style={{ color: "red" }}>{formik.errors.email}</div>
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="subject">Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="subject"
                                            placeholder="Enter Subject"
                                            name="subject"
                                            {...formik.getFieldProps("subject")}
                                        />
                                        {formik.touched.subject && formik.errors.subject && (
                                            <div style={{ color: "red" }}>{formik.errors.subject}</div>
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Label htmlFor="remarks">Remarks</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            id="remarks"
                                            placeholder="Your Query/Feedback remarks"
                                            name="remarks"
                                            style={{ resize: "none" }}
                                            maxLength={500}
                                            {...formik.getFieldProps("remarks")}
                                        />
                                        {formik.touched.remarks && formik.errors.remarks && (
                                            <div style={{ color: "red" }}>{formik.errors.remarks}</div>
                                        )}
                                    </FormGroup>
                                   <Row>
    <Col>
        <Button type="submit" variant="success" className="my-3 w-100" >
            Send Now
        </Button>
    </Col>
    <Col>
        <Button
            type="button"
            variant="danger"
            className="my-3 w-100"
            onClick={() => formik.resetForm()}
            
        >
            Clear
        </Button>
    </Col>
</Row>

                                </Col>
                            </Row>
                        </Form>
                    </Col>

                    <Col className="p-5" style={{ fontSize: "1.2rem" }}>
                        <b>
                            Maharaja Agrasen Institute of Management and Technology, Near Agrasen Chowk, Old Saharanpur Road, (Adjacent to Sector-15, HUDA) Jagadhri-135003.
                            <br />

                            Director: director@maimt.com
                            <br />
                            HR Department: hr@maimt.com
                            <br />
                            Placement Cell: placement@maimt.com
                            <br />
                            MBA Department: hodmgt@maimt.com
                            <br />
                            MCA Department: hodca@maimt.com
                            <br />
                            Librarian: library@maimt.com.
                            <br />
                            HELPLINE
                            <br />
                            01732-235255
                            <br />
                            01732-231362
                        </b>
                    </Col>
                </Row>
            </Container>
        </>
    )
}