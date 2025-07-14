import { useState } from "react";
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

// ✅ Yup validation schema
const validateSchema = yup.object().shape({
  courseName: yup.string().required("Course name is required"),
  semester: yup
    .string()
    .required("Semester count is required")
    .oneOf(["1", "2", "3", "4", "5", "6", "7", "8"], "Select valid semester count"),
});

export const AddCourse = () => {
  const [semCount, setSemCount] = useState(0);

  const formik = useFormik({
    initialValues: {
      courseName: "",
      semester: "",
      ebooks: {},
      papers: {},
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log("Course Added:", values);

      // 🔗 POST request example (backend integration):
      // axios.post("/api/courses/add", values)
    },
  });

  const handleSemesterChange = (e) => {
    const sem = e.target.value;
    formik.handleChange(e);
    const semInt = parseInt(sem);
    if (!isNaN(semInt)) {
      setSemCount(semInt);
    }
  };

  return (
    <Container fluid className="p-0 m-0">
      <Row className="min-vh-100">
        <Col md={2} className="text-white p-3" style={{ backgroundColor: "#223e66" }}>
          <Adminnav />
        </Col>

        <Col md={10} className="p-5">
          <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded">
            <h1 className="text-center">Add New Course</h1>

            <Row className="d-flex justify-content-center">
              <Col sm={12} md={4} lg={8}>
                {/* Course Name */}
                <FormGroup className="mb-3">
                  <Form.Label>Course Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="courseName"
                    placeholder="Enter course name"
                    {...formik.getFieldProps("courseName")}
                  />
                  {formik.touched.courseName && formik.errors.courseName && (
                    <div style={{ color: "red" }}>{formik.errors.courseName}</div>
                  )}
                </FormGroup>

                {/* Semester Selection */}
                <FormGroup className="mb-3">
                  <Form.Label>Number of Semesters:</Form.Label>
                  <Form.Select
                    name="semester"
                    value={formik.values.semester}
                    onChange={handleSemesterChange}
                  >
                    <option value="">Select semesters</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Select>
                  {formik.touched.semester && formik.errors.semester && (
                    <div style={{ color: "red" }}>{formik.errors.semester}</div>
                  )}
                </FormGroup>

                {/* Dynamic semester fields */}
                {Array.from({ length: semCount }, (_, i) => {
                  const sem = i + 1;
                  return (
                    <div key={sem} className="border rounded p-3 mb-3">
                      <h6>Semester {sem}</h6>

                      <FormGroup className="mb-2">
                        <Form.Label>E-book Link (Semester {sem}):</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={`E-book link for Semester ${sem}`}
                          value={formik.values.ebooks?.[sem] || ""}
                          onChange={(e) =>
                            formik.setFieldValue(`ebooks.${sem}`, e.target.value)
                          }
                        />
                      </FormGroup>

                      <FormGroup className="mb-2">
                        <Form.Label>Previous Year Paper Link (Semester {sem}):</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={`Paper link for Semester ${sem}`}
                          value={formik.values.papers?.[sem] || ""}
                          onChange={(e) =>
                            formik.setFieldValue(`papers.${sem}`, e.target.value)
                          }
                        />
                      </FormGroup>
                    </div>
                  );
                })}

                {/* Buttons */}
                <Row>
                  <Col>
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#1d3557" }}
                      className="my-3 w-100"
                    >
                      Add Course
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      variant="success"
                      className="my-3 w-100"
                      onClick={() => {
                        formik.resetForm();
                        setSemCount(0);
                      }}
                    >
                      Next
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
