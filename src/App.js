import { useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Dropdown/>
      <Banner/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
