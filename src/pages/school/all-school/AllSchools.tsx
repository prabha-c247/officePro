import React, { useState, useEffect } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSchoolsAsync } from "../../../redux/reducers/schoolReducer";
import { ADD_SCHOOL, EDIT_SCHOOL } from "../../../helper/PageRoute";
import Filter from "../../../components/common/filter/Filter";
import SearchBar from "../../../components/common/serachbar/SearchBar";
import ViewSchoolModal from "../../../components/common/modal/ViewSchoolModal";
import { School } from "../../../helper/Types";
import Sidebar from "../../../components/sidebar/Sidebar";
import {RootState} from "../../../redux/store/store";

const AllSchools = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schools = useSelector((state:RootState) => state.school.schools);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllSchoolsAsync() as never);
  }, [dispatch]);

  // ModalOpen
  const openModal = (school: School | null = null) => {
    setSelectedSchool(school);
    setModalOpen(true);
  };

  const hideModal = () => setModalOpen(false);

  const goToEdit = (data: School) => {
    navigate(EDIT_SCHOOL, { state: { schoolData: data } });
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
              <Row className="mb-3">
                <nav className="d-flex align-items-center justify-content-between mx-auto">
                  <h5>All School List</h5>
                  <div className="d-flex align-items-center justify-content-evenly">
                    <div className="me-3">
                      <SearchBar />
                    </div>
                    <div className="me-3">
                      <Filter />
                    </div>
                    <div>
                      <Button
                        className="rounded-pill"
                        variant="secondary"
                        onClick={() => navigate(ADD_SCHOOL)}
                      >
                        Add School <AiOutlinePlusCircle />
                      </Button>
                    </div>
                  </div>
                </nav>
              </Row>
              <Row>
                <Col>
                  <Table className="mt-2">
                    <thead>
                      <tr>
                        <th>School logo</th>
                        <th>School Name</th>
                        <th>Edit School</th>
                        <th>View School</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((data) => {
                        return (
                          <tr key={data.id} className="align-items-center">
                            <td>
                              <img
                                src={data.schoolLogo}
                                alt="school logo"
                                className="img-fluid school-logo"
                              />
                            </td>
                            <td>{data.schoolName}</td>
                            <td>
                              <Button
                                className="rounded-pill view_btn"
                                variant="primary"
                                onClick={() => {
                                  goToEdit(data);
                                }}
                              >
                                edit
                              </Button>
                            </td>
                            <td>
                              <Button
                                className="rounded-pill view_btn"
                                variant="secondary"
                                onClick={() => {
                                  openModal(data);
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                      <ViewSchoolModal
                        modalOpen={modalOpen}
                        Hide={hideModal}
                        schoolData={selectedSchool}
                      />
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllSchools;
