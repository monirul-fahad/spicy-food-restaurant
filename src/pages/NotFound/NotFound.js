import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404-2.jpg";
const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={notFound} alt="" />
      <Link to="/home">
        <button
          className="btn btn-success mt-4
        "
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
