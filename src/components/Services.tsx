import React from 'react';
import { Building2, Sofa, Boxes, Home, Construction, PartyPopper, Building } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nos Services</h2>
          <p className="text-gray-600 text-lg">
            Des solutions de nettoyage professionnelles adaptées à vos besoins, avec un accent sur les 
            pratiques écologiques et des résultats exceptionnels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Building2 />}
            title="Entretien des locaux commerciaux et bureaux"
            description="Services de nettoyage professionnels pour espaces commerciaux et bureaux, garantissant un environnement de travail impeccable."
            image="/pictures/Services1.png"
          />
          <ServiceCard
            icon={<Sofa />}
            title="Nettoyage canapé et tapis"
            description="Services de nettoyage en profondeur pour canapés et tapis, restaurant leur beauté et leur fraîcheur."
            image="/pictures/Services2.png"
          />
          <ServiceCard
            icon={<Boxes />}
            title="Nettoyage après déménagement"
            description="Services de nettoyage complet après déménagement, assurant que l'espace soit prêt pour les nouveaux occupants."
            image="/pictures/Services3.png"
          />
          <ServiceCard
            icon={<Home />}
            title="Ménage à domicile"
            description="Services de nettoyage régulier adaptés à vos besoins et à votre emploi du temps."
            image="/pictures/Services4.png"
          />
          <ServiceCard
            icon={<Construction />}
            title="Nettoyage après travaux et dégâts des eaux"
            description="Services de nettoyage spécialisés après travaux ou dégâts des eaux."
            image="/pictures/Services5.png"
          />
          <ServiceCard
            icon={<PartyPopper />}
            title="Nettoyage après événements"
            description="Services de nettoyage professionnels après événements et fêtes."
            image="/pictures/Services6.png"
          />
          <ServiceCard
            icon={<Building />}
            title="Nettoyage Co-propriété"
            description="Services de nettoyage régulier des parties communes dans les immeubles résidentiels."
            image="/pictures/Services7.png"
          />
          <ServiceCard
            icon={<Building2 />}
            title="Entretien de propriétés privées"
            description="Services de nettoyage complets pour propriétés privées et domaines."
            image="/pictures/Services8.png"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
      <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <div className="h-8 w-8 text-green-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <img 
        src={image}
        alt={title}
        className="mt-4 rounded-lg w-full h-48 object-cover"
      />
    </div>
  );
};

export default Services;