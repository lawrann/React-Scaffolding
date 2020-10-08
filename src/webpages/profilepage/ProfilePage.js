import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import fire, { auth, db } from "../../fire";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router";

const ProfilePage = () => {
  var userId = localStorage.getItem("userUID").replaceAll('"', "");
  var db_User_Uid_Path = "UserProfile/" + userId;

  var mounted = true;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [mobile, setMobile] = useState("");
  const [snap, setSnap] = useState(null);

  useEffect(() => {
    console.log("time");

    if (mounted) {
      db.ref(db_User_Uid_Path)
        .once("value")
        .then((snapShot) => {
          if (snapShot.val() != null) {
            // can pass entire snap
            setSnap(snapShot.val());
            // can pass individually
            // setName(snapShot.val().Name);
            // setMobile(snapShot.val().Mobile);
            // setPostal(snapShot.val().Postal);
            // setAddress(snapShot.val().Address);
            // setEmail(snapShot.val().Email);
          }
        });
    }
    return function cleanup() {
      console.log("cleanedup");
      mounted = false;
    };
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
                      value={snap ? snap.Name : ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="addressInput">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addressInput"
                      value={snap ? snap.Address : ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCodeInput">Postal Code</label>
                    <input
                      type="number"
                      className="form-control"
                      id="postalCodeInput"
                      value={snap ? snap.Postal : ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumInput">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumInput"
                      value={snap ? snap.Mobile : ""}
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
          console.log(state.user != "");
          return <Redirect to="/login" />;
        }
      }}
    </UserContext.Consumer>
  );
};

export default ProfilePage;
