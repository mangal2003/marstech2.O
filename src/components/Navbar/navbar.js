import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="title">MarsTech</div>
      <Link
        activeClass="active"
        to="footer"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        <button className="join">Contact Us</button>
      </Link>
    </section>
  );
};

export default Navbar;
