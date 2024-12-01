import React from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../assets/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const blog = Blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Blog Post Title */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          {blog.title}
        </h1>

        {/* Blog Post Image */}
        <div className="mb-6">
          <img
            src={blog.image || "https://via.placeholder.com/600x400"}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg text-white mx-auto mb-8 space-y-4">
          <p>{blog.content}</p>
          <p className="text-xl font-semibold text-yellow-200">
            Stay tuned for more updates!
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full text-xl font-semibold shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all"
          >
            Back to All Posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
