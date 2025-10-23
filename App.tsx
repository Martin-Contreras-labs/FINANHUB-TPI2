import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesBar from './components/ServicesBar';
import Promotions from './components/Promotions';
import News from './components/News';
import Footer from './components/Footer';

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