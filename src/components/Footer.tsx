
import React from 'react';
import { Radio, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Radio className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">LEX Radio</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              La emisora que conecta corazones a través de la música. 
              Transmitiendo los mejores sonidos las 24 horas del día.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Inicio</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Programas</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Música</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Noticias</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Programas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programas Populares</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Buenos Días LEX</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Música Sin Límites</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Tarde de Rock</a></li>
              <li><a href="#" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Noches de Jazz</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-white/60 text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-white/60 text-sm">info@lexradio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-white/60 text-sm">123 Radio Street, Music City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 LEX Radio. Todos los derechos reservados. | 
            <a href="#" className="hover:text-purple-400 transition-colors ml-1">Política de Privacidad</a> | 
            <a href="#" className="hover:text-purple-400 transition-colors ml-1">Términos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
