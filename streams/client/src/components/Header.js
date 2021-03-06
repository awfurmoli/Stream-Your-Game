import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary  menu pointing container">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <div className="item">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};
export default Header;
