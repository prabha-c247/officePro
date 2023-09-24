import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
  Figure,
} from "react-bootstrap";
//redux
import { useDispatch,useSelector } from "react-redux";
//reducer
import { addSchoolAsync } from "../../../redux/reducers/schoolReducer";
//Formik validation
import { useFormik, Form as FormikForm } from "formik";
//validation
import { validateSchema } from "../../../helper/formValidation";
//css
import styles from "./AddSchool.module.scss";
import SchoolNavbar from "../school-navbar/SchoolNavbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { RootState } from "../../../redux/store/rootReducer";

const AddSchool = () => {
  const schools = useSelector((state:RootState) => state.school);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    id: 0,
    schoolLogo: "",
    schoolName: "",
    schoolType: "",
    affiliation: "",
    identificationNumber: "",
    schoolMobileNumber: "",
    schoolMailId: "",
    principalName: "",
    principalContactEmail: "",
    schoolAddress: "",
    schoolCity: "",
    schoolPinCode: "",
    userName: "",
    createPassword: "",
    confirmPassword: "",
    termsCondition: true,
  });
  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validateSchema, // Use the validation schema you defined
    onSubmit: (values, { setSubmitting }) => {    
      dispatch(addSchoolAsync(values) as never);
      setSubmitting(false);
      console.log("school created succefully!", values);
    },
  });

  const formReset = () => {
    setFormValues({
      id: 0,
      schoolLogo: "",
      schoolName: "",
      schoolType: "",
      affiliation: "",
      identificationNumber: "",
      schoolMobileNumber: "",
      schoolMailId: "",
      principalName: "",
      principalContactEmail: "",
      schoolAddress: "",
      schoolCity: "",
      schoolPinCode: "",
      userName: "",
      createPassword: "",
      confirmPassword: "",
      termsCondition: true,
    });
  };


  

  return (
    <Container fluid className="main position-relative">
      <Row>
        <Col sm={2} bg="light" className="d-none d-md-block col-auto">
          <Sidebar />
        </Col>
        <Col sm={10} id="content" bg="dark" className="main">
          <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
            <Container>
              <Row>
                <Col>
                  <SchoolNavbar />
                  <FormikForm className={styles.form_plan}>
                    <Row className="mb-3">
                      <h5>School Details</h5>
                      <Col sm={3}>
                        <Figure>
                          <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                          />
                          <BootstrapForm.Label htmlFor="schoolLogo">
                            School logo
                          </BootstrapForm.Label>
                          <BootstrapForm.Control
                            type="file"
                            id="schoolLogo"
                            onBlur={formik.handleBlur}
                            value={formik.values.schoolLogo}
                            onChange={formik.handleChange}
                          />
                        </Figure>
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={6}>
                            <BootstrapForm.Label htmlFor="schoolName">
                              School Name
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="text"
                              id="schoolName"
                              placeholder="St. Mary H.S. School"
                              value={formik.values.schoolName}
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                            />
                            {formik.touched.schoolName &&
                              formik.errors.schoolName && (
                                <div className="text-danger">
                                  {formik.errors.schoolName}
                                </div>
                              )}
                          </Col>
                          <Col sm={6}>
                            <BootstrapForm.Label htmlFor="schoolType">
                              School Type
                            </BootstrapForm.Label>
                            <BootstrapForm.Select
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              id="schoolType"
                            >
                              <option>Government</option>
                              <option>Private</option>
                            </BootstrapForm.Select>
                            {formik.touched.schoolType &&
                              formik.errors.schoolType && (
                                <div className="text-danger">
                                  {formik.errors.schoolType}
                                </div>
                              )}
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="affiliation">
                              School Affiliation
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="text"
                              placeholder="Affiliation with educational boards of bodies"
                              id="affiliation"
                              value={formik.values.affiliation}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="identificationNumber">
                              School Affiliation
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="number"
                              placeholder="01234567890"
                              id="identificationNumber"
                              value={formik.values.identificationNumber}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="schoolMobileNumber">
                              School Mobile Number
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="number"
                              placeholder="+91-1234567890"
                              id="schoolMobileNumber"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.schoolMobileNumber}
                            />
                            {formik.touched.schoolMailId &&
                              formik.errors.schoolMobileNumber && (
                                <div className="text-danger">
                                  {formik.errors.schoolMobileNumber}
                                </div>
                              )}
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="schoolMailId">
                              School Mail Id
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="mail"
                              placeholder="Schoolmailid@gmail.com
                      +"
                              id="schoolMailId"
                              value={formik.values.schoolMailId}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.schoolMailId &&
                              formik.errors.schoolMailId && (
                                <div className="text-danger">
                                  {formik.errors.schoolMailId}
                                </div>
                              )}
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="principalName">
                              Principal Name
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="text"
                              placeholder="School Principal Name"
                              id="principalName"
                              value={formik.values.principalName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </Col>
                          <Col sm={6} className="mt-4">
                            <BootstrapForm.Label htmlFor="principalContactEmail">
                              Principal Contact Information
                            </BootstrapForm.Label>
                            <BootstrapForm.Control
                              type="mail"
                              placeholder="Principalmailid@gmail.com"
                              id="principalContactEmail"
                              value={formik.values.principalContactEmail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.principalContactEmail &&
                              formik.errors.principalContactEmail && (
                                <div className="text-danger">
                                  {formik.errors.principalContactEmail}
                                </div>
                              )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <BootstrapForm.Label htmlFor="schoolAddress">
                        Address
                      </BootstrapForm.Label>
                      <Col sm={4}>
                        <BootstrapForm.Control
                          type="text"
                          value={formik.values.schoolAddress}
                          placeholder="Student Address"
                          id="schoolAddress"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Col>
                      <Col sm={4}>
                        <BootstrapForm.Control
                          type="text"
                          value={formik.values.schoolCity}
                          placeholder="City/Village"
                          id="schoolCity"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Col>
                      <Col sm={4}>
                        <BootstrapForm.Control
                          type="text"
                          value={formik.values.schoolPinCode}
                          placeholder="Pin Code"
                          id="schoolPinCode"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <h5>Security & Password</h5>
                      <Col sm={6}>
                        <BootstrapForm.Label htmlFor="userName">
                          Username
                        </BootstrapForm.Label>
                        <BootstrapForm.Control
                          type="text"
                          placeholder="@School.ID123"
                          id="userName"
                          value={formik.values.userName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </Col>
                      <Col sm={6}>
                        <BootstrapForm.Label htmlFor="createPassword">
                          Create Password
                        </BootstrapForm.Label>
                        <BootstrapForm.Control
                          type="password"
                          placeholder="Unique Password"
                          id="createPassword"
                          onBlur={formik.handleBlur}
                          value={formik.values.createPassword}
                          onChange={formik.handleChange}
                        />
                      </Col>
                      <Col sm={6}>
                        <div className="mt-2">
                          <BootstrapForm.Label htmlFor="confirmPassword">
                            Confirm Password
                          </BootstrapForm.Label>
                          <BootstrapForm.Control
                            type="password"
                            placeholder="Re enter Password"
                            id="confirmPassword"
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3 ">
                      <Col className="d-flex justify-content-end">
                        <BootstrapForm.Group>
                          <BootstrapForm.Check
                            type="checkbox"
                            id="termsCondition"
                            label="Terms and Conditions"
                            checked={formik.values.termsCondition}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </BootstrapForm.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col className="d-flex justify-content-end">
                        <Button
                          variant="primary"
                          className={styles.submit_btn}
                          style={{ borderRadius: "60px" }}
                        >
                          Submit
                        </Button>
                        {/* <Button variant="primary" className={styles.submit_btn} onClick={handleReset}>
                  reset me
                </Button> */}
                        <input
                          type="reset"
                          value="Clear/Reset"
                          className={styles.clear_btn}
                          onClick={formReset}
                        />
                      </Col>
                    </Row>
                  </FormikForm>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchool;
