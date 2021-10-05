import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 bg-gray-300 pt-5 pb-20">
            {/* Footer Framework */}
            <div>
                <h3 className="text-2xl text-gray-700">Framework Courses</h3>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/node">NodeJS</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/express">Express</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/laravel">Laravel</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/laravel">Spring Boot</NavLink></p>
            </div>
            {/* Footer Database */}
            <div>
                <h3 className="text-2xl text-gray-700">Database Courses</h3>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/mongo">MongDB</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/mysql">MySQL</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/postgre">PostGRE</NavLink></p>
                <p className="text-gray-500 hover:text-gray-800"><NavLink to="services/redis">Redis</NavLink></p>
            </div>
            {/* Footer App Links */}
            <div>
                <h3 className="text-2xl text-gray-900">Download Our App</h3>
                <img src="./google-play-badge.png" alt="Google Play Store" width="225px" className="m-auto"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store"  width="200px" className="m-auto"/>
            </div>
        </div>
    );
};

export default Footer;