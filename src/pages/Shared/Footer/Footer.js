import React from "react";
import "./footer.css";
import footerImg from "../../../images/logo.png";
const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container">
        <div className="footer ">
          <div>
            <img
              className="img-fluid"
              src={footerImg}
              alt="logo of footer"
              width="250"
              height="20"
            />
          </div>
          <div className="ul-style">
            <ul>
              <li>
                <a href="">About online food</a>
              </li>
              <li>
                <a href="">Read our blog</a>
              </li>
              <li>
                <a href="">Sign up to deliver</a>
              </li>
              <li>
                <a href="">Add your restaurant</a>
              </li>
            </ul>
          </div>
          <div className="ul-style">
            <ul>
              <li>
                <a href="">Ger help</a>
              </li>
              <li>
                <a href="">Read FAQs</a>
              </li>
              <li>
                <a href="">View all cities</a>
              </li>
              <li>
                <a href="">Restaurant near me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row  text-white text-start mt-5">
          <div className="col-md-8 col-12">
            Copyrights &copy; 2021 Monirul Fahad
          </div>
          <div className="col-md-4 col-12">
            <div className="d-flex justify-content-between">
              <p>Privacy & Policy</p>
              <p>Terms of Use</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
