import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import UserProvider from "./UserContext";

// pages
import LandingPage from "./webpages/landingpage/LandingPage";
import TestBootstrapPage from "./webpages/TestBootstrapPage";
import LoginPage from "./webpages/loginpage/LoginPage";
import SignupPage from "./webpages/signuppage/SignupPage";
import AboutusPage from "./webpages/aboutuspage/AboutusPage";
import HomePage from "./webpages/homepage/HomePage";
import ProfilePage from "./webpages/profilepage/ProfilePage";
import UpdateProfilePage from "./webpages/updateprofilepage/UpdateProfilePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// routing pages
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/testbootstrappage" component={TestBootstrapPage} />
          {/* Private routes*/}
          <Route path="/homepage" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/updateprofile" component={UpdateProfilePage} />
          {/* Public routes*/}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/aboutus" component={AboutusPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer className="App-footer"></Footer>
      </UserProvider>
    </div>
  );
}

export default App;
