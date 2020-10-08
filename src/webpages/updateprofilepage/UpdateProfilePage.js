import React from "react";
import "./UpdateProfilePage.css";
import fire, { auth } from "../../fire";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router";

const UpdateProfilePage = () => {
  return (
    <UserContext.Consumer>
      {({ state }) => {
        if (state.user != null) {
          const handleSet = () => {
            var db_User_Uid_Path = "UserProfile/" + state.user.uid;
            var fullname = document.getElementById("fullNameInput").value;
            var address = document.getElementById("addressInput").value;
            var postalcode = document.getElementById("postalCodeInput").value;
            var mobilenum = document.getElementById("mobileNumInput").value;
            fire.database().ref(db_User_Uid_Path).set({
              Name: fullname,
              Address: address,
              Postal: postalcode,
              Mobile: mobilenum,
              Email: state.user.email,
            });
          };
          return (
            <React.Fragment>
              <div className="update-profile-container">
                <form>
                  <div className="form-group">
                    <label htmlFor="fullNameInput">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullNameInput"
                      aria-describedby="fullNameHelp"
                      placeholder="E.g: John, Doe"
                    />
                    <small id="fullNameHelp" className="form-text text-muted">
                      Full Name according to your IC
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="addressInput">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addressInput"
                      placeholder="Clementi Avenue 4, Blk 414"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCodeInput">Postal Code</label>
                    <input
                      type="number"
                      className="form-control"
                      id="postalCodeInput"
                      placeholder="123456"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumInput">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumInput"
                      placeholder="91234567"
                    />
                  </div>
                </form>
                <button className="btn btn-primary" onClick={handleSet}>
                  Update Profile
                </button>
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

export default UpdateProfilePage;
