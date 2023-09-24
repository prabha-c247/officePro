import axios from "axios";
import { login,School,Plan } from "../helper/Types";
const apiUrl = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

const headers = {
  'Authorization': token ? `Bearer ${token.substring(1, token.length - 1)}` : '',
  'Content-Type': 'application/json',
};

//schools
export const AddSchool = (schoolData: Partial<School>) => {
  return axios.post(`${apiUrl}/school/add-school`, schoolData, { headers });
};

export const EditSchool = (id: number, schoolData: Partial<School>) => {
  return axios.put(`${apiUrl}/school/edit-school/${id}`, schoolData, { headers });
};

export const GetAllSchools = () => {
  return axios.get(`${apiUrl}/school/school-list`, { headers });
};

//Plans
export const CreatePlan = (planData: Partial<Plan>) => {
  return axios.post(`${apiUrl}/plan/add-plan`, planData, { headers });
};

export const ViewPlan = (id: number, planData: Partial<Plan>) => {
  return axios.put(`${apiUrl}/plan/edit-plan/${id}`, planData, { headers });
};

export const GetAllPlans = () => {
  return axios.get(`${apiUrl}/plan-history`, { headers });
};

//setting
export const getSettingPersonalDetails = () => {
  return axios.get(`${apiUrl}/setting/personal-details`, { headers });
};

export const passwordSecurity =()=> {
  return axios.put(`${apiUrl}/setting/personal-details`, { headers });
}
// login
export const LoginUser = (url: string, credentials: login) => {
  return axios.post(url, credentials);
};




export const TotalIncome = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const TotalBalance = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const CourseTransitionHistory = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const MostSellingPlan = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const OverallSellingPlan = () => {
  axios
    .get("d")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};




