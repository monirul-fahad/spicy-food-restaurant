import React from "react";
import service1 from "../../../images/Image/adult-blur-blurred-background-687824.png";
import service2 from "../../../images/Image/chef-cook-food-33614.png";
import service3 from "../../../images/Image/architecture-building-city-2047397.png";
import Service from "../Service/Service";
const services = [
  {
    id: 1,
    img: service1,
    name: "Fast Delivery",
    description:
      "Full service restaurant means a restaurant at which waiters and waitresses deliver food and drink offered from.",
  },
  {
    id: 2,
    img: service2,
    name: "Good Auto Responder",
    description:
      "Full service restaurant means a restaurant at which waiters and waitresses deliver food and drink offered from.",
  },
  {
    id: 3,
    img: service3,
    name: "Home Delivery",
    description:
      "Full service restaurant means a restaurant at which waiters and waitresses deliver food and drink offered from.",
  },
];

const Services = () => {
  return (
    <div className="container my-5">
      <div className="text-start ps-4">
        <h2>Why you choose us</h2>
        <p className="fw-bold py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Aliquam
          error dicta quidem animi accusantium qui reiciendis earum?
        </p>
      </div>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
