import React from "react";
import "./SignupPageStyles.css";
import { auth } from "../../fire";
import { UserContext } from "../../UserContext";

const handleSignup = () => {
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  auth.createUserWithEmailAndPassword(email, password).catch((err) => {
    alert(err);
  });
};

const SignupPage = () => {
  return (
    <UserContext.Consumer>
      {({ state, user, email }) => {
        return (
          <React.Fragment>
            <div className="signup-form">
              <form className="form-signup">
                <img
                  className="mb-4"
                  src="https://picsum.photos/id/870/72/72"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 className="h3 mb-3 font-weight-normal">
                  Create an Account
                </h1>
                <label htmlFor="inputEmail" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email"
                  required
                  autoFocus
                />
                <label htmlFor="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <div className="checkbox mb-3"></div>
                <button
                  className="btn btn-sm btn-primary btn-block"
                  type="button"
                  onClick={handleSignup}
                >
                  Register
                </button>
                <a href="/testbootstrappage">Check user</a>
              </form>
            </div>
          </React.Fragment>
        );
      }}
    </UserContext.Consumer>
  );
};

export default SignupPage;
