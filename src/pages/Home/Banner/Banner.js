import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bg-img ">
      <h1>Best Food Waiting For Your Belly </h1>
      <InputGroup className="mb-3 w-25 mt-4">
        <FormControl
          className="src-btn px-4 py-2 me-1"
          placeholder="Search Food Items"
          aria-describedby="basic-addon2"
        />
        <Button variant="danger src-btn px-4 py-2 ms-1" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default Banner;
