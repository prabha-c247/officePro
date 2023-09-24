import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { School } from "../../../helper/Types";

interface ModalProps {
  modalOpen: boolean;
  Hide: () => void;
  schoolData: School | null;
}

const ViewSchoolModal: React.FC<ModalProps> = ({ modalOpen, Hide,schoolData  }) => {
  return (
    <Modal show={modalOpen} onHide={Hide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>View School</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={2}>
              <div>
                <img
                  src={schoolData?.schoolLogo}
                  alt="school logo"
                  className="img-fluid school-logo "
                />
              </div>
            </Col>
            <Col sm={5}>
              <Row className="text-truncate">
                <p>
                  <strong>School Name: </strong>{schoolData?.schoolName}
                </p>
              </Row>
              <Row >
                <p>
                  <strong>School Affiliation: </strong>138GB
                </p>
              </Row>
              <Row>
                <p>
                  <strong>School Mobile Number: </strong>89899898989
                </p>
              </Row>
              <Row>
                <p>
                  <strong> Principle Name:</strong> Mr. Rajeev Mishra
                </p>
              </Row>
            </Col>
            <Col sm={5} >
              <Row>
                <p>
                  <strong>School Type: </strong>Govt
                </p>
              </Row>
              <Row className="text-truncate">
                <p>                
                  <strong>School Identification Number:</strong>121212123212
                </p>
              </Row>
              <Row>
                <p>
                  <strong>School Mail Id: </strong>gov.p@gov.com
                </p>
              </Row>
              <Row>
                <p>
                  <strong> Principle Name:</strong> Mr. Rajeev Mishra
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <p>
              <strong>Address:</strong> Nipania Indore MP
            </p>
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
export default ViewSchoolModal;
