import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Organization from './components/Organization';
import Curriculum from './components/Curriculum';
import Environment from './components/Environment';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: '學校概況' },
    { id: 'organization', label: '組織計畫' },
    { id: 'curriculum', label: '教學活動' },
    { id: 'environment', label: '交安環境' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className={`font-bold text-2xl transition-colors ${scrolled ? 'text-blue-600' : 'text-white'}`}>
            鷺江<span className="font-light">交安</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium hover:text-yellow-400 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Overview />
        <Organization />
        <Curriculum />
        <Environment />
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;