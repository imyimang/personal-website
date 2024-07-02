import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div>文章不存在</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-black">{post.title}</h1>
      <div className="prose text-black">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetail;