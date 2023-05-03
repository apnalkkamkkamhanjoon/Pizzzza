import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router';
import Domino from './pages/Pizzaschool';
import Papajohns from './pages/Papajohns';
import Mrpizza from './pages/Mrpizza';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Domino />}/>
        <Route path='/papajohns' element={<Papajohns />}/>
        <Route path='/mrpizza' element={<Mrpizza />}/>
      </Routes>
    </Router>
  );
}

export default App;
