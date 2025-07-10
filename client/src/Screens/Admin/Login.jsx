import { Container, Row, Col, Button, FormGroup,Form } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import * as yup from "yup"
const validateSchema=yup.object().shape({

    email: yup.string()
            .required("E-Mail cannot be empty")
                    .matches(/^\S+@\S+\.\S+$/, "Enter a valid E-Mail"),

    password:yup.string()
                .required("password cannot be empty")
                .matches(/^[a-zA-Z0-9]{5,10}$/,"Password should conatin 5-10 characters and alphanumeric values only"),
    confirmPassword:yup.string()
                        .required("confirm-password cannot be empty")
                        .matches(yup.ref("password"),"Password is not matchnig")
})
export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        
      
        validationSchema: validateSchema
    })
        //  console.log(formik.errors.username)
    return (
        <>
        <Container>
            <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded">
            <Row className="d-flex justify-content-center  m-5"  sm={1} md={2} lg={2} >
                <Col md={4} >
                <h1>Login As Admin</h1>
                    <FormGroup>
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control type="email"
                            placeholder="enter E-Mail"
                            name="email"
                            {...formik.getFieldProps("email")} />
                    </FormGroup>
                     {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="enter Password"
                            name="password"
                            {...formik.getFieldProps("password")} />
                             {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
                    </FormGroup>
                    <Button type="submit" className="my-5">Login</Button>
                </Col>
            </Row>
            </Form>
            </Container>
        </>
    )
}