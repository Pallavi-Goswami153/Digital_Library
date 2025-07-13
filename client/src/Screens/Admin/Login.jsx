import { Container, Row, Col, Button, FormGroup, Form } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import {jwtDecode} from "jwt-decode";
import * as yup from "yup"
import axios from "axios"
import { useEffect } from "react";
import { toast } from "react-hot-toast"
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const validateSchema = yup.object().shape({

    email: yup.string()
        .required("E-Mail cannot be empty")
        .matches(/^\S+@\S+\.\S+$/, "Enter a valid E-Mail"),

    password: yup.string()
        .required("password cannot be empty")
        .matches(/^[a-zA-Z0-9]{5,10}$/, "Password should conatin 5-10 characters and alphanumeric values only"),
    // confirmPassword: yup.string()
    //     .required("confirm-password cannot be empty")
    //     .matches(yup.ref("password"), "Password is not matchnig")
})
export const Login = () => {
    const navigate = useNavigate();
    // const handlenavigate = () => {
    //     navigate("/admin/home")
    // }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                const response = await axios.post("http://localhost:4000/admin/login", values);
                console.log(response.data)
                // <Toaster position="top-right" />
                const token = response.data.token
                toast.success(response.data.msg, { position: "top-right" })
                localStorage.setItem('token', response.data.token)
               navigate("/admin/dashboard")
                const { exp } = jwtDecode(token);
                const timeout = exp * 1000 - Date.now();
                setTimeout(() => {
                    localStorage.removeItem('token');
                    navigate("/admin/login")
                }, timeout);

            }
            catch (err) {
                console.log(err)
            }
        },
    })
    useEffect(() => {

    })
    //  console.log(formik.errors.username)
    return (
        <>
            {/* {console.log(formik.values)} */}
            {/* {console.log(formik.values)} */}
            <Container className="p-4">
                <Form onSubmit={formik.handleSubmit} className="p-5 shadow-lg border rounded m-4">
                    <Row className="d-flex justify-content-center  m-5" sm={1} md={2} lg={2} >
                        <Col md={4} >
                            <h1>Login As Admin</h1>
                            <FormGroup>
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="email"
                                    placeholder="enter E-Mail"
                                    isInvalid={!!formik.errors.email && formik.touched.email}
                                    {...formik.getFieldProps("email")} />
                            </FormGroup>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.email}
                            </Form.Control.Feedback>
                            <FormGroup>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="enter Password"
                                    isInvalid={!!formik.errors.password && formik.touched.password}
                                    {...formik.getFieldProps("password")} />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>

                            </FormGroup>
                            <Button type="submit" className="my-5">Login</Button>
                            <Toaster position="top-right" />
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}