import React, { useRef } from 'react';
import type { Promotion } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

// Mock data for promotions
const promotions: Promotion[] = [
  {
    id: 1,
    bank: 'Banco Estado',
    title: 'Special Home Loan Rate',
    description: 'Get a preferential rate on your mortgage by moving your salary account to us.',
    benefit: 'Rates from 3.5% APR',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059ee44a?q=80&w=400',
  },
  {
    id: 2,
    bank: 'BCI',
    title: 'Travel Miles Bonus',
    description: 'Earn double miles on all international purchases with your BCI Visa Signature card.',
    benefit: '2x Miles on Travel',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=400',
  },
  {
    id: 3,
    bank: 'Santander',
    title: 'Cashback Weekends',
    description: 'Enjoy 20% cashback on all restaurant and delivery purchases made during the weekend.',
    benefit: '20% Cashback',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400',
  },
  {
    id: 4,
    bank: 'BICE',
    title: 'Investment Portfolio Boost',
    description: 'Open a new investment account with us and get a 0.5% bonus on your initial deposit.',
    benefit: '0.5% Deposit Bonus',
    image: 'https://images.unsplash.com/photo-1624953587687-e2712776c1e5?q=80&w=400',
  },
  {
    id: 5,
    bank: 'Banco de Chile',
    title: 'Zero-Fee Checking',
    description: 'Open a new checking account and enjoy zero maintenance fees for the first year.',
    benefit: '1 Year No Fees',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400',
  },
];

const PromotionCard: React.FC<{ promotion: Promotion }> = ({ promotion }) => (
  <div className="flex-shrink-0 w-72 sm:w-80 bg-indigo-900 text-white rounded-2xl shadow-lg p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300">
    <div className="flex-grow">
      <p className="font-semibold text-indigo-300">{promotion.bank}</p>
      <h3 className="text-xl sm:text-2xl font-bold mt-2">{promotion.title}</h3>
      <p className="mt-4 text-indigo-200 text-sm leading-relaxed">{promotion.description}</p>
      <p className="mt-4 font-bold text-white text-base sm:text-lg">{promotion.benefit}</p>
    </div>
    <div className="mt-6">
      <a href="#" className="font-semibold flex items-center group text-indigo-100 hover:text-white">
          Learn More
          <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
    <div className="mt-8 h-24 flex items-center justify-center">
        <img src={promotion.image} alt={promotion.title} className="max-h-full object-contain rounded-md" />
    </div>
  </div>
);

const Promotions: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-1 bg-blue-100 transform -translate-x-24 rotate-45" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 w-96 h-1 bg-blue-100 transform -translate-x-20 top-4 rotate-45" aria-hidden="true"></div>
      
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
                <div className="mb-6 sm:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Exclusive Promotions</h2>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">Discover the latest offers and benefits from our partner banks.</p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <button 
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="w-12 h-12 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="w-12 h-12 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div 
                ref={scrollContainerRef}
                className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
                role="list"
            >
                {promotions.map(promo => (
                    <div key={promo.id} role="listitem">
                        <PromotionCard promotion={promo} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Promotions;