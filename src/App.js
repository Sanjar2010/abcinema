import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route,Routes,Router} from 'react-router-dom';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Registr from './components/Register/Register'
import Saved from './components/Save/Save'
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Comedy from './components/Comedy/Comedy';
import Cartoon from './components/Cartoons/Cartoon';
import Horror from './components/Horror/Horror';
import AdminPage from './components/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';
import HarryPotter from './components/Home/HarryPotter.jsx/HarryPotter';
import LordOfRing from './components/Home/LordOfRing/LordOfRing';
import Forsaj from './components/Home/Forsaj/Forsaj';

function App() {
  return (
      <>
    <Header/>
    <BurgerMenu/>
    <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/comedy' element={<Comedy/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route exact path='/save' element={<Saved/>}/>
      <Route path='/register' element={<Registr/>}/>
      <Route path='/cartoon' element={<Cartoon/>}/>
      <Route path='/horror' element={<Horror/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/harrypotter' element={<HarryPotter/>}/>
      <Route path='/lordofring' element={<LordOfRing/>}/>
      <Route path='/forsaj' element={<Forsaj/>}/>


    </Routes>
    <Footer/>
    </>
  );
}


export default App;
// echo "# abcinema" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Sanjar2010/abcinema.git
// git push -u origin main