import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  return (
    <div className="font-inter pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-dark mb-6">
              Nos événements à venir.
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Le contenu sera bientôt disponible. Restez connectés pour découvrir 
              nos prochains concerts, masterclasses et événements musicaux !
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
              <Calendar className="h-16 w-16 text-primary" />
            </div>
            <h2 className="font-poppins font-semibold text-2xl text-dark mb-4">
              Événements en préparation
            </h2>
            <p className="font-inter text-gray-600 max-w-md mx-auto">
              Notre équipe travaille actuellement sur la programmation de nos prochains événements. 
              Revenez bientôt pour les découvrir !
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Concerts
              </h3>
              <p className="font-inter text-gray-600">
                Des concerts réguliers mettant en avant nos élèves et professeurs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Masterclasses
              </h3>
              <p className="font-inter text-gray-600">
                Des sessions spécialisées avec des musiciens professionnels.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Événements
              </h3>
              <p className="font-inter text-gray-600">
                Des événements communautaires et des sorties musicales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;