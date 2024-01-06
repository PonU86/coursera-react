import React from "react";
import "./Sign_Up.css";


const Sign_Up = () => {
  return (
    <div className="container">
        <div className="signup-grid">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1">
                Already a member? <span><a href="../Login/Login.html" className="loginColor"> Login</a></span>
            </div>
            <div className="signup-form">
                <form>
                    <div className="form-group">
                        <label for="role">Role<sup>*</sup></label>
                        <select>
                            <option>Doctor</option>
                            <option>Patient</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name<sup>*</sup></label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone<sup>*</sup></label>
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email<sup>*</sup></label>
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password<sup>*</sup></label>
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
export default Sign_Up;