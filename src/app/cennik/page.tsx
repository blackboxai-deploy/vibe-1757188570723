"use client";

import UltraHeader from '@/components/UltraHeader';

export default function CennikPage() {
  const kayakPricing = [
    { type: "Kajak jednoosóbowy", price: "60 zł/dzień", description: "Stabilny i wygodny dla pojedynczej osoby" },
    { type: "Kajak dwuosobowy", price: "90 zł/dzień", description: "Idealny dla par i rodzin z dziećmi" },
    { type: "Kajak sportowy", price: "80 zł/dzień", description: "Dla doświadczonych kajakarzy" },
    { type: "Kajak dla dzieci", price: "40 zł/dzień", description: "Bezpieczny kajak dla najmłodszych (do 12 lat)" }
  ];

  const equipmentPricing = [
    { item: "Wiosła carbon", price: "25 zł/dzień", description: "Lekkie i wytrzymałe" },
    { item: "Wiosła aluminiowe", price: "15 zł/dzień", description: "Standardowe wiosła" },
    { item: "Kamizelka ratunkowa", price: "Gratis", description: "Obowiązkowa dla wszystkich" },
    { item: "Worek wodoszczelny", price: "10 zł/dzień", description: "Różne rozmiary dostępne" },
    { item: "Zestaw naprawczy", price: "20 zł/dzień", description: "Na wypadek drobnych uszkodzeń" }
  ];

  const packagePricing = [
    {
      name: "Rodzinny Pakiet",
      price: "280 zł",
      duration: "4 godziny",
      people: "4 osoby",
      includes: ["Kajaki", "Wiosła", "Kamizelki", "Instruktaż", "Ubezpieczenie"],
      popular: false
    },
    {
      name: "Premium Adventure",
      price: "1200 zł",
      duration: "8 godzin", 
      people: "8 osób",
      includes: ["Sprzęt premium", "Przewodnik", "Lunch", "Fotografia", "Transport"],
      popular: true
    },
    {
      name: "Romantic Evening",
      price: "320 zł",
      duration: "3 godziny",
      people: "2 osoby", 
      includes: ["Kajak premium", "Lampki", "Piknik", "Herbata", "Koc"],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "Transport sprzętu", price: "100 zł", description: "Dostawa do wybranego miejsca" },
    { service: "Przewodnik", price: "200 zł/dzień", description: "Doświadczony przewodnik" },
    { service: "Fotografia", price: "300 zł", description: "Profesjonalna sesja zdjęciowa" },
    { service: "Catering podstawowy", price: "50 zł/os", description: "Kanapki i napoje" },
    { service: "Catering premium", price: "80 zł/os", description: "Grillowanie nad rzeką" },
    { service: "Ubezpieczenie premium", price: "15 zł/os", description: "Rozszerzone ubezpieczenie" }
  ];

  const groupDiscounts = [
    { size: "5-9 osób", discount: "10%", description: "Zniżka dla małych grup" },
    { size: "10-19 osób", discount: "15%", description: "Zniżka dla średnich grup" },
    { size: "20+ osób", discount: "20%", description: "Zniżka dla dużych grup" },
    { size: "Szkoły/przedszkola", discount: "25%", description: "Specjalna zniżka edukacyjna" }
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
                backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8476665a-78f2-45e5-877c-d5024859c078.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                Cennik Usług
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Przejrzyste ceny, atrakcyjne pakiety i zniżki grupowe. 
              Znajdź idealne rozwiązanie dla swojego budżetu.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Od 40 zł</div>
                <div className="text-white/70">Wypożyczenie sprzętu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 shadow-cyan-400/20 shadow-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Do 25%</div>
                <div className="text-white/70">Zniżki grupowe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">0 zł</div>
                <div className="text-white/70">Kamizelki ratunkowe</div>
              </div>
            </div>
          </div>
        </section>

        {/* Kayak Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Wypożyczenie Kajaków
                </span>
              </h2>
              <p className="text-white/80 text-lg">Ceny za dobę (24 godziny)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kayakPricing.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.type}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{item.price}</div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Sprzęt Dodatkowy
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {equipmentPricing.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.item}</h3>
                    <span className={`text-lg font-bold ${item.price === 'Gratis' ? 'text-green-400' : 'text-cyan-400'}`}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Pakiety Kompleksowe
                </span>
              </h2>
              <p className="text-white/80 text-lg">Oszczędź wybierając gotowe pakiety</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packagePricing.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                    pkg.popular 
                      ? 'border-cyan-400/50 shadow-cyan-400/20 shadow-2xl' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                        🌟 NAJPOPULARNIEJSZY
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                    <div className="text-white/70">
                      <div>{pkg.duration}</div>
                      <div>{pkg.people}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <span className="text-green-400 mr-3">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="/kontakt"
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      Wybierz pakiet
                    </a>
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
                  Usługi Dodatkowe
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white">{service.service}</h3>
                    <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                  </div>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Discounts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Zniżki Grupowe
                </span>
              </h2>
              <p className="text-white/80 text-lg">Im większa grupa, tym większa zniżka!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {groupDiscounts.map((discount, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{discount.discount}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{discount.size}</h3>
                  <p className="text-white/70 text-sm">{discount.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment & Booking Info */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Zasady Płatności
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Formy Płatności</h3>
                <p className="text-white/70">
                  Gotówka, karta płatnicza, przelew bankowy, BLIK. Zaliczka 30% przy rezerwacji.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Anulowanie</h3>
                <p className="text-white/70">
                  Bezpłatne anulowanie do 24h przed rozpoczęciem. Zwrot zaliczki w 100%.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎫</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Karnety</h3>
                <p className="text-white/70">
                  Kup karnet na 5 spływów i oszczędź 20%. Ważny przez cały sezon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Masz pytania o cennik?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami aby omówić indywidualną ofertę lub wyjaśnić wątpliwości.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/kontakt" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Zapytaj o cenę
              </a>
              
              <a 
                href="tel:+48123456789" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Zadzwoń: +48 123 456 789
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