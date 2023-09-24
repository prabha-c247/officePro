import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Image, Nav } from "react-bootstrap";
//icons
import {
  AiFillSetting,
  AiOutlineLogout,
  AiFillMail,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BiSolidSchool } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
//css
import styles from "./Sidebar.module.scss";
import {
  ANALYTICS,
  All_SCHOOL,
  HISTORY,
  LOGIN,
  SETTING,
} from "../../helper/PageRoute";
import { useSelector } from "react-redux"; 
import { RootState } from "../../redux/store/rootReducer";

// interface UserData {
//   profileImage?: string;
//   name?: string; 
//   contactNumber?:string;
// }
// interface SidebarProps { 
//   userData: UserData;
// }

// const Sidebar: React.FC<SidebarProps> = ({ userData })  => {
  const Sidebar = ()  => {
    const { profileImage, contactNumber, name, error } = useSelector(
      (state: RootState) => state.setting
    );
  const [active, setActive] = useState(1);
  const navigate= useNavigate();

  const logout=() =>{
  localStorage.removeItem("token"); 
     navigate(LOGIN);
}

  return (
    <div id={styles.sidebar}>
      {/* Section 1: User Info */}
      <div className={`${styles.userInfo} d-flex mt-3 ${styles.section}`}>
        <Image        
            // src={profileImage}
            src={require("../../assets/images/school.jpg")}
            alt="user image"
          roundedCircle
          width={50}
        />
        <h5>{name}</h5>      
      </div>

      {/* Section 2: Routes */}
      <div className={`${styles.section} mt-5`}>
        <h5>Routes</h5>

        <Nav className="nav nav-pills flex-column">
          <Link
            to={ANALYTICS}
            className={
              active === 1
                ? "active nav-item align-items-center d-flex p-1"
                : "de-active nav-item align-items-center d-flex p-1"
            }
            onClick={(e) => setActive(1)}
          >
            <AiOutlineLineChart size={30} className="me-2" />
            <div>Analytics and Finance</div>
          </Link>
          <div className="line" />
          <Link
            to={HISTORY}
            className={
              active === 2
                ? "active nav-item align-items-center d-flex p-1"
                : "de-active nav-item align-items-center d-flex p-1"
            }
            onClick={(e) => setActive(2)}
          >
            <IoIosCreate size={30} className="me-2" />
            <div>Plans</div>
          </Link>
          <div className="line" />
          <Link
            to={All_SCHOOL}
            className={
              active === 3
                ? "active nav-item align-items-center d-flex p-1"
                : "de-active nav-item align-items-center d-flex p-1"
            }
            onClick={(e) => setActive(3)}
          >
            <BiSolidSchool size={30} className="me-2" />
            <div>School</div>
          </Link>
          <div className="line" />
          <Link
            to="#"
            className={
              active === 4
                ? "active nav-item align-items-center d-flex p-1"
                : "de-active nav-item align-items-center d-flex p-1"
            }
            onClick={(e) => setActive(4)}
          >
            <AiFillMail size={30} className="me-2" />
            <div>Mail and Messages</div>
          </Link>
          <div className="mt-5 border-0">
            <h5>Settings</h5>
            <button              
              className={
                active === 5
                  ? "active nav-item align-items-center d-flex p-1 border-0"
                  : "de-active nav-item align-items-center d-flex p-1 border-0"
              }
              onClick={logout}
            >              
              <AiOutlineLogout size={30} className="me-2" />
              <div>Logout</div>
            </button>
            <Link
              to={SETTING}
              className={
                active === 6
                  ? "active nav-item align-items-center d-flex p-1 mt-2"
                  : "de-active nav-item align-items-center d-flex p-1 mt-2"
              }
              onClick={(e) => setActive(6)}
            >
              <AiFillSetting size={30} className="me-2" />
              <div>Settings</div>
            </Link>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
