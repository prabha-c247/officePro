import React,{useState} from "react";
import { Modal, Button, Container, Card ,Form as BootstrapForm,} from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { PasswordSecuritySchema } from "../../../helper/formValidation";
import axios from "axios";

interface ModalProps {
  openModal: boolean;
  Hide: () => void;
}

const PasswordSecurity: React.FC<ModalProps> = ({ openModal, Hide }) => {
  const [success, setSuccess] = useState<boolean>(false); 
  const apiUrl = process.env.REACT_APP_BASE_URL

  const handleSuccessClose = () => {
    setSuccess(false); // Close the success message
  };
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  return (
    <Modal show={openModal} onHide={Hide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Password&Security</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Card>
            <Card.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={PasswordSecuritySchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const response = await axios.put(
                      `${apiUrl}/setting/change-password`,
                      {
                        currentPassword: values.currentPassword,
                        newPassword: values.newPassword,
                      }
                    );

                    // Check the response status and handle accordingly
                    if (response.status === 200) {
                      console.log("Password updated successfully!");
                    } else {
                      console.error("Password update failed.");
                    }
                  } catch (error) {
                    console.error("An error occurred while updating the password:", error);
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting, isValid }) => (
                  <FormikForm>
                    <BootstrapForm.Group>
                      <BootstrapForm.Label htmlFor="currentPassword" className="me-5">Current Password:</BootstrapForm.Label>
                      <Field
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                      />
                      <ErrorMessage
                        name="currentPassword"
                        component="div"
                        className="alert alert-danger mt-2"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <BootstrapForm.Label htmlFor="newPassword" className="me-5">New Password:</BootstrapForm.Label>
                      <Field
                        type="password"
                        id="newPassword"
                        name="newPassword"
                      />
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="alert alert-danger mt-2"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <BootstrapForm.Label htmlFor="confirmNewPassword" className="me-2">
                        Confirm New Password:
                      </BootstrapForm.Label>
                      <Field
                        type="password"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                      />
                      <ErrorMessage
                        name="confirmNewPassword"
                        component="div"
                        className="alert alert-danger mt-2"
                      />
                    </BootstrapForm.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-3"
                      disabled={isSubmitting || !isValid}
                    >
                      Change Password
                    </Button>
                  </FormikForm>
                )}
              </Formik>  
              {success && ( // Display success message conditionally
                <div className="alert alert-success mt-2" role="alert">
                  Password changed successfully!
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={handleSuccessClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                 )}         
            </Card.Body>
          </Card>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PasswordSecurity;
