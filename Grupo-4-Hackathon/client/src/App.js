import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from '../src/components/FormPage/FormPage'; 
import HomePage from '../src/components/HomePage/HomePage'; 
import ContactPage from '../src/components/ContactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;