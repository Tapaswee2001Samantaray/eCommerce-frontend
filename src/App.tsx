import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AllRouters from './Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRouters />
      </Router>
    </div>
  );
};

export default App;