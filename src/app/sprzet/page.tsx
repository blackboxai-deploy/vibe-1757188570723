"use client";

import UltraHeader from '@/components/UltraHeader';

export default function SprzetPage() {
  const equipment = [
    {
      id: 1,
      name: "Kajaki Jednoosóbowe",
      category: "Kajaki",
      description: "Stabilne i zwrotne kajaki idealne dla pojedynczych spływów. Wyposażone w regulowane oparcie i pojemne schowki.",
      features: ["Długość: 3.2m", "Szerokość: 60cm", "Udźwig: 120kg", "Material: Polietylen", "Regulowane siedzisko"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3109c6f4-438a-41e4-ab7a-b6632bc81d12.png",
      price: "60 zł/dzień",
      available: 15
    },
    {
      id: 2,
      name: "Kajaki Dwuosobowe",
      category: "Kajaki",
      description: "Przestronne kajaki dla dwóch osób. Idealne dla par i rodzin. Bardzo stabilne i bezpieczne.",
      features: ["Długość: 4.1m", "Szerokość: 75cm", "Udźwig: 200kg", "Dwa miejsca", "Podwójne wiosła"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c19adc9-5dcb-4b86-9a86-25c4fad23881.png",
      price: "90 zł/dzień",
      available: 12
    },
    {
      id: 3,
      name: "Kajaki Sportowe",
      category: "Kajaki",
      description: "Szybkie i zwrotne kajaki dla doświadczonych kajakarzy. Doskonałe do pokonywania porógów i szybszych odcinków.",
      features: ["Długość: 3.8m", "Szerokość: 55cm", "Udźwig: 100kg", "Profil sportowy", "Ultra lekki"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3236053-8451-4048-bf3c-dc032b08c17e.png",
      price: "80 zł/dzień",
      available: 8
    },
    {
      id: 4,
      name: "Wiosła Carbon",
      category: "Wiosła",
      description: "Lekkie wiosła wykonane z włókna węglowego. Doskonały balans i ergonomiczne uchwyty.",
      features: ["Material: Carbon", "Waga: 650g", "Długość: 220cm", "Regulowana długość", "Ergonomiczny uchwyt"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ab3a770-f829-4046-857d-bed6a888ca05.png",
      price: "25 zł/dzień",
      available: 25
    },
    {
      id: 5,
      name: "Wiosła Aluminiowe",
      category: "Wiosła",
      description: "Wytrzymałe wiosła aluminiowe z plastikowymi łopatkami. Idealne dla początkujących.",
      features: ["Material: Aluminium", "Waga: 900g", "Długość: 215cm", "Bardzo wytrzymałe", "Antypoślizgowy uchwyt"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/597aaaec-7a46-412c-a64b-c774a944b443.png",
      price: "15 zł/dzień",
      available: 35
    },
    {
      id: 6,
      name: "Kamizelki Ratunkowe",
      category: "Bezpieczeństwo",
      description: "Certyfikowane kamizelki ratunkowe zgodne z normami bezpieczeństwa. Różne rozmiary dostępne.",
      features: ["Norma CE", "Różne rozmiary", "Regulowane paski", "Odblaski", "Gwizdek ratunkowy"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3fbf41b-de1c-4d75-956b-4ecc9bf70296.png",
      price: "Gratis",
      available: 50
    },
    {
      id: 7,
      name: "Worki Wodoszczelne",
      category: "Akcesoria",
      description: "Wodoszczelne worki na rzeczy osobiste. Różne rozmiary - od 5L do 25L.",
      features: ["100% wodoszczelne", "Różne pojemności", "Wytrzymały materiał", "Klips bezpieczeństwa", "Pasek nośny"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20780dc3-a101-42e0-b6c2-1aca78950f5d.png",
      price: "10 zł/dzień",
      available: 30
    },
    {
      id: 8,
      name: "Zestawy Naprawcze",
      category: "Akcesoria",
      description: "Kompletne zestawy do drobnych napraw kajaka w trasie. Zawiera łatki, klej i narzędzia.",
      features: ["Łatki samoprzylepne", "Klej wodoodporny", "Narzędzia", "Instrukcja", "Kompaktowe opakowanie"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41fee7b5-59b4-457f-8ba3-5764abe5b25a.png",
      price: "20 zł/dzień",
      available: 20
    }
  ];

  const categories = ["Wszystkie", "Kajaki", "Wiosła", "Bezpieczeństwo", "Akcesoria"];
  
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
                backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/30a76599-64b7-4d0c-bb8f-7c35fbbc4d13.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                Profesjonalny Sprzęt
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Najwyższej jakości sprzęt kajakowy dla wszystkich poziomów zaawansowania. 
              Bezpieczeństwo i komfort to nasze priorytety.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                <div className="text-white/70">Kajaków</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400 mb-1">100+</div>
                <div className="text-white/70">Wiosła</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400 mb-1">200+</div>
                <div className="text-white/70">Akcesoria</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-white/70">Serwis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Equipment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Availability Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      {item.available} dostępne
                    </span>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #0EA5E9, #3B82F6)';
                          parent.innerHTML = `<div class="flex items-center justify-center h-full text-white text-lg font-bold">${item.name}</div>`;
                        }
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{item.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Specyfikacja:</h4>
                      <div className="space-y-1">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-white/60 text-sm">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href="/kontakt"
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm text-center hover:scale-105 transition-transform duration-300"
                      >
                        Zarezerwuj
                      </a>
                      <button className="py-2 px-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors">
                        Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Gwarancja Jakości
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Nasz sprzęt przechodzi regularne kontrole i konserwację, aby zapewnić maksymalne bezpieczeństwo i komfort.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Regularna Konserwacja</h3>
                <p className="text-white/70">
                  Wszystkie kajaki przechodzą dokładną kontrolę po każdym użyciu. Wymiana uszkodzonych elementów na bieżąco.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Certyfikowany Sprzęt</h3>
                <p className="text-white/70">
                  Używamy tylko sprzętu od renomowanych producentów z odpowiednimi certyfikatami bezpieczeństwa.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Najwyższa Jakość</h3>
                <p className="text-white/70">
                  Inwestujemy w sprzęt najwyższej klasy, aby zapewnić niezapomniane doświadczenia na wodzie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Gotowy na przygodę z najlepszym sprzętem?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Zarezerwuj sprzęt już dziś i ciesz się bezpiecznym, komfortowym spływem kajakowym.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Zarezerwuj sprzęt
              </a>
              
              <a 
                href="/cennik" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Zobacz cennik
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