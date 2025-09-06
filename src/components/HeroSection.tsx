"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const [counters, setCounters] = useState({ trips: 0, clients: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    const timeout = setTimeout(() => {
      animateCounter(500, 'trips');
      animateCounter(2500, 'clients');
      animateCounter(15, 'years');
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ken Burns Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/90 to-slate-900/80 animate-ken-burns"
          style={{
            backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e73dd0e9-8a1c-47fb-9fd3-6dee14c64dbe.png')",
            backgroundSize: '110%',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Additional Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/20 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      {/* Mega Floating Particle System */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-70 ${
              i % 5 === 0 ? 'w-3 h-3' : 
              i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'
            }`}
            style={{
              background: `linear-gradient(45deg, ${
                ['#0EA5E9', '#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][i % 5]
              }, ${
                ['#60A5FA', '#A78BFA', '#34D399', '#38BDF8', '#F59E0B'][i % 5]
              })`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `mega-float-${i % 5} ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        
        {/* Floating Decorations around Title */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `title-decoration ${5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Mega PAGAJ Title with Orbital Particles */}
        <div className="relative mb-8">
          {/* 8 Orbital Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 opacity-80"
              style={{
                animation: `mega-orbital ${6 + i * 0.5}s linear infinite`,
                transformOrigin: `0 ${100 + i * 15}px`,
                left: '50%',
                top: '50%',
              }}
            />
          ))}
          
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-mega-gradient-flow">
              PAGAJ
            </span>
          </h1>
          
          {/* Subtitle with Gradient Flow */}
          <p className={`text-xl md:text-2xl text-cyan-200 mb-4 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-flow">
              Kajaki Roztocze - Niezapomniane Przygody Wodne
            </span>
          </p>
          
          {/* Animated Underline with Shimmer */}
          <div className="relative mt-6">
            <div className="mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-underline-shimmer" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full animate-shimmer-wave" />
          </div>
        </div>

        {/* Description with Text Glow */}
        <p className={`text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } animate-text-pulse`}>
          Odkryj magię spływów kajakowych po przepięknych wodach Roztocza. 
          Profesjonalny sprzęt, doświadczeni przewodnicy i niezapomniane widoki 
          czekają na Twoją przygodę.
        </p>

        {/* Multi-Layer Shimmer CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Primary CTA with 3 Shimmer Layers */}
          <Link
            href="/oferta"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl"
          >
            {/* Layer 1: Base Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Layer 2: Moving Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-mega-shimmer" />
            
            {/* Layer 3: Particle Burst */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animation: `particle-burst ${1.2 + i * 0.1}s ease-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
            
            <span className="relative z-10">Zarezerwuj Spływ</span>
            
            {/* Ping Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200" />
          </Link>
          
          {/* Secondary CTA */}
          <Link
            href="/trasy"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Zobacz Trasy</span>
          </Link>
        </div>

        {/* Orbital Stats with Spinning Borders */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { number: counters.trips, label: 'Spływów', suffix: '+' },
            { number: counters.clients, label: 'Zadowolonych Klientów', suffix: '+' },
            { number: counters.years, label: 'Lat Doświadczenia', suffix: '' }
          ].map((stat, index) => (
            <div key={index} className="group relative text-center">
              {/* Spinning Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity animate-spin-slow" />
              <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-blue-900/80 backdrop-blur-sm" />
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2 animate-number-glow">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}{stat.suffix}
                  </span>
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          25% { transform: scale(1.05) translate(-1%, -1%); }
          50% { transform: scale(1.08) translate(1%, 0%); }
          75% { transform: scale(1.05) translate(-0.5%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes mega-float-0 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33% { transform: translate3d(-30px, -40px, 0) rotate(120deg) scale(1.3); }
          66% { transform: translate3d(40px, -20px, 0) rotate(240deg) scale(0.7); }
        }
        @keyframes mega-float-1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(50px, -30px, 0) rotate(90deg) scale(0.8); }
          50% { transform: translate3d(-20px, 40px, 0) rotate(180deg) scale(1.4); }
          75% { transform: translate3d(-40px, -10px, 0) rotate(270deg) scale(0.9); }
        }
        @keyframes mega-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          20% { transform: translate3d(-25px, -50px, 0) rotate(72deg) scale(1.1); }
          40% { transform: translate3d(35px, -25px, 0) rotate(144deg) scale(0.6); }
          60% { transform: translate3d(30px, 35px, 0) rotate(216deg) scale(1.5); }
          80% { transform: translate3d(-45px, 25px, 0) rotate(288deg) scale(0.8); }
        }
        @keyframes mega-float-3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(-35px, 30px, 0) rotate(180deg) scale(1.2); }
        }
        @keyframes mega-float-4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(45px, -35px, 0) rotate(90deg) scale(0.9); }
          50% { transform: translate3d(-30px, -45px, 0) rotate(180deg) scale(1.3); }
          75% { transform: translate3d(-50px, 20px, 0) rotate(270deg) scale(0.7); }
        }
        @keyframes title-decoration {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.3) rotate(180deg); opacity: 1; }
        }
        @keyframes mega-orbital {
          from { transform: translateX(-50%) rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes mega-gradient-flow {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes underline-shimmer {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.2); opacity: 0.8; }
        }
        @keyframes shimmer-wave {
          0% { transform: translateX(-100%) scaleX(0.5); }
          50% { transform: translateX(0%) scaleX(1); }
          100% { transform: translateX(100%) scaleX(0.5); }
        }
        @keyframes text-pulse {
          0%, 100% { opacity: 0.9; text-shadow: 0 0 10px rgba(103, 232, 249, 0.3); }
          50% { opacity: 1; text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        }
        @keyframes mega-shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(300%) skewX(-12deg); }
        }
        @keyframes particle-burst {
          0% { opacity: 0; transform: scale(0) translateY(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) translateY(-8px) rotate(180deg); }
          100% { opacity: 0; transform: scale(0.5) translateY(-15px) rotate(360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes number-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(103, 232, 249, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-in-out infinite; }
        .animate-mega-gradient-flow { 
          background-size: 400% 400%; 
          animation: mega-gradient-flow 5s ease infinite; 
        }
        .animate-gradient-flow { 
          background-size: 300% 300%; 
          animation: gradient-flow 4s ease infinite; 
        }
        .animate-underline-shimmer { animation: underline-shimmer 3s ease-in-out infinite; }
        .animate-shimmer-wave { animation: shimmer-wave 2s linear infinite; }
        .animate-text-pulse { animation: text-pulse 4s ease-in-out infinite; }
        .animate-mega-shimmer { animation: mega-shimmer 1.5s ease-out; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-number-glow { animation: number-glow 3s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </section>
  );
};

export default HeroSection;