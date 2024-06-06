// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // 假設有一些文章列表
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4">
          <h2 className="text-2xl font-semibold">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
