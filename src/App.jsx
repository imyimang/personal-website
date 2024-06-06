// App.js
import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home//Homepage";
import Coffeehost from "./Coffeehost/Coffeehostpage";
import Blog from "./blog/blog_home";
import Login from "./blog/blog_login";
import Dashboard from "./blog/blog_dash";
import Post from "./blog/blog_post";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coffeehost" element={<Coffeehost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
