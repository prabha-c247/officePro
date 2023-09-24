import React from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { loginSchema } from "../../../helper/formValidation";
import { useSelector, useDispatch } from "react-redux"; 
import {loginUserAsync} from "../../../redux/reducers/userReducer";
import {  useNavigate } from "react-router-dom";
import { ANALYTICS } from "../../../helper/PageRoute";
import {RootState} from "../../../redux/store/store";
// import {login} from "../../../helper/Types";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const {errorMessage,} = useSelector((state: RootState) => state.user);
   return (
    <Container className="mw-100">
      <Row className="">
        <Col md={6} className="p-0">
          <div className="text-center w-100 h-100 bg-light">
            <img            
              src={require("../../../assets/images/login.png")}
              alt="Login User"
              className="img-fluid"
               style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
        <Col md={6} className="p-0">
          <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center p-5" style={{minHeight:"100vh"}}>
          <Formik          
            initialValues ={{ email:"", password:""}} 
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {           
              try {
                // Dispatch the login action and provide the credentials
                await dispatch(loginUserAsync(values) as any); 
                // await axios.post("http://192.168.1.240:5000/login",values)
                // .then((res)=>{
                //   console.log(res,"48");                  
                //     localStorage.setItem("token", res.data.token)
                //     const success = res.data.message
                //     navigate(ANALYTICS);              
                // })
                // .catch((err)=>{
                //   console.log(err,"51")
                // })                
                navigate(ANALYTICS);  
              } catch (error) {
                // Handle errors (e.g., show error messages)
                console.error("Login failed:", error);
              } finally {
                setSubmitting(false);
              }
             
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <FormikForm className="w-100">
                <h1>Log In</h1>
                <div className="line" />

                <BootstrapForm.Group
                  controlId="formBasicEmail"
                  className="mt-4"
                >
                  <Field
                    type="text"
                    name="email"
                    placeholder="email/phone"
                    autoComplete="username"
                    className={`form-control p-3 ${
                      touched.email && errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group
                  controlId="formBasicPassword"
                  className="mt-4"
                >
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className={`form-control p-3 ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <Button                  
                  variant="primary"
                  type="submit"
                  className="mt-4 p-3 w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                {
                  errorMessage&&(
                    <div className="alert alert-danger mt-2" role="alert">{errorMessage}</div>
                  )
                }
              </FormikForm>
            )}
          </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
