// src/App.jsx or src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './Component/Header'; // Ensure this path is correct
import About from './Component/About'; // Import the About component
import Contact from './Component/Contact'; // Updated import for Contact
import MainWeb from './Component/MainWeb';
import Services from './Component/Services';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainWeb />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </main>
      <Contact />
    </Router>
  );
};

export default App;
