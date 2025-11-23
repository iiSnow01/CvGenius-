import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Editor from './components/editor/Editor';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/templates" element={<div className="container"><h1>Templates</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
