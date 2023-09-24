import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
//redux
import { useSelector,useDispatch  } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { editSchoolAsync  } from "../../../redux/reducers/schoolReducer";
//types
import { EditSchoolTypes } from "../../../helper/Types";
import Sidebar from "../../../components/sidebar/Sidebar";
//validation
// import { Formik, Field } from "formik";

interface EditSchoolProps {
  schoolData?: EditSchoolTypes | null;
}

const EditSchool: React.FC<EditSchoolProps> = ({ schoolData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useSelector(
    (state: RootState) => state.school.schools
  ) as EditSchoolTypes[];

  const [formData, setFormData] = useState<EditSchoolTypes>({
    ...(schoolData || {
      id:null,
      schoolLogo: "",
      schoolName: "",
      affiliation: "",
      schoolMobileNumber: "",
      principalName: "",
      schoolType: "",
      identificationNumber: "",
      schoolMailId: "",
      principalContactEmail: "",
      schoolAddress: "",
      schoolCity: "",
      schoolPinCode: "",
    }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {   
    dispatch(editSchoolAsync({ id: schoolData?.id || 0, inputData: formData }) as never);
    navigate(-1);
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
                <Col sm={2}>
                  <div>
                    <img
                      src={schoolData?.schoolLogo}
                      alt="school logo"
                      className="img-fluid school-logo"
                    />
                  </div>
                </Col>
                <Col sm={10}>
                  <Form>
                    <Row>
                      <Col sm={6}>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Name:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.schoolName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Affiliation:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.affiliation}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Mobile Number:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.schoolMobileNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            Principal Name:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.principalName}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Type:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.schoolType}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Identification Number:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.identificationNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            School Mail Id:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.schoolMailId}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label column sm="3">
                            Principal Contact Information:
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="text"
                              value={formData.principalContactEmail}
                              onChange={handleChange}
                            />
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Row className="mb-3">
                        <Form.Label htmlFor="schoolAddress">Address</Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            value={formData.schoolAddress}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            value={formData.schoolCity}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            value={formData.schoolPinCode}
                            onChange={handleChange}
                          />
                        </Col>
                      </Row>
                    </Row>
                    <Button variant="primary" onClick={handleSubmit}>
                      Save Changes
                    </Button>
                  </Form>
                </Col>
              </Row>
              <Row className="m-4">
                <Col className="d-flex mt-5 justify-content-center">
                  <Button
                    onClick={() => {
                      navigate(-1);
                    }}
                    variant="secondary"
                  >
                    Back
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditSchool;
