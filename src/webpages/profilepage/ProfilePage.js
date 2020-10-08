import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import fire, { auth, db } from "../../fire";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router";
import { FirebaseDatabaseNode } from "@react-firebase/database";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [mobile, setMobile] = useState("");
  var userId = localStorage.getItem("userUID").replaceAll('"', "");
  var db_User_Uid_Path = "UserProfile/" + userId;

  useEffect(() => {
    // Set singly
    // db.ref(db_User_Uid_Path + "/Email")
    //   .once("value")
    //   .then((snapShot) => {
    //     console.log(snapShot.val());
    //   });

    // Set at once
    console.log("time");
    db.ref(db_User_Uid_Path)
      .once("value")
      .then((snapShot) => {
        setName(snapShot.val().Name);
        setMobile(snapShot.val().Mobile);
        setPostal(snapShot.val().Postal);
        setAddress(snapShot.val().Address);
        setEmail(snapShot.val().Email);
      });
  });

  return (
    <UserContext.Consumer>
      {({ state }) => {
        if (state.user != null) {
          return (
            <React.Fragment>
              <div className="profile-container">
                <h1>Profile page</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullNameInput">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullNameInput"
                      aria-describedby="fullNameHelp"
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="addressInput">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addressInput"
                      value={address}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCodeInput">Postal Code</label>
                    <input
                      type="number"
                      className="form-control"
                      id="postalCodeInput"
                      value={postal}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumInput">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumInput"
                      value={mobile}
                    />
                  </div>
                </form>

                <a className="nav-link edit-page" href="/updateprofile">
                  Edit Profile
                </a>
              </div>
            </React.Fragment>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    </UserContext.Consumer>
  );
};

export default ProfilePage;
