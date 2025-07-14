import { useEffect, useState } from "react";
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

// 🧠 Pass courseId from route or props
const courseId = "BCA"; // Example: could come from URL param or selection

const validateSchema = yup.object().shape({
  existingCourse: yup.string().required("Select a course to update"),
  newCourseName: yup.string().required("New course name cannot be empty"),
  semester: yup
    .string()
    .required("Semester cannot be empty")
    .oneOf(["1", "2", "3", "4", "5", "6", "7", "8"], "Invalid semester selected"),
});

export const UpdateCourse = () => {
  const [semCount, setSemCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      existingCourse: "",
      newCourseName: "",
      semester: "",
      ebooks: {},
      papers: {},
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log("Final Update:", values);
    },
  });

  // 🔁 Handle semester dropdown update
  const handleSemesterChange = (e) => {
    const sem = e.target.value;
    formik.handleChange(e);
    const semInt = parseInt(sem);
    if (!isNaN(semInt)) {
      setSemCount(semInt);
    }
  };

  // 🔃 Load course data from JSON on component mount
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

        // Fill formik fields
        formik.setFieldValue("existingCourse", foundCourse.course_name);
        formik.setFieldValue("newCourseName", foundCourse.course_name);
        formik.setFieldValue("semester", String(foundCourse.semesters.length));
        setSemCount(foundCourse.semesters.length);

        const ebooks = {};
        const papers = {};
        foundCourse.semesters.forEach((sem) => {
          ebooks[sem.semester] = sem.ebook;
          papers[sem.semester] = sem.paper;
        });

        formik.setFieldValue("ebooks", ebooks);
        formik.setFieldValue("papers", papers);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [courseId]);

  return (
    <Container fluid className="p-0 m-0">
      <Row className="min-vh-100">
        <Col md={2} className="text-white p-3" style={{ backgroundColor: "#223e66" }}>
          <Adminnav />
        </Col>

        <Col md={10} className="p-5">
          {loading ? (
            <h5>Loading...</h5>
          ) : error ? (
            <h5 style={{ color: "red" }}>{error}</h5>
          ) : (
            <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded">
              <h1 className="text-center">Update Course</h1>

              <Row className="d-flex justify-content-center">
                <Col sm={12} md={4} lg={8}>
                  <FormGroup className="mb-3">
                    <Form.Label>Current Course Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="existingCourse"
                      readOnly
                      {...formik.getFieldProps("existingCourse")}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Form.Label>New Course Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="newCourseName"
                      {...formik.getFieldProps("newCourseName")}
                    />
                    {formik.touched.newCourseName && formik.errors.newCourseName && (
                      <div style={{ color: "red" }}>{formik.errors.newCourseName}</div>
                    )}
                  </FormGroup>

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

                  {/* Render semester ebook + paper fields */}
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
                        Update Course
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        variant="secondary"
                        className="my-3 w-100"
                        onClick={() => {
                          formik.resetForm();
                          setSemCount(0);
                        }}
                      >
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};
