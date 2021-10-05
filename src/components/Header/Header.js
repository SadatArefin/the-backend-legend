import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Logo and Heading */}
      <div className="flex m-auto w-1/2 justify-center my-5">
        <img src="./TBL-logo.png" alt="TBL Logo" className="w-1/12" />
        <h1 className="text-5xl">The Backend Legend</h1>
      </div>
      <nav className="bg-green-200 py-5">
        {/* Home Navlink */}
        <NavLink
          exact
          to="/"
          className="text-2xl mr-8 hover:text-green-500"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Home
        </NavLink>
        {/* About Navlink */}
        <NavLink
          to="/about"
          className="text-2xl mr-8 hover:text-green-500"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          About
        </NavLink>
        {/* Services Navlink */}
        <NavLink
          to="/services"
          className="text-2xl mr-8 hover:text-green-500"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Services
        </NavLink>
        {/* Curriculum Navlink */}
        <NavLink
          to="/curriculum"
          className="text-2xl mr-8 hover:text-green-500"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Curriculum
        </NavLink>
        {/* Curriculum Navlink */}
        <NavLink
          to="/contact"
          className="text-2xl hover:text-green-500"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
