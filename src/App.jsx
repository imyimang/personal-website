import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./home/Homepage";
import NotFound from "./404";
//import MouseTrail from "./Mouse";
import GzeroV24 from "./photo/g0v-2024";
import HackaThon from "./photo/sitcon-hackathon-2024";
import SITCON25 from "./photo/sitcon-2025";
import CyberSec24 from "./photo/cybersec-2024";
import CyberSec25 from "./photo/cybersec-2025";
import OverlayImageDownload from "./bubble";
import COMPUTEX25 from "./photo/computex-2025";
import SITCONCAMP25 from "./photo/sitcon-camp-2025";


function App() {
  return (
    <Router>
      {/* 全局的 MouseTrail */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/g0v-2024" element={<GzeroV24/>} />
        <Route path="/cybersec-2024" element={<CyberSec24 />} />
        <Route path="/cybersec-2025" element={<CyberSec25 />} />
        <Route path="/sitcon-hackathon-2024" element={<HackaThon/>} />
        <Route path="/sitcon-2025" element={<SITCON25/>} />
        <Route path="/computex-2025" element={<COMPUTEX25/>} />
        <Route path="/sitcon-camp-2025" element={<SITCONCAMP25/>} />
        <Route path="/bubble" element={<OverlayImageDownload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
