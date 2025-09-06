"use client";

import UltraHeader from '@/components/UltraHeader';

export default function OfertaPage() {
  const packages = [
    {
      id: 1,
      name: "Rodzinny Pakiet Podstawowy",
      category: "Rodzina",
      duration: "Pół dnia (4 godziny)",
      groupSize: "2-4 osoby",
      description: "Idealny pakiet dla rodzin z dziećmi. Spokojne wody, bezpieczne trasy i profesjonalna opieka.",
      includes: [
        "Kajaki dwuosobowe lub jednoosóbowe",
        "Wiosła aluminiowe",
        "Kamizelki ratunkowe dla wszystkich",
        "Worki wodoszczelne na rzeczy",
        "Instruktaż bezpieczeństwa",
        "Mapa trasy",
        "Ubezpieczenie NNW"
      ],
      route: "Tanew - Trasa Rodzinna (8 km)",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59b47cd9-4091-4a57-bef0-8e70fdb89214.png",
      price: "280 zł",
      pricePerPerson: "70 zł/os (min. 4 os.)",
      popular: false
    },
    {
      id: 2,
      name: "Przygoda Premium",
      category: "Premium",
      duration: "Cały dzień (8 godzin)",
      groupSize: "4-8 osób",
      description: "Kompleksowy pakiet z przewodnikiem, posiłkami i dodatkowymi atrakcjami dla prawdziwych poszukiwaczy przygód.",
      includes: [
        "Kajaki sportowe lub rekreacyjne",
        "Wiosła carbon",
        "Kamizelki ratunkowe premium",
        "Profesjonalny przewodnik",
        "Lunch w plenerze",
        "Sesja fotograficzna",
        "Transport z parkingu",
        "Worki wodoszczelne premium",
        "Zestawy ratunkowe",
        "Ubezpieczenie premium"
      ],
      route: "Wieprz - Przygoda (20 km)",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65d97a92-a1d3-4f03-b447-352f4056706a.png",
      price: "1200 zł",
      pricePerPerson: "150 zł/os (min. 8 os.)",
      popular: true
    },
    {
      id: 3,
      name: "Wieczór na Wodzie",
      category: "Romantyczny",
      duration: "Wieczór (3 godziny)",
      groupSize: "2 osoby",
      description: "Romantyczny spływ o zachodzie słońca. Idealne rozwiązanie dla par szukających niezapomnianych chwil.",
      includes: [
        "Kajak dwuosobowy premium",
        "Wiosła carbon",
        "Kamizelki ratunkowe",
        "Lampki solarne na kajak",
        "Koszyk piknikowy",
        "Koc piknikowy",
        "Termos z gorącą herbatą",
        "Mapa tras nocnych",
        "Ubezpieczenie NNW"
      ],
      route: "Tanew - Trasa Romantyczna (6 km)",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b97ff869-36a4-4007-9692-4aee57d82dac.png",
      price: "320 zł",
      pricePerPerson: "160 zł/os (dokładnie 2 os.)",
      popular: false
    },
    {
      id: 4,
      name: "Korporacyjny Team Building",
      category: "Firmowy",
      duration: "Cały dzień z programem",
      groupSize: "10-30 osób",
      description: "Profesjonalny program team-buildingowy połączony ze spływem kajakowym. Integracja i przygoda w jednym.",
      includes: [
        "Kajaki dla całej grupy",
        "Profesjonalne wiosła",
        "Kamizelki ratunkowe",
        "Dwóch doświadczonych przewodników",
        "Grilling nad rzeką",
        "Gry integracyjne na wodzie",
        "Sesja fotograficzna grupy",
        "Transport busami z miasta",
        "Program motywacyjny",
        "Certyfikaty uczestnictwa",
        "Ubezpieczenie grupowe"
      ],
      route: "Trasa dostosowana do grupy",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5e0c49a-b772-4e40-ba3b-7e3dfec53288.png",
      price: "Od 3500 zł",
      pricePerPerson: "120 zł/os (min. 30 os.)",
      popular: false
    },
    {
      id: 5,
      name: "Szkolenie Kajakowe",
      category: "Edukacja",
      duration: "2 dni (weekend)",
      groupSize: "6-12 osób",
      description: "Profesjonalne szkolenie z technik kajakowania, bezpieczeństwa na wodzie i ratownictwa wodnego.",
      includes: [
        "Kajaki szkoleniowe",
        "Profesjonalne wiosła",
        "Sprzęt ratunkowy",
        "Instruktor z certyfikatami",
        "Materiały szkoleniowe",
        "Nocleg w schronisku",
        "Wyżywienie (3 posiłki/dzień)",
        "Certyfikat ukończenia",
        "Praktyczne ćwiczenia ratownictwa",
        "Teoria i praktyka",
        "Ubezpieczenie szkoleniowe"
      ],
      route: "Różne trasy treningowe",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee66bc2f-52cd-4d5b-ba6e-38a07e31918e.png",
      price: "890 zł",
      pricePerPerson: "890 zł/os (wszystko w cenie)",
      popular: false
    },
    {
      id: 6,
      name: "Sunrise Adventure",
      category: "Specjalny",
      duration: "Wczesny poranek (4 godziny)",
      groupSize: "4-6 osób",
      description: "Magiczny spływ o wschodzie słońca. Dla prawdziwych miłośników przyrody i niezapomnianych wspomnień.",
      includes: [
        "Kajaki rekreacyjne",
        "Wiosła carbon",
        "Kamizelki ratunkowe",
        "Termosy z kawą/herbatą",
        "Śniadanie na wodzie",
        "Przewodnik-fotograf",
        "Zdjęcia wschodu słońca",
        "Koce na kajaki",
        "Latarki czołowe",
        "Transport na start",
        "Ubezpieczenie NNW"
      ],
      route: "Specjalna trasa świetlna (10 km)",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37a98b62-dbf0-4aad-903b-04a00f360793.png",
      price: "450 zł",
      pricePerPerson: "75 zł/os (min. 6 os.)",
      popular: true
    }
  ];

  const additionalServices = [
    {
      name: "Transport sprzętu",
      description: "Dostawa i odbiór sprzętu do wybranego miejsca",
      price: "100 zł"
    },
    {
      name: "Przewodnik",
      description: "Doświadczony przewodnik na całą trasę",
      price: "200 zł/dzień"
    },
    {
      name: "Fotografia",
      description: "Profesjonalna sesja zdjęciowa podczas spływu",
      price: "300 zł"
    },
    {
      name: "Catering",
      description: "Posiłki i napoje dostosowane do długości wyprawy",
      price: "Od 50 zł/os"
    }
  ];

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
                backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7dd73247-ffba-4e64-8f20-264d733310d8.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                Nasza Oferta
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Kompleksowe pakiety kajakowe dostosowane do każdej okazji i poziomu zaawansowania. 
              Od rodzinnych wypraw po profesjonalne szkolenia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Rodzina", "Premium", "Romantyczny", "Firmowy", "Edukacja", "Specjalny"].map((category) => (
                <div key={category} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-cyan-300 font-semibold">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl border overflow-hidden transition-all duration-500 hover:scale-105 ${
                    pkg.popular 
                      ? 'border-cyan-400/50 shadow-cyan-400/20 shadow-2xl' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full animate-pulse">
                        🌟 POPULARNE
                      </span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                      {pkg.category}
                    </span>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #0EA5E9, #3B82F6)';
                          parent.innerHTML = `<div class="flex items-center justify-center h-full text-white text-xl font-bold">${pkg.name}</div>`;
                        }
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {pkg.name}
                        </h3>
                        <div className="text-sm text-white/60 space-y-1">
                          <div>⏱️ {pkg.duration}</div>
                          <div>👥 {pkg.groupSize}</div>
                          <div>🗺️ {pkg.route}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{pkg.price}</div>
                        <div className="text-sm text-white/70">{pkg.pricePerPerson}</div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    {/* Includes */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">W pakiecie:</h4>
                      <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
                        {pkg.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center text-white/70">
                            <span className="text-green-400 mr-2 text-sm">✓</span>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href="/kontakt"
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-center hover:scale-105 transition-transform duration-300"
                      >
                        Zarezerwuj pakiet
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

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Dodatkowe Usługi
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Uzupełnij swój pakiet dodatkowymi usługami dla jeszcze lepszego doświadczenia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  <div className="text-xl font-bold text-cyan-400">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Jak Zarezerwować?
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Wybierz Pakiet",
                  description: "Przeglądnij naszą ofertę i wybierz pakiet idealny dla Ciebie",
                  icon: "📋"
                },
                {
                  step: "02", 
                  title: "Skontaktuj się",
                  description: "Zadzwoń lub napisz do nas aby ustalić szczegóły i dostępność",
                  icon: "📞"
                },
                {
                  step: "03",
                  title: "Potwierdź Rezerwację",
                  description: "Wpłać zaliczkę i otrzymaj potwierdzenie rezerwacji",
                  icon: "✅"
                },
                {
                  step: "04",
                  title: "Ciesz się Przygodą",
                  description: "Przyjedź i przeżyj niezapomnianą przygodę na wodzie",
                  icon: "🚣"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Gotowy wybrać swoją przygodę?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Każdy pakiet to gwarancja niezapomnianych wspomnień i profesjonalnej obsługi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Zarezerwuj teraz
              </a>
              
              <a 
                href="/cennik" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Pełny cennik
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </>
  );
}