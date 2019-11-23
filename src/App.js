import React from 'react';
import Layout from './Layout';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import 'bulma';
import './App.css';
import './style/mystyles.scss';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout />
    </Router>
  ) ;
}

export default App;
