import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home/Homepage";
import NotFound from "./404";
import MouseTrail from "./Mouse";

function App() {
  return (
    <Router>
      {/* 全局的 MouseTrail */}
      <MouseTrail />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
