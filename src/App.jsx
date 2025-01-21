import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Navbar from './Navbar';
import Darkmode from './Darkmode';

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar  />
     <Darkmode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
      
    
  )
}

export default App

