import React ,{useEffect} from "react";
import { Modal,  Container, Row, } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../../redux/store/store";
import {getUserData} from "../../../redux/reducers/settingReducer";

interface ModalProps {
  modalOpen: boolean;
  Hide: () => void;  
}

const PersonalDetails: React.FC<ModalProps> = ({ modalOpen, Hide }) => { 
  const dispatch = useDispatch();
  const { profileImage, contactNumber, name, error } = useSelector(
    (state: RootState) => state.setting
  );

  useEffect(() => {
    dispatch(getUserData() as never);
  }, [dispatch]);

  const userData = useSelector((state: RootState) => state.setting);
  return (    
    <Modal show={modalOpen} onHide={Hide}>
      <Modal.Header closeButton>
        <Modal.Title>Personal Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
      <Container>
      <Row>          
          <div className="d-flex">
          <strong className="me-2">Profile image:</strong>
          <div style={{ height: "100px", width: "100px" }}>
            <img
              src={profileImage}
              className="rounded mx-auto d-block img-thumbnail"
              alt="user profile"
            />
          </div>
          </div>     
        </Row>
        <Row>
         <p> <strong>Name: </strong> <span>{name}</span></p>
        </Row>
        <Row>
          <p> <strong>Contact:</strong><span>{contactNumber}</span></p>
        </Row>
      </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PersonalDetails;
