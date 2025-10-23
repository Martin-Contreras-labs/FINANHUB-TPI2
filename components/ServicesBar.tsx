import React, { useRef } from 'react';
import type { ServiceItem } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CreditCardIcon } from './icons/CreditCardIcon';
import { LoanIcon } from './icons/LoanIcon';
import { SavingsIcon } from './icons/SavingsIcon';
import { InsuranceIcon } from './icons/InsuranceIcon';
import { PromotionsIcon } from './icons/PromotionsIcon';
import { InvestmentIcon } from './icons/InvestmentIcon';
import { CalculatorIcon } from './icons/CalculatorIcon';

const services: ServiceItem[] = [
  { id: 'compare_cards', label: 'Compare Cards', icon: CreditCardIcon },
  { id: 'loan_calculator', label: 'Loan Calculator', icon: CalculatorIcon },
  { id: 'find_savings', label: 'Find Savings', icon: SavingsIcon },
  { id: 'insurance_quotes', label: 'Insurance Quotes', icon: InsuranceIcon },
  { id: 'bank_promos', label: 'Bank Promos', icon: PromotionsIcon },
  { id: 'investment_guide', label: 'Investment Guide', icon: InvestmentIcon },
  { id: 'mortgage_rates', label: 'Mortgage Rates', icon: LoanIcon },
  { id: 'credit_score', label: 'Credit Score', icon: CreditCardIcon },
  { id: 'financial_tools', label: 'Financial Tools', icon: CalculatorIcon },
];

const ServiceButton: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <button className="flex-shrink-0 flex flex-col items-center justify-center w-24 sm:w-28 text-center space-y-2 group">
    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
      <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
    </div>
    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
  </button>
);

const ServicesBar: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative -mt-20 z-20 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center">
                <button 
                    onClick={() => scroll('left')}
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors mr-2">
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div 
                    ref={scrollContainerRef}
                    className="flex-1 flex items-center space-x-2 sm:space-x-4 overflow-x-auto py-2 scrollbar-hide">
                    {services.map(service => (
                        <ServiceButton key={service.id} item={service} />
                    ))}
                </div>
                <button 
                    onClick={() => scroll('right')}
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors ml-2">
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default ServicesBar;