import React from 'react';
import 'boxicons';
import './App.css';
import Header from './Component/Header';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import MainContent from './Component/MainContent';
import Discover from './Component/NavbarGenres/HomeSections/Discover';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  window.addEventListener('load',()=>{
    navigate("/");
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

// news-api key 77d30588227f401d8ae9c549d314bff9
// base url : https://newsapi.org/v2/everything?q=keyword&apiKey=77d30588227f401d8ae9c549d314bff9
