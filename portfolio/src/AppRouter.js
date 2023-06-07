import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav';

// Import your components for each route
import Home from './component/home';
import Projects from './component/projects';
import Contact from './component/contact';
import Resume from './component/resume';

const AppRouter = () => {
  return (
    <Router>
        < Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;