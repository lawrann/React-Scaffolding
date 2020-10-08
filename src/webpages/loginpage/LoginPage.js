import React from "react";
import "./LoginPageStyles.css";
import { auth } from "../../fire";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router";

const handleLogin = () => {
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  auth.signInWithEmailAndPassword(email, password).catch((err) => {
    alert(err);
  });
};

const LoginPage = () => {
  return (
    <UserContext.Consumer>
      {({ state }) => {
        if (state.user == null || state.user == "") {
          return (
            <React.Fragment>
              <div className="login-form">
                <form className="form-signin">
                  <img
                    className="mb-4"
                    src="https://picsum.photos/id/870/72/72"
                    alt=""
                    width="72"
                    height="72"
                  />
                  <h1 className="h3 mb-3 font-weight-normal">Login</h1>
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
                    // type="submit"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <a href="/testbootstrappage">Check user</a>
                </form>
              </div>
            </React.Fragment>
          );
        } else {
          return <Redirect to="/homepage" />;
        }
      }}
    </UserContext.Consumer>
  );
};

export default LoginPage;
