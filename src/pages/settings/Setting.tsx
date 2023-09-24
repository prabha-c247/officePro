import React, { useState,useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { TbLockPlus } from "react-icons/tb";
import PersonalDetails from "../../components/common/modal/PersonalDetails";
import PasswordSecurity from "../../components/common/modal/PasswordSecurity";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Setting = () => {
  const [openPersonalDetails, setOpenPersonalDetails] = useState(false);
  const [openPasswordSecurity, setOpenPasswordSecurity] = useState(false);
  // ModalOpen
  const OpenModalOne = () => setOpenPersonalDetails(true);
  const HideModalOne = () => setOpenPersonalDetails(false);
  const OpenModalTwo = () => setOpenPasswordSecurity(true);
  const HideModalTwo = () => setOpenPasswordSecurity(false);

  // const [userData, setUserData] = useState({
  //   name:"",
  //   profileImage:"",
  //   contactNumber:""
  // });
  // const apiUrl = process.env.REACT_APP_BASE_URL
  // const token = localStorage.getItem('token');
  // useEffect(() => {   
  //   if (token) {
  //     // Create an Axios instance with default headers
  //     const axiosInstance = axios.create({
  //       baseURL: apiUrl,
  //       headers: {
  //         'Authorization': `Bearer ${token.substring(1, token.length - 1)}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     // Make a GET request with the token in the header
  //     axiosInstance.get(`${apiUrl}/setting/650be9dcbcd7e6112977d65e`)
  //       .then((response) => {
  //         console.log(response.data.data, "personal data in setting");
  //         const { name, profileImage, contactNumber } = response.data.data;
  //          setUserData(
  //          { name,
  //           profileImage,
  //           contactNumber}
  //          )      
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching personal data setting:", error);
  //       });
  //   } else {
  //     // Handle the case where 'token' is null (not found in local storage)
  //     console.error("Token not found in local storage");
  //   }
  // }, [token]);

  return (
    // <div className={`${styles.settingDiv} flex-column`}>
    <Container fluid className="main position-relative">
      <Row>
        <Col sm={2} bg="light" className="d-none d-md-block col-auto">
        <Sidebar/>
        </Col>
        <Col sm={10} id="content" bg="dark" className="main">
          <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
            <div className="p-2" style={{ height: "100vh" }}>
              <h4>Settings</h4>
              <Card className="p-1 mb-3">
                <button
                  className="d-flex text-center justify-content-between border-0"
                  onClick={OpenModalOne}
                >
                  <div className="d-flex text-center justify-content-between">
                    <button className="p-1 lock-btn me-3 mb-1">
                      <TbLockPlus size={30} />
                    </button>
                    <h4 className="d-flex align-items-end">Personal Details</h4>
                  </div>
                  <button className="bg-transparent border-0">
                    <BsArrowRight size={30} />
                  </button>
                </button>
              </Card>
              <PersonalDetails
                modalOpen={openPersonalDetails}
                Hide={HideModalOne}                
              />
              <Card className="p-1 mb-3">
                <div className="d-flex text-center justify-content-between">
                  <div className="d-flex text-center justify-content-between">
                    <button className="p-1 lock-btn me-3 mb-1">
                      <TbLockPlus size={30} />
                    </button>
                    <h4 className="d-flex align-items-end">
                      Create Mail for Schools
                    </h4>
                  </div>
                  <button className="bg-transparent border-0">
                    <BsArrowRight size={30} />
                  </button>
                </div>
              </Card>
              <Card className="p-1 mb-3">
                <button
                  className="d-flex text-center justify-content-between border-0"
                  onClick={OpenModalTwo}
                >
                  <div className="d-flex text-center justify-content-between">
                    <button className="p-1 lock-btn me-3 mb-1">
                      <TbLockPlus size={30} />
                    </button>
                    <h4 className="d-flex align-items-end">
                      Password and security
                    </h4>
                  </div>
                  <button className="bg-transparent border-0">
                    <BsArrowRight size={30} />
                  </button>
                </button>
              </Card>
              <PasswordSecurity
                openModal={openPasswordSecurity}
                Hide={HideModalTwo}
              />
              <Card className="p-1">
                <div className="d-flex text-center justify-content-between">
                  <div className="d-flex text-center justify-content-between">
                    <button className="p-1 lock-btn me-3 mb-1">
                      <TbLockPlus size={30} />
                    </button>
                    <h4 className="d-flex align-items-end">
                      Terms & Conditions
                    </h4>
                  </div>
                  <button className="bg-transparent border-0">
                    <BsArrowRight size={30} />
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
