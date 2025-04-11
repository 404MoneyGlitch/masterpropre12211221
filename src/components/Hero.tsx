import React, { useEffect, useState } from 'react';
import { MapPin, Phone } from 'lucide-react';

const rollingTexts = [
  "Expert en nettoyage",
  "100% Satisfaction Garantie",
  "Solutions de nettoyage éco-responsable"
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rollingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-primary-50 rounded-full text-primary-600 text-sm font-medium mb-4">
              Éco-responsable & Durable
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-950 leading-tight">
              Rendez Votre Espace<br />
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Naturellement Propre</span>
            </h1>
            <div className="h-8 overflow-hidden">
              <p className="text-primary-600 text-xl transition-transform duration-500">
                {rollingTexts[currentTextIndex]}
              </p>
            </div>
            <p className="text-dark-600 text-lg max-w-xl">
              Faites le choix d'un nettoyage professionnel engagé, garantissant une propreté éclatante tout en adoptant une démarche éco-responsable.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-primary-100">
                Devis gratuit et sans engagement
              </button>
              <a href="#services" className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-50 transition-all hover:shadow-lg inline-block">
                En Savoir Plus
              </a>
            </div>
            
            <div className="flex flex-col space-y-3 py-4">
              <div className="flex items-center space-x-2 text-dark-600">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span>Paris et Hauts-de-Seine (92)</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-600">
                <Phone className="h-5 w-5 text-primary-600" />
                <span>+33 6 59 12 50 31</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary-600">100+</div>
                <div className="text-dark-600">Clients Satisfaits</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-dark-600">Écologique</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary-600">4,8 ★</div>
                <div className="text-dark-600">Note</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-50 animate-pulse delay-150"></div>
            <img 
              src="/pictures/Hero.png"
              alt="Nettoyage écologique"
              className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300 border border-primary-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;