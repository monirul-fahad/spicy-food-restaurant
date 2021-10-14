import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="my-4 container">
      <h2 className="my-3">Food Items</h2>
      <div className="foods-container">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
