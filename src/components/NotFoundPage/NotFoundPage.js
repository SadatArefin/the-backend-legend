import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    
  return (
    <div className="bg-red-200 p-32">
      <h2 className="text-5xl text-red-600">404 not found</h2>
      <p className="text-xl">
        Go back to{" "}
        {/* Home page link */}
        <NavLink className="text-blue-600 hover:text-blue-900" exact to="/">
          Homepage
        </NavLink>
      </p>
    </div>
  );
};

export default NotFound;
