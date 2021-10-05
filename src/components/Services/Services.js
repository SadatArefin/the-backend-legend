import React from 'react';

const Services = (props) => {
    const { courses } = props;
    return (
        <div className="grid grid-cols-4 gap-5 my-5">
            {/* Course Instructor Duration and Image */}
            {
                courses.map(course =>
                    <div className="p-5 bg-purple-300 rounded-xl hover:bg-pink-300">
                        <img className="h-24 w-48 m-auto" src={course.image} alt={course.title} />
                        <h3 className="text-center text-2xl">{course.title}</h3>
                        <p className="text-gray-600">Course Duration: {course.duration}</p>
                        <p>Instructor: <strong>{course.instructor}</strong></p>
                    </div>
                )
            }
        </div>
    );
};

export default Services;