import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-black">所有文章</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-white shadow rounded-lg p-4">
            <Link to={`/post/${post.id}`} className="text-lg font-medium text-blue-600 hover:text-blue-800">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;