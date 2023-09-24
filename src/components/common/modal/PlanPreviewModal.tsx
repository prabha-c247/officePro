import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

interface ModalProps {
  modalOpen: boolean;
  Hide: () => void;
}

const PlanPreviewModal: React.FC<ModalProps> = ({ modalOpen, Hide }) => {
  return (
    <Modal show={modalOpen} onHide={Hide}>
      <Modal.Header closeButton>
        <Modal.Title>Plan Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="m-4 ">
            <Col md={6} className="text">
              <p>                
                <strong>Plan Name: </strong>GoldPlan
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Pricing: </strong>$15,000
              </p>
            </Col>
          </Row>
          <Row className="m-4">
            <Col md={6}>
              <p>
                <strong>Plan Duration: </strong>6 months
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Plan Usage Limits: </strong>138GB
              </p>
            </Col>
          </Row>
          <Row className="m-4">
            <Col>
              <strong>Features:</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, ea aspernatur. Mollitia quidem at quia omnis, rerum
                hic recusandae.
              </p>
            </Col>
          </Row>
          <Row className="m-4">
            <Col md={6}>
              <p>
                <strong>Trial Period Limit: </strong>1 MONTH
              </p>
            </Col>
            <Col md={6}>
              <p>                
                <strong>Billing Cycle: </strong>Monthly
              </p>
            </Col>
          </Row>
          <Row className="m-4">
            <Col md={6}>
              <p>
                <strong> Discount/Coupon Codes:</strong> P0UU105
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Plan Visibility:</strong>Active
              </p>
            </Col>
          </Row>
          <Row className="m-4">
            <Col md={6}>
              <p>
                <strong>Plan Description:</strong>plan Description......
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Payment Gateway Option:</strong>Credit Card
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={Hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanPreviewModal;
