import React from "react";
import "./HomePageStyles.css";
import { auth } from "../../fire";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router";

// diff header & footer

const HomePage = () => {
  return (
    <UserContext.Consumer>
      {({ state }) => {
        if (state.user == null) {
          return <Redirect to="/login" />;
        } else {
          return <React.Fragment>Welcome to homepage</React.Fragment>;
        }
      }}
    </UserContext.Consumer>
  );
};

export default HomePage;
