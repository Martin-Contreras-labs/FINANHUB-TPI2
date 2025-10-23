import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ServicesBar from './components/sections/ServicesBar';
import Promotions from './components/sections/Promotions';
import News from './components/sections/News';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <ServicesBar />
        <Promotions />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App;