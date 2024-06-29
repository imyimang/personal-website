// src/components/WriteBlog.js
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      await axios.post('website-chi-seven-95.vercel.app/api/blogs', { title, content });
      alert('Blog saved successfully!');
    } catch (error) {
      alert('Failed to save blog');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Write a Blog</h1>
      <input
        type="text"
        placeholder="Title"
        className="block w-full mb-4 p-2 border text-black rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content in Markdown"
        className="block w-full h-64 mb-4 p-2 border text-black rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Blog
      </button>
    </div>
  );
};

export default WriteBlog;
