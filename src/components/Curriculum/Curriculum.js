import React from "react";

const Curriculum = (props) => {
    const { courses } = props;
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 m-6">
      {courses.map((course) => (
            // Title and Image
        <div className="bg-yellow-200 rounded-lg p-6">
          <h3 className="text-3xl">{course.title}</h3>
          <img
            className="h-24 w-48 m-auto"
            src={course.image}
            alt={course.title}
              />
              {/* Syllabus */}
          <ul className="my-4 bg-green-300 p-3">
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic1}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic2}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic3}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic4}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic5}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic6}</li>
            <li className="bg-red-200 hover:bg-red-700 hover:text-white rounded my-2">{course.syllabus.topic7}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
