import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'; // Página inicial
import App from './App'; // Formulário

const AppWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> {/* Página inicial */}
        <Route path="/formulario" component={App} /> {/* Formulário */}
      </Switch>
    </Router>
  );
};

export default AppWrapper;
