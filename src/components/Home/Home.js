import React from 'react';

const Home = (props) => {
    const { courses } = props;
    const selectedCourses = courses.filter(course => course.id<5);
    return (
        <div>
            {/* banner */}
            <div className="bg-blue-200 p-40">
                <h2 className="text-3xl md:text-7xl mb-5 font-extrabold">The Backend Legend</h2>
                <p className="text-xl md:text-4xl text-red-700">The Ultimate Web Backend Learning Platform</p>
            </div>
            {/* Highlights */}
            <div className="m-10">
                <h2 className="text-4xl font-bold">Here We Will Teach You About</h2>
            </div>
            <div className="grid grid-cols-2 gap-10 m-10">
            {
                selectedCourses.map(course =>
                    <div className="p-5 bg-blue-200 rounded-xl hover:bg-blue-300">
                        <img className="h-24 w-48 m-auto" src={course.image} alt={course.title} />
                        <h3 className="text-center text-2xl">{course.title}</h3>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Home;