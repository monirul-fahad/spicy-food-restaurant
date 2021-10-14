import React from "react";
import "./Food.css";
const Food = (props) => {
  const { name, price, description, img } = props.food;
  return (
    <div className="food">
      <img className="" src={img} alt="" />
      <h4>{name}</h4>
      <p className="text-secondary">{description}</p>
      <h2>${price}</h2>
    </div>
  );
};

export default Food;
