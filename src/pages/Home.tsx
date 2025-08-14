import React, { useEffect } from 'react';
import { Users, Calendar, Heart, Music2, Star, Award } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Star,
      title: 'Des professeurs passionnés',
      description: 'Notre équipe pédagogique expérimentée vous accompagne avec passion'
    },
    {
      icon: Calendar,
      title: 'Des événements toute l\'année',
      description: 'Concerts, masterclasses et événements pour tous les niveaux'
    },
    {
      icon: Heart,
      title: 'Une ambiance conviviale',
      description: 'Un environnement chaleureux propice à l\'apprentissage musical'
    }
  ];

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.4), rgba(37, 99, 235, 0.2)), url(https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in space-y-6">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Exprimez la musique <br />qui est en vous.
            </h1>
            <p className="font-inter text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Cours de musique pour tous les âges et tous les niveaux.
            </p>
            <div className="mt-8">
              <a
                href="#features"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Découvrir nos cours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-on-scroll text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-dark mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4">
              Nos prochains événements
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos concerts, masterclasses et événements à venir. 
              Rejoignez notre communauté musicale dynamique !
            </p>
          </div>
          
          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Cards Placeholder */}
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-dark mb-2">
                    Événement à venir
                  </h3>
                  <p className="font-inter text-gray-600 mb-4">
                    Les détails seront bientôt disponibles. Restez connectés !
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Date à confirmer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;