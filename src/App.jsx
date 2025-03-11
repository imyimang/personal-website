import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home/Homepage";
import NotFound from "./404";
import MouseTrail from "./Mouse";
import GzeroV from "./photo/g0v-2024";
import CyberSec from "./photo/cybersec-2024";
import HackaThon from "./photo/sitcon-hackathon-2024";
import SITCON from "./photo/sitcon-2025";


function App() {
  return (
    <Router>
      {/* 全局的 MouseTrail */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/g0v-2024" element={<GzeroV/>} />
        <Route path="/cybersec-2024" element={<CyberSec />} />
        <Route path="/sitcon-hackathon-2024" element={<HackaThon/>} />
        <Route path="/sitcon-2025" element={<SITCON/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
