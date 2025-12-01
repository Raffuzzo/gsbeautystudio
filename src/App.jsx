import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react';

const slides = [
  { url: '/src/assets/images/studio_1.jpeg', alt: 'Studio GS Beauty' },
  { url: '/src/assets/images/studio_2.jpeg', alt: 'Studio GS Beauty' },
  { url: '/src/assets/images/studio_3.jpeg', alt: 'Studio GS Beauty' },
  { url: '/src/assets/images/studio_4.jpeg', alt: 'Studio GS Beauty' },
  { url: '/src/assets/images/studio_5.jpeg', alt: 'Sala trattamenti' },
  { url: '/src/assets/images/mani_1.jpeg', alt: 'Manicure' },
  { url: '/src/assets/images/mani_2.jpeg', alt: 'Nail art rosa' },
  { url: '/src/assets/images/mani_3.jpeg', alt: 'Unghie gel' },
  { url: '/src/assets/images/mani_4.jpeg', alt: 'French manicure' },
  { url: '/src/assets/images/occhi_1.jpeg', alt: 'Extension ciglia' },
  { url: '/src/assets/images/occhi_2.jpeg', alt: 'Ciglia volume' },
  { url: '/src/assets/images/occhi_3.jpeg', alt: 'Occhi' },
  { url: '/src/assets/images/viso_1.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_2.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_3.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_4.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_5.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_6.jpeg', alt: 'Trattamento viso' },
  { url: '/src/assets/images/viso_7.jpeg', alt: 'Pulizia viso' },
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll verso le sezioni
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = targetId === 'slider' ? 0 : 20; // No offset per slider, 20px per altri
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappNumber = "393315075192";
  const whatsappMessage = encodeURIComponent(
    "Ciao! Vorrei prenotare un appuntamento presso GS Beauty Studio 💅"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-rose-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* NAVBAR FIXED - ottimizzata per mobile */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl shadow-lg z-50 border-b border-pink-100/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-4 sm:py-6">

            {/* LOGO GRANDE E VALORIZZATO */}
            <a
              href="#slider"
              onClick={(e) => scrollToSection(e, 'slider')}
              className={`flex flex-col items-center gap-2 sm:gap-3 group transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl sm:blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110"></div>
                
                {/* Container logo */}
                <div className="relative bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 rounded-full p-1.5 sm:p-2 shadow-2xl group-hover:shadow-pink-300/50 transition-all duration-500 group-hover:scale-105">
                  <div className="bg-white rounded-full p-2 sm:p-3">
                    <img
                      src="/src/assets/images/gsLogo.svg"
                      alt="GS Beauty Studio Logo"
                      className="h-24 w-24 sm:h-36 sm:w-36 md:h-44 md:w-44 transition-transform duration-500 group-hover:rotate-6"
                    />
                  </div>
                </div>
                
                {/* Sparkles */}
                <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-pink-400 animate-pulse" size={18} />
                <Sparkles className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 text-rose-400 animate-pulse" size={16} style={{animationDelay: '0.5s'}} />
              </div>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent text-center drop-shadow-lg tracking-tight group-hover:tracking-wide transition-all duration-500 px-2">
                GS Beauty Studio
              </h1>
              <p className="text-pink-400 text-xs sm:text-sm font-medium -mt-1 sm:-mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block">✨ Il tuo centro estetico di fiducia ✨</p>
            </a>

            {/* MENU MOBILE OTTIMIZZATO */}
            <ul className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 w-full justify-center px-2">
              {[
                { href: "slider", label: "Home" },
                { href: "mappa", label: "Dove Sono" },
                { href: "prenota", label: "Contatti" },
              ].map(({ href, label }, idx) => (
                <li key={href} className={`transition-all duration-700 flex-1 sm:flex-initial ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 100 + 200}ms`}}>
                  <a
                    href={`#${href}`}
                    onClick={(e) => scrollToSection(e, href)}
                    className="block w-full text-center px-3 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/60 backdrop-blur-md border-2 border-pink-300/50 text-pink-600 font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-pink-300/50 active:scale-95"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* SLIDER - Esattamente qui arriva "Home" */}
      <section id="slider" className="pt-44 sm:pt-52 md:pt-60 relative scroll-mt-0">
        <div
          className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden rounded-2xl sm:rounded-3xl mx-3 sm:mx-4 shadow-2xl"
          onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
          onTouchEnd={() => {
            if (touchStart - touchEnd > 50) {
              setCurrentSlide((prev) => (prev + 1) % slides.length);
            } else if (touchEnd - touchStart > 50) {
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            }
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-pink-900/20" />
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 w-6 sm:w-8 h-2 sm:h-2.5 shadow-lg shadow-pink-300/50'
                    : 'bg-white/70 hover:bg-white/90 w-2 sm:w-2.5 h-2 sm:h-2.5 hover:scale-110'
                }`}
                aria-label={`Vai a slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Cards servizi */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { emoji: '💅', title: 'Manicure & Pedicure', desc: 'Trattamenti professionali per mani e piedi perfetti', delay: 0 },
            { emoji: '👁️', title: 'Ciglia & Sopracciglia', desc: 'Extension ciglia e design sopracciglia perfetto', delay: 100 },
            { emoji: '🌸', title: 'Trattamenti Viso', desc: 'Cura della pelle con prodotti premium', delay: 200 }
          ].map((service, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-pink-100 hover:border-pink-300 group hover:-translate-y-1 active:scale-95 ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{
                animation: isLoaded ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                animationDelay: `${service.delay + 400}ms`,
                opacity: isLoaded ? 1 : 0
              }}
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{service.emoji}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAPPA - Esattamente qui arriva "Dove Sono" */}
      <section id="mappa" className="py-10 sm:py-16 relative scroll-mt-5">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
            <MapPin className="text-pink-500 group-hover:scale-110 transition-transform" size={28} />
            <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Dove Siamo</h2>
          </div>
          <p className="text-gray-600 mb-6 sm:mb-10 text-base sm:text-lg text-center max-w-2xl mx-auto leading-relaxed px-2">Vieni a trovarmi nel mio nuovo studio a Cesate(MI)</p>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white group-hover:border-pink-200 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.52695744049785!2d9.076535740711536!3d45.587754559090584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786945171f9dd05%3A0xba74b9980b2cda33!2sVia%20dei%20Mille%2C%208%2C%2020024%20Cesate%20MI!5e0!3m2!1sit!2sit!4v1761225190693!5m2!1sit!2sicd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="GS Beauty Studio Location"
                className="sm:h-[400px] lg:h-[450px]"
              />
            </div>
          </div>
          
          <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2">
            <span className="text-xl sm:text-2xl">📍</span>
            <span className="font-semibold text-pink-600">Clicca sulla mappa</span>
            <span>per aprire Google Maps</span>
          </p>
        </div>
      </section>

      {/* PRENOTA - Esattamente qui arriva "Contatti" */}
      <section id="prenota" className="py-10 sm:py-16 relative scroll-mt-5">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent px-2">Prenota il Tuo Appuntamento</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">Contattaci su WhatsApp per prenotare o per maggiori informazioni</p>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-2xl hover:shadow-green-300/50 transform hover:scale-105 active:scale-95 transition-all duration-300 mb-10 sm:mb-16 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <MessageCircle size={24} className="relative z-10 group-hover:rotate-12 transition-transform sm:w-7 sm:h-7" />
            <span className="relative z-10">Prenota su WhatsApp</span>
          </a>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-pink-200 max-w-md mx-auto hover:shadow-pink-200/50 transition-all duration-500 hover:-translate-y-1">
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <Clock className="text-pink-500" size={24} />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Orari</h3>
            </div>
            <div className="space-y-3 sm:space-y-4 text-center">
              <p className="text-gray-700 text-base sm:text-lg"><span className="font-bold text-pink-600">Lunedì</span> 9:00 - 15:00</p>
              <p className="text-gray-700 text-base sm:text-lg"><span className="font-bold text-pink-600">Mar- Ven:</span> 9:00 - 19:00</p>
              <p className="text-gray-700 text-base sm:text-lg"><span className="font-bold text-pink-600">Sabato:</span> 9:00 - 15:00</p>
              <div className="pt-3 sm:pt-4 border-t-2 border-pink-100">
                <p className="text-pink-500 font-bold text-base sm:text-lg">Domenica: Chiuso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 py-8 sm:py-10 text-center border-t-2 border-pink-200/50 mt-10 sm:mt-16">
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2 sm:mb-3">GS Beauty Studio</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 px-4">Il tuo centro estetico di fiducia</p>
        <p className="text-xs sm:text-sm text-gray-500 px-4">© {new Date().getFullYear()} GS Beauty Studio - Tutti i diritti riservati</p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;