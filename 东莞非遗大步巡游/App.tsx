
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeritageInfo from './components/HeritageInfo';
import Gallery from './components/Gallery';
import ParadeRoute from './components/ParadeRoute';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero id="home" />
        <HeritageInfo id="heritage" />
        <Gallery id="gallery" />
        <ParadeRoute id="route" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
