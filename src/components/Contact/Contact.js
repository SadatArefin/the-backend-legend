import React from "react";

const Contact = () => {
  return (
    <div className="bg-purple-200 p-20">
      <h4 className="text-5xl mb-7">Contact Information</h4>
      {/* Phone Number */}
      <p className="text-2xl mb-4">
        Call us:{" "}
        <span className="text-red-500 hover:text-blue-700">
          +8801234-578910
        </span>
      </p>
      {/* Website */}
      <p className="text-2xl mb-4">
        Visit: <a href="https://the-backend-legend.netlify.app/">The Backend Legend</a>
      </p>
      {/* Mail Address */}
      <p className="text-2xl">
        Mail:{" "}
        <span className="text-red-500 hover:text-blue-700">
          {" "}
          admin@thebackendlegend.com{" "}
        </span>
      </p>
    </div>
  );
};

export default Contact;
