import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Maxime Sellem",
    rating: 5,
    date: "Février 2025",
    text: "Résultat impeccable suite a mon canapé qui était dans très sal ! Très professionnel. Je recommande",
    image: "/pictures/M.png"
  },
  {
    name: "Axelle Tabary",
    rating: 5,
    date: "Février 2025",
    text: "Excellent travail, très satisfait du résultat, de la ponctualité et du professionnalisme. Je recommande",
    image: "/pictures/A.png"
  },
  {
    name: "Lamia B",
    rating: 5,
    date: "Janvier 2025",
    text: "Prestation nettoyage de canapé méridienne parfaitement effectuée. Très professionnel. Je recommande",
    image: "/pictures/L.png"
  },
  {
    name: "Emi Lie",
    rating: 5,
    date: "Décembre 2024",
    text: "Canapé tout propre, merci beaucoup !",
    image: "/pictures/E.png"
  },
  {
    name: "KMT IMMO",
    rating: 5,
    date: "Décembre 2024",
    text: "Excellent, je suis content du résultat",
    image: "/pictures/K.png"
  },
  {
    name: "Oumou kaltoum Diara",
    rating: 5,
    date: "Décembre 2024",
    text: "Mon canapé est désormais comme neuf, toutes les tâches du quotidien ont disparu grâce à un nettoyage impeccable. Francis est une personne d'une grande méticulosité et ponctuel.",
    image: "/pictures/O.png"
  }
];

const Opinion = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const visibleReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-gray-800">Avis Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ce que disent nos clients</h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-2">4.8 sur 5</p>
          <p className="text-gray-600">Basé sur 50+ avis</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleReviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary-200 transform -scale-x-100" />
                  <p className="text-gray-600 italic pl-6">{review.text}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google Logo"
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-gray-500">Vérifié sur Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-primary-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600" />
          </button>
          <button
            onClick={handleNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-primary-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-primary-600" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-primary-600 w-4'
                    : 'bg-primary-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?sca_esv=5d466d0b992978df&sxsrf=AHTn8zrgxB3JP7lhJH8h6U18Xq8r9Pt5Kg:1740579366309&uds=ABqPDvztZD_Nu18FR6tN
Pw2cK_RR89pOv_b9UiDu0Q7IFvoqBUh4KY7agtUNZu39YaCdZnSoe3-CQY8mj764PTYBOrCmO_Ik2ftfoIRu4O_JYXcmv2JjLZofSPW-GmhBM9kS_EQkC6pO&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzd4FPu5QhpKMm5SNUmKmMIOcceK0gZBNdfImnrQms0zrG0tn48PWjwJ4aAjfuF31Xtyy_ag%3D&q=MasterPropre+Avis&sa=X&ved=2ahUKEwiG99O2w-GLAxWWRKQEHYoJClIQ3PALegQISRAF&biw=1920&bih=945"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <span>Voir tous les avis Google</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Opinion;