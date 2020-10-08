import React from "react";
import { auth } from "../../fire";
import { UserContext } from "../../UserContext";

const handleLogout = () => {
  auth.signOut();
};

const getProfileLogin = (state) => {
  if (state.user != null) {
    return (
      <a className="nav-link" href="/profile">
        {state.user.email}
      </a>
    );
  } else {
    return (
      <a className="nav-link" href="/login">
        Login
      </a>
    );
  }
};

const getLogoutSignup = (state) => {
  if (state.user != null) {
    return (
      <a className="nav-link" href="/" onClick={handleLogout}>
        Logout
      </a>
    );
  } else {
    return (
      <a className="nav-link" href="/signup">
        Sign Up
      </a>
    );
  }
};

const Header = () => {
  return (
    <UserContext.Consumer>
      {({ state }) => {
        return (
          <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                  <img
                    src="https://picsum.photos/id/1/30/30"
                    width="30"
                    height="30"
                    alt=""
                    loading="lazy"
                  />{" "}
                  Company
                </a>
              </nav>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/aboutus">
                      Our Team
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Solutions
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
                <form className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item">{getProfileLogin(state)}</li>
                  <li className="nav-item">{getLogoutSignup(state)}</li>
                </form>
              </div>
            </nav>
          </React.Fragment>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
