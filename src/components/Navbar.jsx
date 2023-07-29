import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
            alt="error"
            style={{ width: "100px" }}
          />
          <span>YouTube</span>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
