import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import Projects from './pages/Projects';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
