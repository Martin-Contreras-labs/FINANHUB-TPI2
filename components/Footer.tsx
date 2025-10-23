import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { YoutubeIcon } from './icons/YoutubeIcon';


const FinanHubLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
        <path d="M12 2L2 7V9H22V7L12 2Z" fill="currentColor"/>
        <path d="M4 10V17H6V10H4Z" fill="currentColor"/>
        <path d="M10 10V17H12V10H10Z" fill="currentColor"/>
        <path d="M16 10V17H18V10H16Z" fill="currentColor"/>
        <path d="M3 20H21V22H3V20Z" fill="currentColor" />
    </svg>
    <span className="text-xl sm:text-2xl font-bold text-white">FinanHub</span>
  </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <FinanHubLogo />
                        <p className="mt-4 text-sm">
                            General Offices: Álvaro del Portillo 12455, Las Condes, Santiago.
                            <br />
                            Call us at: <strong>(+56) 22 618 1000</strong> - Business: <strong>(+56) 22 618 1100</strong>
                            <br />
                            WhatsApp: <strong>+56 9 1234 5678</strong>
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><YoutubeIcon className="w-6 h-6" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-base sm:text-lg font-bold tracking-wider">About Us</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">History</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate Policies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Directory</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Who We Are</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-base sm:text-lg font-bold tracking-wider">Links of Interest</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Ethics Reporting Channel</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Work with us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FinanHub Chile</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">ARCO Rights</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-white text-base sm:text-lg font-bold tracking-wider">Help</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;