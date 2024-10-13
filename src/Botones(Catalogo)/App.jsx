// App.js
import React from 'react';
import Catalogo from './Catalogo';
import VentanaCatalogo from './VentanaCatalogo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Catalogo} />
        <Route path="/catalogo/:id" component={VentanaCatalogo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;