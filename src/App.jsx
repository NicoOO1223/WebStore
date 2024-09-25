
import React from 'react';
import './App.css';
import Video from './components/Video';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App()
{
  return (
    <>
      <Router>
        <Navbar />
        <Video />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </>

  );
}

export default App;
