import React from "react";
import { Blogs } from "../assets/blogs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-12">
          Tommorow's trend
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:opacity-90"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="relative">
                  <img
                    src={blog.image || "https://via.placeholder.com/400"}
                    alt={blog.name}
                    className="w-full h-56 object-cover rounded-t-lg shadow-lg"
                  />
                  <div className="absolute top-0 left-0 bg-gradient-to-t from-black via-black to-transparent bg-opacity-70 text-white px-4 py-2 rounded-br-lg">
                    <h2 className="text-2xl font-bold text-shadow-lg">{blog.name}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base mb-4">{blog.excerpt}</p>
                  <div className="text-blue-500 font-semibold flex items-center">
                    <span>Read More →</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
