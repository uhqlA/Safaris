import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";


import Home from './Components/Home/Home';
import About from "../src/Components/Pages/About/About"
import Safaris from "../src/Components/Pages/Safaris/Safaris"
import Services from "../src/Components/Pages/Services/Services"
import Gallery from "../src/Components/Pages/Gallery/Gallery"
import BazengaShop from "../src/Components/Pages/Shop/BazengaShop"
import Contact from "../src/Components/Pages/Contact/Contact"
//import About from "../src/Components/Pages/About/About"




function App() {
  return (
    <>
    {/* <Home /> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/safaris' element={<Safaris/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/shop' element={<BazengaShop/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
    </>
  );
}

export default App;
