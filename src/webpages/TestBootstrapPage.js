import React, { useEffect } from "react";
import { UserContext } from "../UserContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import fire, { auth, db } from "../fire";

const TestBootstrapPage = () => {
  useEffect(() => {
    // alert("localStore UID: " + localStorage.getItem("userUID"));

    // have to remove "" when pulling from localStorage
    var userId = localStorage.getItem("userUID").replaceAll('"', "");
    var dbPath = "UserProfile/" + userId;
    alert("dbPath " + dbPath);

    // access the db at UserProfile/uniqueUID

    //.ref represents a specific location in your DB and can be used for reading/writing data
    // to that db location
    // var email = db.ref(dbPath+"Email");
    // console.log("email:" + email.toJSON());

    // db.ref(dbPath)
    //   .child("value")
    //   .then((snapShot) => {
    //     console.log("Sn: " + snapShot);
    //   });

    var rootRef = db.ref(dbPath);
    rootRef.once("value").then((snapshot) => {
      var key = snapshot.key;
      var keyValue = snapshot.val();
      alert("1 key: " + key + " value: " + keyValue);
      alert("3 " + keyValue.Email);
      alert("3 " + keyValue.Name);
      alert("3 " + keyValue.Address);
      alert("3 " + keyValue.Postal);

      // var childKey = snapshot.child("UserProfile").key;
      // var childKeyVal = snapshot.child("UserProfile").val();
      // alert("2 key: " + childKey + " value: " + childKeyVal);

      // var childKey = snapshot.child("UserProfile/" + userId + "/Email").key;
      // var childKeyVal = snapshot
      //   .child("UserProfile/" + userId + "/Email")
      //   .val();
      // alert("3 key: " + childKey + " value: " + childKeyVal);

      // var childKey = snapshot.child("UserProfile").child(userId).child("Email")
      //   .key;
      // var childKeyVal = snapshot
      //   .child("UserProfile")
      //   .child(userId)
      //   .child("Email")
      //   .val();
      // alert("4 key: " + childKey + " value: " + childKeyVal);
    });
  });

  return (
    <UserContext.Consumer>
      {({ state }) => {
        const handleSet = () => {
          var k = document.getElementById("firebase-message-name-set").value;
          var m = document.getElementById("firebase-message-message-set").value;
          fire
            .database()
            .ref("Profile")
            .set({
              [state.user.uid]: {
                Name: k,
                Message: m,
                Email: state.user.email,
              },
            });
        };
        const handlePush = () => {
          // push is index by time
          var k = document.getElementById("firebase-message-name-push").value;
          var m = document.getElementById("firebase-message-message-push")
            .value;
          fire
            .database()
            .ref("messages")
            .push({
              [state.user.uid]: {
                Name: k,
                Message: m,
                Email: state.user.email,
              },
            });
        };
        return (
          <React.Fragment>
            <div className="container">
              Test
              {/* <p>useremail: {state.email}</p>
              <p>userid: {state.uid}</p>
              <p>userauth: {state.user.toString()}</p>
              <p>emailverified: {state.emailverified}</p>
              <p>displayName: {state.displayName}</p>
              <p>photoURL: {state.photoURL}</p>
              <p>isAnonymous: {state.isAnonymous}</p>
              <p>isloggedin: {state.is_logged_in.toString()}</p>
              <br />
              <h2>Set message</h2>
              <input
                id="firebase-message-name-set"
                type="text"
                placeholder="Name"
              ></input>
              <input
                id="firebase-message-message-set"
                type="text"
                placeholder="Message"
              ></input>
              <button onClick={handleSet}>Set message</button>
              <br />
              <h2>Push message (indexed by time)</h2>
              <input
                id="firebase-message-name-push"
                type="text"
                placeholder="Name"
              ></input>
              <input
                id="firebase-message-message-push"
                type="text"
                placeholder="Message"
              ></input>
              <button onClick={handlePush}>Push message</button> */}
            </div>
          </React.Fragment>
        );
      }}
    </UserContext.Consumer>
  );
};

export default TestBootstrapPage;
