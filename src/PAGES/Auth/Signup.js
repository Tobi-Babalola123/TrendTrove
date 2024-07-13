import React from "react";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import { Link } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import "./AuthPage.css";
const Signup = () => {
  return (
    <div className="authpage">
      <Navbar reloadnavbar={false} />

      <div className="authcont">
        <img src="https://i.ibb.co/myhHFtq/model2.jpg" alt="signup" />

        <form className="authform">
          <h1>Signup</h1>
          <div className="form-group">
            <div className="formgroup">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" />
            </div>
            <div className="formgroup">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" />
            </div>
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="formgroup">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" />
            </div>
          </div>

          <Link to="/login" className="stylenone">
            <p>Already have an account?</p>
          </Link>
          <Link to="/signup" className="stylenone">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Signup;
