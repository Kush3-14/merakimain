import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import Home from './pages/Home';  
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
