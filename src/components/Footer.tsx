import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/pictures/Logo.png" alt="Masterpropre Logo" className="h-12 w-auto" />
              <span className="text-2xl font-semibold text-white">Masterpropre</span>
            </div>
            <p className="text-gray-300 mb-6">
              Expert des solutions de nettoyage écologiques pour un avenir durable.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Liens Rapides</h4>
            <ul className="space-y-4">
              {[
                { href: '#home', label: 'Accueil' },
                { href: '#about', label: 'À Propos' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors inline-block transform hover:translate-x-2 duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Nos Services</h4>
            <ul className="space-y-4">
              {[
                'Entretien des locaux',
                'Nettoyage canapé',
                'Nettoyage après déménagement',
                'Ménage à domicile'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-primary-400 transition-colors inline-block transform hover:translate-x-2 duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Masterpropre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;