// src/pages/Dashboard.jsx
import React, { useState } from 'react';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = { id: posts.length + 1, title, content };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <form onSubmit={handleCreatePost}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full text-black"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Create Post</button>
      </form>
      <h2 className="text-2xl font-bold mt-8">Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="mb-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
