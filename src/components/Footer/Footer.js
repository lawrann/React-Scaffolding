import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      {" "}
      <hr className="featurette-divider"></hr>
      <footer className="container">
        <p className="float-right">Team #{/* <a href="#">Back to top</a> */}</p>
        <p>
          &copy; Code For Good 2020 &middot;{" "}
          {/* <a href="/aboutus">About us</a> */}
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
