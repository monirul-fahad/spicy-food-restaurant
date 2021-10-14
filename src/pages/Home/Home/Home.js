import React from "react";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Foods></Foods>
      <Services></Services>
    </div>
  );
};

export default Home;
