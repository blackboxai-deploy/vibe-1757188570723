"use client";

import { useState, useEffect } from 'react';

interface SpectacularLoaderProps {
  onComplete: () => void;
}

const SpectacularLoader = ({ onComplete }: SpectacularLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const loadingTexts = [
    "Przygotowujemy kajak...",
    "Sprawdzamy wiosła...",
    "Testujemy wody Roztocza...",
    "Ładujemy przygodę...",
    "Prawie gotowe!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        
        // Update phase based on progress
        const newPhase = Math.floor((newProgress / 100) * loadingTexts.length);
        if (newPhase !== phase && newPhase < loadingTexts.length) {
          setPhase(newPhase);
        }
        
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete, phase, loadingTexts.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Floating Particles System */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-60"
            style={{
              background: `linear-gradient(45deg, ${
                ['#0EA5E9', '#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][i % 5]
              }, ${
                ['#60A5FA', '#A78BFA', '#34D399', '#38BDF8', '#F59E0B'][i % 5]
              })`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `ultra-float-${i % 5} ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated SVG Waves Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Wave Layer 1 */}
          <path
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-1)"
            className="animate-wave-slow"
          />
          
          {/* Wave Layer 2 */}
          <path
            d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            className="animate-wave-medium"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center">
        {/* Orbital Particles around PAGAJ Logo */}
        <div className="relative mb-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{
                animation: `orbital-motion ${6 + i * 0.5}s linear infinite`,
                transformOrigin: `0 ${80 + i * 10}px`,
                left: '50%',
                top: '50%',
                opacity: 0.8,
              }}
            />
          ))}
          
          {/* PAGAJ Logo */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse-glow">
            PAGAJ
          </h1>
        </div>

        {/* Animated Kayak */}
        <div className="relative mb-12 h-32">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 animate-kayak-sail">
            {/* Kayak SVG */}
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-cyan-400">
              <defs>
                <linearGradient id="kayak-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="50%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <ellipse cx="60" cy="20" rx="58" ry="8" fill="url(#kayak-gradient)" />
            </svg>
            
            {/* Rotating Paddle */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 animate-paddle-rotate">
              <div className="w-1 h-12 bg-yellow-600 rounded-full relative">
                <div className="absolute -top-3 -left-2 w-5 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-3 -right-2 w-5 h-6 bg-yellow-400 rounded-full opacity-80"></div>
              </div>
            </div>

            {/* Water Splash Particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-splash-particle"
                style={{
                  left: `${20 + i * 15}px`,
                  top: '25px',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Advanced Progress Bar */}
        <div className="relative w-80 mx-auto mb-8">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              
              {/* Blur Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-50" />
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="text-center mt-4">
            <p className="text-xl text-cyan-300 font-medium animate-text-glow">
              {loadingTexts[phase] || "Finalizujemy..."}
            </p>
            <p className="text-sm text-blue-400 mt-2 font-mono">
              {Math.floor(progress)}%
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes ultra-float-0 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(-20px, -30px, 0) rotate(90deg) scale(1.2); }
          50% { transform: translate3d(30px, -20px, 0) rotate(180deg) scale(0.8); }
          75% { transform: translate3d(-10px, 40px, 0) rotate(270deg) scale(1.1); }
        }
        @keyframes ultra-float-1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33% { transform: translate3d(40px, -25px, 0) rotate(120deg) scale(0.9); }
          66% { transform: translate3d(-30px, 35px, 0) rotate(240deg) scale(1.3); }
        }
        @keyframes ultra-float-2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          20% { transform: translate3d(-35px, -40px, 0) rotate(72deg) scale(1.1); }
          40% { transform: translate3d(25px, -15px, 0) rotate(144deg) scale(0.7); }
          60% { transform: translate3d(45px, 30px, 0) rotate(216deg) scale(1.4); }
          80% { transform: translate3d(-15px, 45px, 0) rotate(288deg) scale(0.9); }
        }
        @keyframes ultra-float-3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(-50px, 25px, 0) rotate(180deg) scale(1.2); }
        }
        @keyframes ultra-float-4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          25% { transform: translate3d(35px, -35px, 0) rotate(90deg) scale(0.8); }
          50% { transform: translate3d(-25px, -45px, 0) rotate(180deg) scale(1.3); }
          75% { transform: translate3d(-40px, 20px, 0) rotate(270deg) scale(0.9); }
        }
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-50px); }
        }
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }
        @keyframes orbital-motion {
          from { transform: translateX(-50%) rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        @keyframes kayak-sail {
          0% { transform: translateX(-140px) translateY(-50%); }
          100% { transform: translateX(calc(100vw + 140px)) translateY(-50%); }
        }
        @keyframes paddle-rotate {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) rotate(180deg); }
        }
        @keyframes splash-particle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-15px) scale(1.2); opacity: 0.7; }
          100% { transform: translateY(-8px) scale(0.8); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5)); }
          50% { filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.8)); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(103, 232, 249, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.3); }
        }
        .animate-wave-slow { animation: wave-slow 8s ease-in-out infinite; }
        .animate-wave-medium { animation: wave-medium 6s ease-in-out infinite; }
        .animate-kayak-sail { animation: kayak-sail 4s linear infinite; }
        .animate-paddle-rotate { animation: paddle-rotate 0.8s linear infinite; }
        .animate-splash-particle { animation: splash-particle 1s ease-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default SpectacularLoader;