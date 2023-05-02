import React from 'react';
import Main from './pages/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/domino' element={<Main />}/>
        <Route path='/papajohns' element={<Main />}/>
        <Route path='/mrpizza' element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;
