import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div className="col-lg-4 col-sm-6 col-12 service">
      <div>
        <img className="" src={img} alt="" />
      </div>
      <div className="text-start py-3 ps-4">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
