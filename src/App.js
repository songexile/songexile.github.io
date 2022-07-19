import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import Footer from './components/Footer';
import Projects from './Projects';

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
