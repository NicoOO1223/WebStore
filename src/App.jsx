import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";



function App()
{
  return (
    <>
    <Router>
    <Navbar />
    <Home />
      <Routes>
        <Route path='/' element={Home} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
