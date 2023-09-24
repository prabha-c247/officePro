import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//css
import styles from "./CreatePlan.module.scss";
//common
import DynamicFormInput from "../../../components/common/input/DynamicInput";
//modal
import PlanPreviewModal from "../../../components/common/modal/PlanPreviewModal";
import PlanNavbar from "../PlanNavbar";
import Sidebar from "../../../components/sidebar/Sidebar";

const CreatePlan: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    planName: "",
    pricing: "",
    planDuration: "",
    planUsageLimit: "",
    planFeatures: "",
    billingCycle: "",
    trialPeriodLimit: "",
    uniqueDiscount: "",
    planVisibility: "",
    paymentMethod: "",
  });

  const handleInputChange = (fieldName: string, value: string | number) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // ModalOpen
  const OpenModal = () => setModalOpen(true);
  const HideModal = () => setModalOpen(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <Container fluid className="main position-relative">
    <Row>          
      <Col sm={2} bg="light" className="d-none d-md-block col-auto">
        <Sidebar />
      </Col>
      <Col sm={10} id="content" bg="dark"  className="main">
        <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
        <Container>
      <Row>
        <Col>
          <PlanNavbar />
          <Form className={styles.form_plan}>
            <Row className="mb-3">
              <DynamicFormInput
                label="Plan Name"
                type="text"
                value={formData.planName}
                onChange={(value) => handleInputChange("planName", value)}
                controlId="planName"
                placeholder="Type your plan name"
              />
              <DynamicFormInput
                label="Pricing"
                type="number"
                value={formData.pricing}
                onChange={(value) => handleInputChange("pricing", value)}
                controlId="pricing"
                placeholder="$0,000"
              />
            </Row>
            <Row className="mb-3">
              <DynamicFormInput
                label="Plan Duration"
                type="text"
                value={formData.planDuration}
                onChange={(value) => handleInputChange("planDuration", value)}
                controlId="planDuration"
                placeholder="Type time limit"
              />
              <DynamicFormInput
                label="Plan Usage Limits"
                type="text"
                value={formData.planUsageLimit}
                onChange={(value) => handleInputChange("planUsageLimit", value)}
                controlId="planUsageLimit"
                placeholder="Type limits"
              />
            </Row>
            <Row className="mb-3">
              <DynamicFormInput
                label="Features"
                type="text"
                value={formData.planFeatures}
                onChange={(value) => handleInputChange("planFeatures", value)}
                controlId="planFeatures"
                placeholder="Type Plans Features"
              />
            </Row>
            <Row className="mb-3">
              <DynamicFormInput
                label="Trail Period Limit"
                type="text"
                value={formData.trialPeriodLimit}
                onChange={(value) =>
                  handleInputChange("trialPeriodLimit", value)
                }
                controlId="trialPeriodLimit"
                placeholder="Type trial limit"
              />
              <DynamicFormInput
                label="Billing Cycle"
                type="select"
                value={formData.billingCycle}
                onChange={(value) =>
                  handleInputChange("billingCycleOption", value)
                }
                controlId="billingCycleOption"
                placeholder="yearly"
                options={["yearly", "monthly"]}
              />
            </Row>
            <Row className="mb-3">
              <DynamicFormInput
                label="Discount/Coupon codes"
                type="text"
                value={formData.uniqueDiscount}
                onChange={(value) => handleInputChange("uniqueDiscount", value)}
                controlId="uniqueDiscount"
                placeholder="Type Unique Discount/Coupon Code"
              />
              <DynamicFormInput
                label="Plan Visibility"
                type="select"
                value={formData.planVisibility}
                onChange={(value) => handleInputChange("planVisibility", value)}
                controlId="planVisibility"
                options={["public", "private"]}
              />
            </Row>
            <Row className="mb-3">
              <DynamicFormInput
                label="Plan Description"
                type="text"
                value={formData.uniqueDiscount}
                onChange={(value) => handleInputChange("uniqueDiscount", value)}
                controlId="uniqueDiscount"
                placeholder="Type your plan description"
                isTextBox={true}
              />
            </Row>

            {/* payment method */}
            <Row className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              {/* Radio buttons for payment method selection */}
              <div className="d-flex">
                <Form.Check
                  className="me-3"
                  type="radio"
                  label="Credit Card"
                  name="paymentMethod"
                  id="creditCard"
                  value="Credit Card"
                  checked={formData.paymentMethod === "Credit Card"}
                  onChange={(e) =>
                    handleInputChange("paymentMethod", e.target.value)
                  }
                />
                <Form.Check
                  className="me-3"
                  type="radio"
                  label="PayPal"
                  name="paymentMethod"
                  id="payPal"
                  value="PayPal"
                  checked={formData.paymentMethod === "PayPal"}
                  onChange={(e) =>
                    handleInputChange("paymentMethod", e.target.value)
                  }
                />
                <Form.Check
                  className="me-3"
                  type="radio"
                  label="UPI"
                  name="paymentMethod"
                  id="UPI"
                  value="UPI"
                  checked={formData.paymentMethod === "UPI"}
                  onChange={(e) =>
                    handleInputChange("paymentMethod", e.target.value)
                  }
                />
                <Form.Check
                  className="me-2"
                  type="radio"
                  label="other"
                  name="paymentMethod"
                  id="other"
                  value="other"
                  checked={formData.paymentMethod === "other"}
                  onChange={(e) =>
                    handleInputChange("paymentMethod", e.target.value)
                  }
                />
              </div>
            </Row>

            {/* buttons */}
            <Row className="mb-3">
              <div className="d-flex justify-content-between">
                <Button
                  type="button"
                  variant="primary"
                  className="rounded-pill"
                  onClick={OpenModal}
                >
                  Plan Preview
                </Button>
                <PlanPreviewModal
                  modalOpen={modalOpen}
                  Hide={HideModal}
                />
                <div className="d-flex">
                  <Button
                    type="button"
                    className="plan_btn me-2 rounded-pill"
                    variant="success"
                  >
                    Create Plan
                  </Button>
                  <Button
                    type="button"
                    className="btn-rounded ms-2 rounded-pill"
                    variant="secondary"
                    onClick={() => {
                      // Clear form fields
                      // setFormData({});
                    }}
                  >
                    Clear/Reset
                  </Button>
                </div>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
        </div>
      </Col>
    </Row>
  </Container>
   
  );
};

export default CreatePlan;
