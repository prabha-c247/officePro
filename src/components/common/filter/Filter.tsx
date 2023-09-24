import React,{useState} from "react";
import { Dropdown } from "react-bootstrap";

const Filter = () => {

  const [dropdownId] = useState(`dropdown-${Math.random().toString(36).substring(7)}`);
  return (
    <Dropdown>
      <Dropdown.Toggle         
        variant="secondary"
        id="dropdown-basic"
        // id={dropdownId} // Use the dynamically generated ID
        className="rounded-pill"
      >
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href={`#${dropdownId}/action-1`}>year</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
