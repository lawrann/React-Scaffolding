import React from "react";
import { auth } from "./fire.js";

// for authentication details
export const UserContext = React.createContext({ user: null });

class UserProvider extends React.Component {
  state = {
    user: "",
  };
  componentDidMount = () => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth != null) {
        localStorage.setItem("userUID", JSON.stringify(userAuth.uid));
      } else {
        localStorage.removeItem("userUID");
      }
      console.log("userauth: " + JSON.stringify(userAuth));
      // userAuth keys - displayName email emailVerified photoURL isAnonymous uid
      this.setState({
        user: userAuth,
      });
    });
  };
  render() {
    return (
      <UserContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
