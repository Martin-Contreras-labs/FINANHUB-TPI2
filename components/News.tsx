import React, { useState } from 'react';
import type { NewsArticle } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: 'Banking News',
    date: 'October 21, 2025',
    title: 'BCI and Scotiabank Lead Digital Transformation in Chilean Banking Sector',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    category: 'Chilean Market Analysis',
    date: 'October 20, 2025',
    title: 'Central Bank of Chile Holds Interest Rates Steady Amid Inflation Concerns',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400',
  },
  {
    id: 3,
    category: 'Regulatory Updates',
    date: 'October 18, 2025',
    title: 'New Fintech Law: What It Means for Santander and Banco de Chile',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d044b4082e6?q=80&w=400',
  },
  {
    id: 4,
    category: 'Banking News',
    date: 'October 15, 2025',
    title: 'BancoEstado Announces New Credit Line for SMEs to Boost Recovery',
    imageUrl: 'https://images.unsplash.com/photo-1579621970795-87f54f5979be?q=80&w=400',
  },
];

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Banking News', 'Chilean Market Analysis', 'Regulatory Updates'];

  const filteredArticles = newsArticles.filter(
    (article) => activeTab === 'All' || article.category === activeTab
  );
  
  // Ensure there is always a featured article if possible, otherwise pick the first.
  const featuredArticle = filteredArticles.find((a) => a.featured) || (filteredArticles.length > 0 ? filteredArticles[0] : null);
  const otherArticles = filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">Latest from the Financial Sector</h2>
        
        <div className="flex justify-center my-8">
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-8 border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 py-2 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
             <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                    <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-bold text-blue-600">{featuredArticle.category}</span>
                        <span>{featuredArticle.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                        {featuredArticle.title}
                    </h3>
                    <a href="#" className="mt-4 inline-flex items-center font-semibold text-blue-600 group">
                        Read more
                        <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
          )}
          
          {/* Other Articles */}
          <div className="space-y-6">
            {otherArticles.map((article) => (
               <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row group">
                    <div className="w-full h-40 sm:w-1/3 sm:h-auto flex-shrink-0">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                        <div>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="font-bold text-blue-600">{article.category}</span>
                                <span>{article.date}</span>
                            </div>
                            <h4 className="mt-2 text-base font-bold text-gray-800 leading-tight">
                                {article.title}
                            </h4>
                        </div>
                         <a href="#" className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 group">
                            Read more
                            <ArrowRightIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
                Go to News
            </button>
        </div>
      </div>
    </section>
  );
};

export default News;