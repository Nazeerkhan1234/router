import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" flex justify-between px-4 py-4 capitalize bg-slate-950 text-white ">
      <div className="box flex gap-4 items-center">
        <div className="icon">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
        <p>Go to dashboard</p>
        <div className="blink"></div>
      </div>
      <nav>
        <ul className="gap-4 items-center md:flex hidden">
          <li>Ecomm</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <FaCartArrowDown />
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
