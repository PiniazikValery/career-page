import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Routes } from './routes';
import './App.css';
import './sass/_career.scss';


function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
