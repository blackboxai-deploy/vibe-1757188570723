"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UltraHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Strona Główna' },
    { href: '/trasy', label: 'Trasy' },
    { href: '/sprzet', label: 'Sprzęt' },
    { href: '/oferta', label: 'Oferta' },
    { href: '/cennik', label: 'Cennik' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl'
            : 'backdrop-blur-lg bg-white/5'
        }`}
      >
        {/* Floating Dots around Header */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + Math.sin(i * 0.5) * 60}%`,
                animation: `header-float ${3 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 3D Logo with Floating Effects */}
            <Link href="/" className="group relative">
              <div className="relative">
                {/* Orbital Dots around Logo */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70"
                    style={{
                      animation: `logo-orbit ${4 + i * 0.5}s linear infinite`,
                      transformOrigin: `0 ${25 + i * 3}px`,
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
                
                {/* Main Logo with Gradient Flow */}
                <h1 className="text-3xl md:text-4xl font-bold relative z-10 group-hover:scale-110 transition-all duration-500">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-flow">
                    PAGAJ
                  </span>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
                </h1>
                
                {/* Floating Description */}
                <p className="text-xs text-cyan-300 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  Kajaki Roztocze
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {/* Multi-layer Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:animate-shimmer-nav" />
                  
                  <span className={`relative z-10 text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-cyan-300 font-semibold'
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Bottom Indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'group-hover:w-3/4'
                  }`} />
                  
                  {/* Animated Underline */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-underline-glow" />
                </Link>
              ))}
              
              {/* Shimmer CTA Button */}
              <div className="ml-6">
                <Link
                  href="/kontakt"
                  className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Multi-layer Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shimmer-cta" />
                  
                  {/* Particle Effects */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 10}%`,
                        animation: `cta-particles ${1 + i * 0.2}s ease-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                  
                  <span className="relative z-10">Zarezerwuj</span>
                  
                  {/* Ping Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm" />
              <div className="relative z-10">
                <span className="sr-only">Otwórz menu</span>
                <div className="w-6 h-0.5 bg-white mb-1 transition-transform duration-300" />
                <div className="w-6 h-0.5 bg-white mb-1 transition-transform duration-300" />
                <div className="w-6 h-0.5 bg-white transition-transform duration-300" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'backdrop-blur-xl bg-slate-900/90 opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-20 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-white/90 hover:text-cyan-300 transition-colors relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
          
          <div className="mt-6 pt-4 border-t border-white/20">
            <Link
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-center font-semibold hover:scale-105 transition-transform"
            >
              Zarezerwuj
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes header-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        @keyframes logo-orbit {
          from { transform: translateX(-50%) rotate(0deg) translateX(30px) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer-nav {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        @keyframes shimmer-cta {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(300%) skewX(-12deg); }
        }
        @keyframes underline-glow {
          0%, 100% { opacity: 0.5; transform: scaleX(0.5); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @keyframes cta-particles {
          0% { opacity: 0; transform: scale(0) translateY(0); }
          50% { opacity: 1; transform: scale(1) translateY(-5px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-10px); }
        }
        .animate-gradient-flow { 
          background-size: 300% 300%; 
          animation: gradient-flow 4s ease infinite; 
        }
        .animate-shimmer-nav { animation: shimmer-nav 1s ease-out; }
        .animate-shimmer-cta { animation: shimmer-cta 1.5s ease-out infinite; }
        .animate-underline-glow { animation: underline-glow 2s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default UltraHeader;