
import React from 'react';
import { Play, Users, Headphones, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            LEX <span className="text-purple-400">Radio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            La mejor música, las mejores conversaciones, 24/7
          </p>
          <p className="text-lg text-white/60 mb-12">
            Conectando corazones a través de la música desde 2020
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">50K+</h3>
              <p className="text-white/60">Oyentes activos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Headphones className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-white/60">Transmisión continua</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Music className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">10K+</h3>
              <p className="text-white/60">Canciones en biblioteca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
