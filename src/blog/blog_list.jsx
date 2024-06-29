// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Remarkable } from 'remarkable';
import 'tailwindcss/tailwind.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const md = new Remarkable();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://website-chi-seven-95.vercel.app/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs');
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-6">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: md.render(blog.content) }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
