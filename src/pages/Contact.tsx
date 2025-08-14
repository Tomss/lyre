import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['123 Rue de la Musique', '75001 Paris, France']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: ['01 23 45 67 89']
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['contact@ecolelyre.fr', 'info@ecolelyre.fr']
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: ['Lun-Ven: 9h-20h', 'Sam: 9h-18h', 'Dim: Fermé']
    }
  ];

  return (
    <div className="font-inter pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-dark mb-6">
              Contactez-nous.
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Nous sommes là pour répondre à toutes vos questions sur nos cours, 
              nos événements et notre école de musique.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-inter text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder and Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-80 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-3xl text-dark mb-6">
                Venez nous rendre visite
              </h2>
              <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                Notre école de musique est située au cœur de Paris, dans un quartier 
                facilement accessible en transport en commun. Nous disposons d'espaces 
                d'accueil confortables pour les parents et les élèves.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/20 p-2 rounded-full mt-1">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-dark">Transport</h4>
                    <p className="font-inter text-gray-600 text-sm">
                      Métro ligne 1 et 4, Bus 21, 27, 39
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-full mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-dark">Rendez-vous</h4>
                    <p className="font-inter text-gray-600 text-sm">
                      Sur rendez-vous pour les visites et inscriptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;