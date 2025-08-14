import React from 'react';
import { Image, Play, Camera } from 'lucide-react';

const Media = () => {
  return (
    <div className="font-inter pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-dark mb-6">
              Galerie de nos moments musicaux.
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les moments forts de notre école à travers notre galerie photo et vidéo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Photo placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group hover:shadow-lg transition-all duration-300 animate-fade-in"
              >
                <Camera className="h-12 w-12 text-primary/50 group-hover:text-primary transition-colors duration-300" />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <p className="font-inter text-gray-600 mb-6">
              Nos photos et vidéos seront bientôt disponibles. 
              Restez connectés pour découvrir les moments magiques de notre école !
            </p>
            <div className="inline-flex items-center space-x-2 text-primary">
              <Image className="h-5 w-5" />
              <span className="font-medium">Galerie en cours de préparation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Photos
              </h3>
              <p className="font-inter text-gray-600">
                Découvrez les moments forts de nos cours, concerts et événements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Vidéos
              </h3>
              <p className="font-inter text-gray-600">
                Regardez nos performances et suivez les progrès de nos élèves.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                Coulisses
              </h3>
              <p className="font-inter text-gray-600">
                Plongez dans l'atmosphère unique de notre école de musique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;