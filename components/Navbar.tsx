import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// SENİN KLASÖR YAPINA GÖRE DOĞRU YOL BUDUR:
import logo from '../assets/nobg-pedagojikuykulogo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '#' },
    { name: 'Hakkımda', href: '#about' },
    { name: 'Hizmetlerim', href: '#services' },
    { name: 'Makaleler', href: '#articles' },
    { name: 'Eğitimler', href: '#pricing' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* LOGO VE MARKA İSMİ ALANI */}
          <div className="flex items-center gap-3">
            {/* Logo Resmi */}
            <img
              src={logo}
              alt="Pedagojik Uyku Logo"
              className="w-12 h-12 object-contain"
            />

            {/* Marka İsmi */}
            <div className="text-2xl font-bold text-brand-blue font-sans">
              Pedagojik <span className="text-brand-darkBeige">Uyku</span>
            </div>
          </div>

          {/* Masaüstü Menü Linkleri */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-darkBeige font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-blue">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü Açılır Penceresi */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 font-medium py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;