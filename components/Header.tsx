import React from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { SearchIcon } from './icons/SearchIcon';
import { HelpIcon } from './icons/HelpIcon';
import { LocationIcon } from './icons/LocationIcon';

const FinanHubLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
        <path d="M12 2L2 7V9H22V7L12 2Z" fill="currentColor"/>
        <path d="M4 10V17H6V10H4Z" fill="currentColor"/>
        <path d="M10 10V17H12V10H10Z" fill="currentColor"/>
        <path d="M16 10V17H18V10H16Z" fill="currentColor"/>
        <path d="M3 20H21V22H3V20Z" fill="currentColor" />
    </svg>
    <span className="text-xl sm:text-2xl font-bold text-gray-800">FinanHub</span>
  </div>
);

const NavItem: React.FC<{ children: React.ReactNode; hasDropdown?: boolean }> = ({ children, hasDropdown }) => (
  <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
    {children}
    {hasDropdown && <ChevronDownIcon className="ml-1 h-4 w-4" />}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="bg-gray-100 text-sm text-gray-600">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#" className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 -mb-2">Personal Finance</a>
            <a href="#" className="hover:text-blue-600">Business Banking</a>
            <a href="#" className="hover:text-blue-600">Investing</a>
            <a href="#" className="hover:text-blue-600">Resources</a>
            <a href="#" className="text-blue-600 font-semibold hover:underline">New Offers!</a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-blue-600"><HelpIcon className="w-4 h-4" /><span>Help Center</span></a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-600"><LocationIcon className="w-4 h-4" /><span>Branches</span></a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <FinanHubLogo />
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <NavItem hasDropdown>Credit Cards</NavItem>
            <NavItem hasDropdown>Loans</NavItem>
            <NavItem>Savings</NavItem>
            <NavItem>Promotions</NavItem>
            <NavItem hasDropdown>Insurance</NavItem>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="text-gray-600 hover:text-blue-600 flex items-center space-x-2">
              <SearchIcon className="h-6 w-6" />
              <span className="hidden lg:inline">Search</span>
            </button>
            <button className="px-3 py-1.5 sm:px-5 sm:py-2 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 text-sm">
              Register
            </button>
            <button className="px-3 py-1.5 sm:px-5 sm:py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;