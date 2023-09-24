import React, { useState } from "react";
import { Table, Image } from "react-bootstrap";
//data&time
import moment from "moment";
// filter
import Filter from "../common/filter/Filter";
import SearchBar from "../common/serachbar/SearchBar";

interface FilterProps {
  filterYear?: string;
  setFilterYear?: string;
}


export const TotalBalance = () => {
  const data = [
    {
      withdrow: "10,000",
      date: "2023-09-13 14:56:00",
    },
    {
      withdrow: "145,000",
      date: "2023-09-13 12:56:00",
    },
    {
      withdrow: "15,000",
      date: "2023-09-13 13:56:00",
    },
  ];

  return (
    <div>
      <h6>Transition History</h6>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Withdraw Amount</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>$87,689</td>
              <td>{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export const CourseTransitionHistory: React.FC<FilterProps> = ({
  filterYear,
  setFilterYear,
}) => {
  return (
    <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th colSpan={2}>Buyer Name/Image</th>
          <th>Sailed Plan Name</th>
          <th>Category Name</th>
          <th>Date/Time</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Image
              src={require("../../assets/images/usericon.png")}
              alt="Buyer"
              width={50}
            />
          </td>
          <td>St. Mary H.S. School</td>
          <td>Silver Plan</td>
          <td>@Leadership</td>
          <td>20-03-2023 12:00 Am</td>
          <td>@$10,000</td>
        </tr>
      </tbody>
    </Table>
  );
};
export const MostSellingPlan = () => {
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>Test Name :</td>
            <td>Total Purchased:</td>
            <td>Total Earning : </td>
          </tr>
          <tr>
            <td>Platinum Plan </td>
            <td>
              <b>100k+</b>
            </td>
            <td>
              <b>$73,828,790</b>
            </td>
          </tr>
          <tr>
            <td>Platinum Plan </td>
            <td>
              <b>100k+</b>
            </td>
            <td>
              <b>$73,828,790</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export const OverallSelling = () => {
  return (
    <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th>Test Name</th>
          <th>Total sell</th>
          <th>Total Earning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>

        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const TableContainer = () => {
  // State for filtering logic
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  // const [filterYear, setFilterYear] = useState(itemList);//in the usestate keep the res of getapi

  return (
    <div>
      {/* <Filter filterYear={filterYear} setFilterYear={setFilterYear} /> */}
      <TotalBalance />
      {/* <CourseTransitionHistory filterYear={filterYear}/> */}
      <MostSellingPlan />
      <OverallSelling />
    </div>
  );
};
