// import React, { ChangeEvent } from "react";
import { Form, FormControl, Button,InputGroup } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';
//css
import styles from "./SearchBar.module.scss";

// interface SearchBarProps {
//   handleSearch: (query: string) => void;
// }
const SearchBar =()=>{
// const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   handleSearch(event.target.value);
  // };

  return (
    // <Form >
    //   <div className="form-inline rounded">
    //   <InputGroup className="rounded">
    //     <FormControl
    //       type="text"
    //       placeholder="Search"
    //       className="mr-sm-2"
    //       // value={searchValue}
    //       // onChange={handleInputChange}
    //     />
    //       <InputGroup.Append>
    //     <Button type="submit" variant="outline-success">
    //       <BsSearch />
    //     </Button>
    //   </InputGroup.Append>       
    //     </InputGroup>
    //   </div>
    // </Form>
    // <form onSubmit={handleSubmit}>
    
    <InputGroup >
    <div className={styles.searchBar}>
    <input
        type="text"
        placeholder="Search"
        className="rounded-pill"
        // value={searchValue}
        // onChange={handleInputChange}
      />
  
      <Button type="submit"  className="rounded-pill" variant="outline-success">
        <BsSearch />
      </Button>      
      </div>
  </InputGroup>
  );
};

export default SearchBar;
