import React from "react";

const About = (props) => {
  const { courses } = props;
  return (
    <div className="flex justify-evenly my-10">
      <div>
        {/* Instructors */}
        <h3 className="text-4xl font-bold mb-4">Our Instructors</h3>
        { courses.map((course) => (
          <h5 className="text-xl hover:text-green-900">{course.instructor}</h5>
          ))}
      </div>
      {/* Courses */}
      <div>
        <h3 className="text-4xl font-bold mb-4">Our Courses</h3>
        { courses.map((course) => (
            <h5 className="text-xl hover:text-blue-900">{course.title}</h5>
            ))}
      </div>
    </div>
  );
};

export default About;
