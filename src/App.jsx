// App.js
import "./styles.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home/Homepage";
import Coffeehost from "./Coffeehost/Coffeehostpage";
import PostList from "./blog/PostList";
import CreatePost from "./blog/CreatePost";
import PostDetail from "./blog/PostDetail";
import NotFound from "./404";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coffeehost" element={<Coffeehost />} />
        <Route path="/post" element={<PostList posts={posts} />} />
        <Route path="/addblog" element={<CreatePost setPosts={setPosts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;