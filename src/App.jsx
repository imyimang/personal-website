// App.js
import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home//Homepage";
import Coffeehost from "./Coffeehost/Coffeehostpage";
import Blog from "./blog/blog_list";
import Dashboard from "./blog/blog_write";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coffeehost" element={<Coffeehost />} />
        <Route path="/write" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
