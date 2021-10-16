import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Google from "../../../images/google.png";
import "./SignUp.css";

const SignUp = () => {
  const { signInUsingGoogle } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="text-center container centered my-5 signUp">
        <form
          className="formStyle container p-5"
          action=""
          onSubmit={handleSignup}
        >
          <h3 className="pb-4">Create an account</h3>
          <input
            name="name"
            className="form-control"
            type="text"
            onBlur=""
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            name="email"
            className="form-control"
            onBlur=""
            placeholder="User Email "
            required
          />
          <br />
          <input
            type="password"
            id="password"
            className="form-control"
            onBlur=""
            name="password"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            type="password"
            id="confirm_password"
            name="conformPassword"
            className="form-control"
            onBlur=""
            placeholder="Conform Password"
          />
          <br />
          <input
            style={{ background: "#2053C9", color: "#fff" }}
            type="submit"
            className="form-control"
            value="Create an account"
          />
          <p>
            {" "}
            Already have an account ?{" "}
            <Link style={{ color: "red" }} to="/login">
              {" "}
              Login{" "}
            </Link>{" "}
          </p>

          <p style={{ color: "red" }}>error</p>
        </form>
        <button
          className="google-button centered rounded-pill"
          onClick={signInUsingGoogle}
        >
          {" "}
          <img src={Google} alt="google" /> Continue with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
