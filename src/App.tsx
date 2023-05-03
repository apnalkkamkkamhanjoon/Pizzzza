import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router';
import PizzaSchool from './pages/Pizzaschool';
import Papajohns from './pages/Papajohns';
import Mrpizza from './pages/Mrpizza';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PizzaSchool />}/>
        <Route path='/papajohns' element={<Papajohns />}/>
        <Route path='/mrpizza' element={<Mrpizza />}/>
      </Routes>
    </Router>
  );
}

export default App;
