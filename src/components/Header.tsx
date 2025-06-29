
import React, { useState } from 'react';
import { Menu, X, Radio, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Radio className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">LEX Radio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-purple-400 transition-colors">
              Inicio
            </a>
            <a href="#programas" className="text-white hover:text-purple-400 transition-colors">
              Programas
            </a>
            <a href="#musica" className="text-white hover:text-purple-400 transition-colors">
              Música
            </a>
            <a href="#contacto" className="text-white hover:text-purple-400 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-white/80">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-1 text-white/80">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@lexradio.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white hover:text-purple-400 transition-colors">
                Inicio
              </a>
              <a href="#programas" className="text-white hover:text-purple-400 transition-colors">
                Programas
              </a>
              <a href="#musica" className="text-white hover:text-purple-400 transition-colors">
                Música
              </a>
              <a href="#contacto" className="text-white hover:text-purple-400 transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
