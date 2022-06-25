import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import PostsPage from './pages/PostsPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
