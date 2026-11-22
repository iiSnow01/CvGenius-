import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Editor from './components/editor/Editor';
import TemplatesPage from './components/templates/TemplatesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
