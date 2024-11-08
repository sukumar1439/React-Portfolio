import React from "react";
import { GiAsianLantern } from "react-icons/gi";
import data from "../../content/data.json";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav className="nav-body">
      <h3 children={data.bio.mob} className="head-tag" />
      <GiAsianLantern size={"30px"} className="lantern" />
      <h3 children={data.bio.mail} className="head-tag" />
    </nav>
  );
};

export default Navbar;