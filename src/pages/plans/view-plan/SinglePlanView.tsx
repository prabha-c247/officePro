import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { Plan } from "../../../helper/Types";
import Sidebar from "../../../components/sidebar/Sidebar";
import styles from "./SinglePlanView.module.scss";
import { singlePlanAsync } from "../../../redux/reducers/planReducer"; // Import the action

const SinglePlanView = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the plan id from the URL
  const dispatch = useDispatch();
  const plan: Plan | undefined = useSelector((state: RootState) =>
    state.plan.Plans.find((p) => p.id === Number(id))
  );

  useEffect(() => {
    // Fetch the single plan when the component mounts
    dispatch(singlePlanAsync({ id: Number(id), inputData: {} }) as never);
  }, [dispatch, id]);

  return (
    <Container fluid className="main position-relative">
      <Row>
        <Col sm={2} bg="light" className="d-none d-md-block col-auto">
          <Sidebar />
        </Col>
        <Col sm={10} id="content" bg="dark" className="main">
          <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
            <div
              className="d-table"
              style={{ width: "100%", height: "100vh" }}
            >
              {plan && (
                <Container>
                  <Row className="m-4 ">
                    <Col md={6} className="text">
                      Plan Name: <p className={styles.customColor}>{plan.planName}</p>
                    </Col>
                    <Col md={6}>
                      Pricing: <p className={styles.customColor}>{plan.pricing}</p>
                    </Col>
                  </Row>
                  {/* Rest of the plan details */}
                  <Row className="m-4">
                    {/* Render other plan details */}
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
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SinglePlanView;
