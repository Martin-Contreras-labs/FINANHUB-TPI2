import React, { useState, useEffect, useCallback } from 'react';
import type { HeroSlide } from '../../types';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

const slides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://picsum.photos/1920/1080?random=1',
    title: 'Your Path to Financial Freedom!',
    subtitle: 'Since 2024, FinanHub has been dedicated to helping you navigate the world of finance. We empower individuals and projects to grow and succeed.',
    ctaText: 'Explore Promotions'
  },
  {
    id: 2,
    image: 'https://picsum.photos/1920/1080?random=2',
    title: 'Unlock Exclusive Bank Offers',
    subtitle: 'Discover top-tier promotions from leading banks, tailored to fit your financial needs. From cashback on cards to better loan rates.',
    ctaText: 'See Top Offers'
  },
  {
    id: 3,
    image: 'https://picsum.photos/1920/1080?random=3',
    title: 'Smart Investing Starts Here',
    subtitle: 'Whether you are a beginner or an expert, find the right tools and insights to grow your wealth and secure your future.',
    ctaText: 'Learn More'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen pt-32 text-white">
       {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          <button className="mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {slides[currentSlide].ctaText}
          </button>
        </div>
        
        <div className="absolute bottom-40 left-4 sm:left-6 lg:left-8 flex items-center space-x-4">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
            <ArrowRightIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-100'}`}></button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-24 bg-gradient-to-tr from-blue-600 to-transparent opacity-60" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
    </section>
  );
};

export default Hero;