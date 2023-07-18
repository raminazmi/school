import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const showHeader = !['/login'].includes(location.pathname);

  return (
    <div 
    style={{
      '::selection': {
        backgroundColor: '#000000',
        color: '#ffffff',
      }}}
    className={`app h-[100%]  ${darkMode ? 'bg-gradient-to-br from-[var(--DarkBG)] to-[#090f14] ' : 'bg-gradient-to-br from-[var(--LightBG)] to-[#fff8f8]'}`}>
    {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    {showHeader && <Footer />}
    </div>
  );
};

export default App;