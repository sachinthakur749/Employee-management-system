import { Dashboard } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    console.log(formErrors);

    if (formValues.username && formValues.email && formValues.password) {
      navigate("dashboard");
    } else {
      alert("please provide valid input");
    }
  };



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
      // navigate('dashboard')
    }

    return errors;
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <div className="logo">
              <img
                src="https://noveltytechnology.com/wp-content/themes/novelty/img/logo.svg"
                alt=""
              />
            </div>

            <div className="fieldContainer">
              <div className="field">
                <label htmlFor="">Username</label>
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p>{formErrors.username}</p>
              </div>

              <div className="field">
                <label htmlFor="">Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </div>

              <div className="field">
                <label htmlFor="">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p>{formErrors.password}</p>
              </div>

              <div className=" btn">
                <input className="btn" type="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
