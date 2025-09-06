"use client";

import UltraHeader from '@/components/UltraHeader';

export default function TrasyPage() {
  const routes = [
    {
      id: 1,
      name: "Tanew - Trasa Rodzinna",
      difficulty: "Łatwa",
      length: "12 km",
      duration: "3-4 godziny",
      description: "Spokojna trasa idealna dla rodzin z dziećmi. Przepłyniemy przez malownicze łąki i lasy Roztocza.",
      highlights: ["Czysta woda", "Bezpieczna trasa", "Idealna dla dzieci", "Piękne widoki"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eea446c5-e27a-4a49-ae91-37f1bec9fb14.png",
      price: "80 zł/os"
    },
    {
      id: 2,
      name: "Wieprz - Przygoda dla Średnio Zaawansowanych",
      difficulty: "Średnia",
      length: "18 km",
      duration: "5-6 godzin",
      description: "Urozmaicona trasa z kilkoma przeszkodami naturalnymi. Doskonała dla poszukiwaczy przygód.",
      highlights: ["Naturalne przeszkody", "Różnorodne krajobrazy", "Spotkanie z dziką przyrodą", "Malownicze zakola"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cfd48d8-0112-43a2-9786-5cc1e780316f.png",
      price: "120 zł/os"
    },
    {
      id: 3,
      name: "Roztocze Wild - Dla Zaawansowanych",
      difficulty: "Trudna",
      length: "25 km",
      duration: "7-8 godzin",
      description: "Wymagająca trasa dla doświadczonych kajakarzy. Dzika przyroda, prądy i kamieniste odcinki.",
      highlights: ["Dzikie tereny", "Wymagające pороги", "Długa trasa", "Tylko dla doświadczonych"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ccf6c41-f4a3-4f24-b629-66bbf5758414.png",
      price: "180 zł/os"
    },
    {
      id: 4,
      name: "Sunrise Special - Trasa o Wschodzie",
      difficulty: "Łatwa",
      length: "8 km",
      duration: "2-3 godziny",
      description: "Magiczna trasa rozpoczynająca się o wschodzie słońca. Niezapomniane widoki i spokojna woda.",
      highlights: ["Wschód słońca", "Mgły nad wodą", "Cisza i spokój", "Fotogenic miejsca"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/07ab3a3b-7806-44a0-b800-d6aee16d07ba.png",
      price: "100 zł/os"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Łatwa": return "bg-green-500";
      case "Średnia": return "bg-yellow-500";
      case "Trudna": return "bg-red-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <>
      <UltraHeader />
      
      <main className="pt-24 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90"
              style={{
                backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c888ed1-71ca-43e7-a3e5-811d3550573b.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                Trasy Kajakowe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Odkryj najpiękniejsze trasy kajakowe Roztocza. Od spokojnych spływów rodzinnych 
              po ekstremalną przygodę dla zaawansowanych kajakarzy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-green-400 font-semibold">● Łatwe</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-yellow-400 font-semibold">● Średnie</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-red-400 font-semibold">● Trudne</span>
              </div>
            </div>
          </div>
        </section>

        {/* Routes Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {routes.map((route, index) => (
                <div 
                  key={route.id} 
                  className="group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #0EA5E9, #3B82F6)';
                          parent.innerHTML = `<div class="flex items-center justify-center h-full text-white text-xl font-bold">${route.name}</div>`;
                        }
                      }}
                    />
                    
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 ${getDifficultyColor(route.difficulty)} text-white text-sm font-bold rounded-full`}>
                        {route.difficulty}
                      </span>
                    </div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">
                        {route.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {route.name}
                    </h3>
                    
                    {/* Route Info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-white/70">
                        <span className="text-cyan-400 mr-2">📏</span>
                        {route.length}
                      </div>
                      <div className="flex items-center text-white/70">
                        <span className="text-cyan-400 mr-2">⏱️</span>
                        {route.duration}
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {route.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Atrakcje trasy:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {route.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-white/70">
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex gap-4">
                      <a 
                        href="/kontakt"
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-center hover:scale-105 transition-transform duration-300"
                      >
                        Zarezerwuj
                      </a>
                      <a 
                        href="/cennik"
                        className="py-3 px-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        Cennik
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Ważne Informacje
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Bezpieczeństwo</h3>
                <p className="text-white/70">
                  Wszystkie trasy są regularnie sprawdzane. Zapewniamy kamizelki ratunkowe i instruktaż bezpieczeństwa.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Przewodnicy</h3>
                <p className="text-white/70">
                  Doświadczeni przewodnicy znający lokalne wody i atrakcje. Dostępni na życzenie dla wszystkich tras.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rezerwacja</h3>
                <p className="text-white/70">
                  Rezerwuj z wyprzedzeniem, szczególnie w weekendy i sezonie letnim. Możliwość odwołania 24h wcześniej.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Wybierz swoją trasę przygody!
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Każda trasa to niezapomniana przygoda. Skontaktuj się z nami, aby wybrać idealne rozwiązanie dla Ciebie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Zarezerwuj teraz
              </a>
              
              <a 
                href="/sprzet" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Zobacz sprzęt
              </a>
            </div>
          </div>
        </section>
      </main>

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