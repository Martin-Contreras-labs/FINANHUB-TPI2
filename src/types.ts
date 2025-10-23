import React from 'react';

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface ServiceItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Promotion {
  id: number;
  bank: string;
  title: string;
  description: string;
  benefit: string;
  image: string;
}

export interface NewsArticle {
  id: number;
  category: 'Banking News' | 'Chilean Market Analysis' | 'Regulatory Updates';
  date: string;
  title: string;
  imageUrl: string;
  featured?: boolean;
}