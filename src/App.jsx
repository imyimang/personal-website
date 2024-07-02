// App.js
import "./styles.css";
import React, { useState } from 'react';  // 添加 useState 的導入
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home/Homepage";
import Coffeehost from "./Coffeehost/Coffeehostpage";
import PostList from "./blog/PostList";
import CreatePost from "./blog/CreatePost";
import PostDetail from "./blog/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coffeehost" element={<Coffeehost />} />
        <Route path="/post" element={<PostList posts={posts} />} />
        <Route path="/addblog" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;