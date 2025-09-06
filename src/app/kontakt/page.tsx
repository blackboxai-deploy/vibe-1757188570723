"use client";

import { useState } from 'react';
import UltraHeader from '@/components/UltraHeader';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    people: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        people: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      title: "Telefon",
      value: "+48 123 456 789",
      description: "Codziennie 8:00 - 20:00",
      icon: "📞",
      link: "tel:+48123456789"
    },
    {
      title: "Email",
      value: "info@pagaj-roztocze.pl",
      description: "Odpowiadamy w ciągu 24h",
      icon: "✉️",
      link: "mailto:info@pagaj-roztocze.pl"
    },
    {
      title: "Adres",
      value: "Roztocze National Park",
      description: "Zwierzyniec, Polska",
      icon: "📍",
      link: "https://maps.google.com/maps?q=Roztoczański+Park+Narodowy"
    },
    {
      title: "Sezon",
      value: "Maj - Październik",
      description: "Pełny sezon kajakowy",
      icon: "🗓️",
      link: null
    }
  ];

  const socialMedia = [
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "YouTube", url: "#", icon: "📹" },
    { name: "TikTok", url: "#", icon: "🎵" }
  ];

  const faqItems = [
    {
      question: "Jak wcześnie trzeba rezerwować?",
      answer: "Zalecamy rezerwację co najmniej 3-7 dni wcześniej, szczególnie w weekendy i sezonie letnim."
    },
    {
      question: "Co jeśli pogoda będzie niesprzyjająca?",
      answer: "W przypadku złej pogody można przełożyć termin bez dodatkowych opłat lub otrzymać pełny zwrot pieniędzy."
    },
    {
      question: "Czy można wynająć sprzęt bez przewodnika?",
      answer: "Tak, oferujemy wypożyczenie samego sprzętu. Zapewniamy mapę, instruktaż i numer kontaktowy na wypadek problemów."
    },
    {
      question: "Jakie są wymagania wiekowe?",
      answer: "Dzieci poniżej 12 lat muszą płynąć z dorosłym. Osoby niepełnoletnie wymagają zgody rodziców."
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
                backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db8ab9d2-b062-4427-b439-63fc3a667955.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-flow">
                Skontaktuj się z nami
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Jesteśmy tu, aby pomóc Ci zaplanować idealną przygodę kajakową. 
              Skontaktuj się z nami już dziś!
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                  
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium block mb-2"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-cyan-400 text-lg font-medium mb-2">{info.value}</div>
                  )}
                  
                  <p className="text-white/70 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Formularz Kontaktowy
                    </span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Imię i nazwisko *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Rodzaj usługi
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        >
                          <option value="">Wybierz usługę</option>
                          <option value="wypozyczenie">Wypożyczenie sprzętu</option>
                          <option value="pakiet-rodzinny">Pakiet rodzinny</option>
                          <option value="premium">Premium adventure</option>
                          <option value="romantyczny">Wieczór na wodzie</option>
                          <option value="firmowy">Team building</option>
                          <option value="szkolenie">Szkolenie</option>
                          <option value="inne">Inne</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Preferowany termin
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Liczba osób
                        </label>
                        <input
                          type="number"
                          name="people"
                          value={formData.people}
                          onChange={handleChange}
                          min="1"
                          max="50"
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                          placeholder="2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Wiadomość
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-vertical"
                        placeholder="Opisz swoje potrzeby i oczekiwania..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Lokalizacja
                    </span>
                  </h3>
                  
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-white/70 mb-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p>Mapa lokalizacji</p>
                      <p className="text-sm">Roztoczański Park Narodowy</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-white/80">
                      <span className="text-cyan-400 mr-3">🚗</span>
                      <span>Parking bezpłatny dla klientów</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-cyan-400 mr-3">🏪</span>
                      <span>Szatnia i toalety na miejscu</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <span className="text-cyan-400 mr-3">☕</span>
                      <span>Bar kawowy w sezonie</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Śledź nas
                    </span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                      >
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>
                        <span className="text-white group-hover:text-cyan-300 transition-colors">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Często Zadawane Pytania
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <span className="text-cyan-400 mr-3">❓</span>
                    {faq.question}
                  </h3>
                  <p className="text-white/80 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-white/70 mb-6">
                Nie znalazłeś odpowiedzi na swoje pytanie?
              </p>
              <a 
                href="tel:+48123456789"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                <span className="mr-2">📞</span>
                Zadzwoń do nas
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
        select option {
          background-color: #1e293b;
          color: white;
        }
      `}</style>
    </>
  );
}