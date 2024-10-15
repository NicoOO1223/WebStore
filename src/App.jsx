import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Oferta from "./components/Pages/Oferta";



function App()
{
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/oferta' element={<Oferta />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
