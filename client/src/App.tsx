import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
