import React, { useEffect } from 'react';
import './App.css';
import Header from './Component/Header';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import MainContent from './Component/MainContent';
import Discover from './Component/NavbarGenres/HomeSections/Discover';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    window.addEventListener('load',()=>{
      navigate("/");
    })
  })
  
  return (    
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;