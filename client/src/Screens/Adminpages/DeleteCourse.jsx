import { useFormik } from "formik";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Button,
} from "react-bootstrap";
import { Adminnav } from "../../Components/Adminnav/Adminnav";
import * as yup from "yup";

// ✅ Validation Schema
const validateSchema = yup.object().shape({
    course: yup.string().required("Course name cannot be empty"),
});

export const DeleteCourse = () => {
    const formik = useFormik({
        initialValues: {
            course: "",
        },
        onSubmit: (values) => {
            console.log("Deleting Course:", values);
            // You can send DELETE request here
            // Example: axios.delete(`/api/courses/${values.course}`)
        },
        validationSchema: validateSchema,
    });

    return (
        <Container fluid className="p-0 m-0">
            <Row className="min-vh-100">
                {/* Sidebar */}
                <Col md={2} className="text-white p-3" style={{ backgroundColor: "#223e66" }}>
                    <Adminnav />
                </Col>

                {/* Main Content */}
                <Col md={10} className="p-5">
                    <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded">
                        <h1 className="text-center">Delete Course</h1>
                        <Row className="d-flex justify-content-center">
                            <Col sm={12} md={4} lg={8}>
                                {/* Course Name Input */}
                                <FormGroup className="mb-3">
                                    <Form.Label htmlFor="course">Course Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="course"
                                        placeholder="Enter course name to delete"
                                        name="course"
                                        {...formik.getFieldProps("course")}
                                    />
                                    {formik.touched.course && formik.errors.course && (
                                        <div style={{ color: "red" }}>{formik.errors.course}</div>
                                    )}
                                </FormGroup>

                                <Row>
                                    <Col>
                                        <Button
                                            type="submit"
                                            style={{ backgroundColor: "#b22222" }}
                                            className="my-3 w-100"
                                        >
                                            Delete Course
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            type="button"
                                            variant="secondary"
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
            </Row>
        </Container>
    );
};
