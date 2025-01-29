import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from '../src/components/FormPage/FormPage'; 
import HomePage from '../src/components/HomePage/HomePage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<FormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
