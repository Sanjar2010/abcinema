import React from 'react'; 
import './App.css'; 
import Header from './components/Header/Header'; 
import {  Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; 
import AboutUs from './components/AboutUs/AboutUs'; 
import Register from './components/Register/Register'; 
// import Saved from './components/Save/Save' 
 
 
function App() { 
  return ( 
      <div className='app'>
     
    <Header/>
    <div className='div'>
    <Routes > 
      
      <Route  path='/home' element={<Home/>}/> 
      
      <Route path='/about-us' element={<AboutUs/>}/> 
      <Route  path='/register' element={<Register/>}/> 
    </Routes> 
    </div>
    </div>
  ); 
} 
 
export default App;


