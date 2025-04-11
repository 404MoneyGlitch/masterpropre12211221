import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Calendar, Building2, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = {
    paris: {
      name: "Paris",
      areas: [
        { name: "Paris 6e", code: "75006" },
        { name: "Paris 7e", code: "75007" },
        { name: "Paris 8e", code: "75008" },
        { name: "Paris 15e", code: "75015" },
        { name: "Paris 16e", code: "75016" },
        { name: "Paris 17e", code: "75017" },
      ]
    },
    hautsdeseine: {
      name: "Hauts-de-Seine (92)",
      areas: [
        { name: "Boulogne-Billancourt", code: "92100" },
        { name: "Neuilly-sur-Seine", code: "92200" },
        { name: "Issy-les-Moulineaux", code: "92130" },
        { name: "Levallois-Perret", code: "92300" },
        { name: "Suresnes", code: "92150" },
        { name: "Clamart", code: "92140" },
        { name: "Montrouge", code: "92120" },
        { name: "Colombes", code: "92700" },
        { name: "Rueil-Malmaison", code: "92500" },
        { name: "Clichy", code: "92110" },
        { name: "Puteaux (La Défense)", code: "92800" },
        { name: "Meudon", code: "92190 / 92360" },
      ]
    },
    yvelines: {
      name: "Yvelines (78)",
      areas: [
        { name: "Versailles", code: "78000" },
        { name: "Le Chesnay-Rocquencourt", code: "78150" },
        { name: "Saint-Germain-en-Laye", code: "78100" },
        { name: "Maisons-Laffitte", code: "78600" },
      ]
    }
  };

  const toggleRegion = (region: string) => {
    setActiveRegion(activeRegion === region ? null : region);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Column */}
              <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-green-600 to-green-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contactez-nous</h2>
                <p className="text-green-100 mb-6 sm:mb-8 text-sm sm:text-base">
                  Prêt à découvrir la différence du nettoyage écologique ? Contactez-nous aujourd'hui 
                  pour une consultation et un devis gratuits.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <Phone className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">+33 6 59 12 50 31</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <Mail className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">masterpropre92@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-green-500/50 p-2 sm:p-3 rounded-full">
                      <MapPin className="text-white h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base">Meudon, 92190</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <button className="w-full bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-semibold">Prendre rendez-vous sans engagement</span>
                  </button>
                </div>
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a 
                      href="https://www.instagram.com/masterpropre92/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-green-500/50 p-2 sm:p-3 rounded-full hover:bg-green-400 transition-colors"
                    >
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </a>
                    <a 
                      href="https://www.facebook.com/people/MasterPropre/100090419220625/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-green-500/50 p-2 sm:p-3 rounded-full hover:bg-green-400 transition-colors"
                    >
                      <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-6 sm:p-8 md:p-12 bg-white">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 sm:gap-3">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    Zones de Service
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(regions).map(([key, region]) => (
                      <div key={key} className="rounded-xl overflow-hidden border border-green-100 hover:border-green-200 transition-colors">
                        <button
                          onClick={() => toggleRegion(key)}
                          className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                            activeRegion === key 
                              ? 'bg-green-50 text-green-700' 
                              : 'bg-white text-gray-800 hover:bg-green-50/50'
                          }`}
                        >
                          <span className="font-semibold">{region.name}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              activeRegion === key ? 'rotate-180 text-green-600' : 'text-gray-400'
                            }`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            activeRegion === key
                              ? 'grid-rows-[1fr] opacity-100'
                              : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="p-6 bg-white">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {region.areas.map((area) => (
                                  <div
                                    key={area.code}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                                  >
                                    <MapPin className="h-4 w-4 text-green-500 group-hover:text-green-600 flex-shrink-0" />
                                    <div className="flex flex-col">
                                      <span className="text-gray-800 group-hover:text-gray-900">{area.name}</span>
                                      <span className="text-sm text-gray-500 group-hover:text-gray-600">{area.code}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <p className="text-sm text-gray-700 text-center">
                        Vous ne trouvez pas votre zone ? Contactez-nous pour vérifier la disponibilité dans votre secteur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;