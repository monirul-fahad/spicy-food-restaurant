import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleBlur = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    console.log("login complete");
    e.preventDefault();
  };
  return (
    <div>
      <div className="text-center container centered my-5 signIn">
        <form
          className="formStyle container p-5"
          action=""
          onSubmit={handleSubmit}
        >
          <h3 className="pb-4">Create an account</h3>
          <input
            type="text"
            name="email"
            className="form-control"
            onBlur={handleBlur}
            placeholder="Your Email "
            required
          />
          <br />
          <input
            type="password"
            id="password"
            className="form-control"
            onBlur={handleBlur}
            name="password"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            style={{ background: "#2053C9", color: "#fff" }}
            type="submit"
            className="form-control"
            value="Login"
          />
          <p>
            Don’t have an account?{" "}
            <Link className="text-danger" to="/signup">
              Create an account
            </Link>{" "}
          </p>
          <p style={{ color: "red" }}>Error</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
