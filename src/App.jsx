// App.js
import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Coffeehost from "./Coffeehost";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/coffeehost" element={<Coffeehost />} />
      </Routes>
    </Router>
  );
}

export default App;
