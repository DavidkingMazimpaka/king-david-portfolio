import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </RouterRoutes>
  );
};

export default Routes; 