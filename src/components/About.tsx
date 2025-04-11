import React from 'react';
import { Shield, Droplets, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-950 mb-6">À Propos de Masterpropre</h2>
          <p className="text-dark-600 text-lg">
            Professionnel dans les solutions de nettoyage durables depuis 2020. Notre engagement envers l'environnement 
            guide chaque aspect de notre service, des produits que nous choisissons aux méthodes que nous employons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative">
            <img 
              src="/pictures/Aboutus.png"
              alt="Nos valeurs"
              className="rounded-2xl shadow-xl relative z-10 border border-primary-100"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-100/50 rounded-2xl -z-10 blur-sm"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-dark-950 mb-4">Pourquoi Choisir Masterpropre ?</h3>
            <p className="text-dark-600">
              Chez Masterpropre, nous croyons en l'excellence du service de nettoyage tout en protégeant notre environnement. 
              Notre engagement pour la durabilité guide toutes nos actions, des produits écologiques que nous utilisons à 
              nos méthodes de nettoyage économes en eau.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg transform hover:scale-105 transition-transform border border-primary-100 shadow-sm">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-dark-600">Années d'Expérience</div>
              </div>
              <div className="bg-white p-4 rounded-lg transform hover:scale-105 transition-transform border border-primary-100 shadow-sm">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-dark-600">Taux de Satisfaction</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Shield className="text-primary-600 h-5 w-5" />
                </div>
                <span className="text-dark-600">Produits de nettoyage 100% éco-responsable</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Droplets className="text-primary-600 h-5 w-5" />
                </div>
                <span className="text-dark-600">Techniques d'économie d'eau</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Award className="text-primary-600 h-5 w-5" />
                </div>
                <span className="text-dark-600">Professionnels certifiés en nettoyage vert</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <div className="bg-primary-50 p-2 rounded-full">
                  <Users className="text-primary-600 h-5 w-5" />
                </div>
                <span className="text-dark-600">Plans de nettoyage personnalisés</span>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <h4 className="text-xl font-semibold text-dark-950">Nos Valeurs</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                  <h5 className="font-semibold text-primary-600 mb-2">Durabilité</h5>
                  <p className="text-dark-600 text-sm">Engagés dans des pratiques et produits durables</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                  <h5 className="font-semibold text-primary-600 mb-2">Excellence</h5>
                  <p className="text-dark-600 text-sm">Des résultats exceptionnels à chaque intervention</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                  <h5 className="font-semibold text-primary-600 mb-2">Innovation</h5>
                  <p className="text-dark-600 text-sm">Utilisation des dernières technologies</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                  <h5 className="font-semibold text-primary-600 mb-2">Intégrité</h5>
                  <p className="text-dark-600 text-sm">Service honnête et transparent</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-primary-100">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">Notre Mission</h3>
                <p className="text-dark-600 leading-relaxed">
                  Fournir des services de nettoyage exceptionnels tout en promouvant la durabilité environnementale. 
                  Nous nous efforçons de créer des espaces plus propres et plus sains pour nos clients tout en minimisant notre impact éconologique grâce à des solutions de nettoyage vertes innovantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;