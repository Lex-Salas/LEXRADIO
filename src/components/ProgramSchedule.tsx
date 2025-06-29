
import React from 'react';
import { Clock, Mic, Calendar } from 'lucide-react';

const ProgramSchedule = () => {
  const programs = [
    {
      time: "06:00 - 10:00",
      name: "Buenos Días LEX",
      host: "María González",
      description: "El mejor despertar con música y noticias",
      isLive: true
    },
    {
      time: "10:00 - 14:00",
      name: "Música Sin Límites",
      host: "Carlos Rodríguez",
      description: "Los mejores hits de todos los tiempos",
      isLive: false
    },
    {
      time: "14:00 - 18:00",
      name: "Tarde de Rock",
      host: "Ana Martín",
      description: "Rock clásico y moderno",
      isLive: false
    },
    {
      time: "18:00 - 22:00",
      name: "Noches de Jazz",
      host: "Luis Herrera",
      description: "Los mejores sonidos del jazz",
      isLive: false
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calendar className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Programación de Hoy</h2>
      </div>

      <div className="space-y-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border transition-all ${
              program.isLive
                ? 'bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-400 font-medium">{program.time}</span>
                  {program.isLive && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      EN VIVO
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{program.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Mic className="h-4 w-4 text-white/60" />
                  <span className="text-white/80">{program.host}</span>
                </div>
                <p className="text-white/60 text-sm">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSchedule;
