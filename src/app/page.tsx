"use client";

import { useState, useEffect } from 'react';
import SpectacularLoader from '@/components/SpectacularLoader';
import UltraHeader from '@/components/UltraHeader';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <>
      {isLoading && <SpectacularLoader onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <UltraHeader />
        <main className="relative">
          <HeroSection />
          
          {/* Services Preview Section */}
          <section className="relative py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                    Nasze Usługi
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Odkryj pełen zakres naszych profesjonalnych usług kajakowych
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Card 1 */}
                <div className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl text-white font-bold">🚣</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Wypożyczalnia Kajaków
                    </h3>
                    
                    <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                      Profesjonalny sprzęt najwyższej jakości dla wszystkich poziomów zaawansowania
                    </p>
                    
                    <a href="/sprzet" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Zobacz sprzęt →
                    </a>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl text-white font-bold">🗺️</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Trasy Kajakowe
                    </h3>
                    
                    <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                      Malownicze trasy po wodach Roztocza dla każdego poziomu trudności
                    </p>
                    
                    <a href="/trasy" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Odkryj trasy →
                    </a>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl text-white font-bold">🏞️</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      Wycieczki Organizowane
                    </h3>
                    
                    <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                      Kompleksowe pakiety wypraw z przewodnikiem i pełnym wyposażeniem
                    </p>
                    
                    <a href="/oferta" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Zobacz ofertę →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700">
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="relative z-10 container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gotowy na przygodę?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Zarezerwuj swój spływ kajakowy już dziś i odkryj piękno Roztocza z wody
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/kontakt" 
                  className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Skontaktuj się z nami
                </a>
                
                <a 
                  href="/cennik" 
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Zobacz cennik
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    PAGAJ
                  </span>
                </h3>
                <p className="text-white/70">
                  Twoja brama do niezapomnianych przygód kajakowych na Roztoczu
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Nawigacja</h4>
                  <div className="space-y-2">
                    <a href="/trasy" className="block text-white/70 hover:text-cyan-300 transition-colors">Trasy</a>
                    <a href="/sprzet" className="block text-white/70 hover:text-cyan-300 transition-colors">Sprzęt</a>
                    <a href="/oferta" className="block text-white/70 hover:text-cyan-300 transition-colors">Oferta</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Informacje</h4>
                  <div className="space-y-2">
                    <a href="/cennik" className="block text-white/70 hover:text-cyan-300 transition-colors">Cennik</a>
                    <a href="/kontakt" className="block text-white/70 hover:text-cyan-300 transition-colors">Kontakt</a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
                  <div className="space-y-2 text-white/70">
                    <p>Tel: +48 123 456 789</p>
                    <p>Email: info@pagaj-roztocze.pl</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8 text-white/60">
                <p>&copy; 2024 PAGAJ - Kajaki Roztocze. Wszelkie prawa zastrzeżone.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow { 
          background-size: 300% 300%; 
          animation: gradient-flow 4s ease infinite; 
        }
      `}</style>
    </>
  );
}