import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import EnrollComponent from './components/EnrollComponent';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
         
              <Link to="/login"><button className='box1'>Login</button></Link>
              <Link to="/enroll"><button className='box1'>Enroll</button></Link>

        </nav>

        <Routes>
        <Route path='/' element={<EnrollComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/enroll" element={<EnrollComponent />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
