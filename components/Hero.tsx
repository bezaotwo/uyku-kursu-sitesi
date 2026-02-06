import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-white">

      {/* Background Subtle Gradient - Removed Blob Animations for Cleaner Look */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-beige/10 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
          >
            {/* Badge - Refined */}
            <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-darkBeige/20 px-5 py-2 rounded-full shadow-soft hover:shadow-md transition-shadow cursor-default">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-semibold text-brand-blue tracking-wide">Mutlu Aileler</span>
            </div>

            {/* Heading - Utilizing new 'font-display' */}
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-blue leading-[1.1] tracking-tight">
              Bebeğinizin <br />
              <span className="text-brand-darkBeige relative inline-block">
                Huzurlu Uykusu
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-darkBeige/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span> <br />
              İçin Yanınızdayız
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Annelik yolculuğunuzda yalnız değilsiniz! Ağlatmadan, sevgiyle ve güvenli bağlanma temelli yöntemlerle bebeklerinize sağlıklı uyku alışkanlıkları kazandırıyoruz.
            </p>

            {/* Buttons - Improved Sizes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                Hemen Randevu Al
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="bg-white text-brand-blue px-8 py-4 rounded-2xl font-bold text-lg border border-gray-200 hover:border-brand-blue hover:bg-gray-50 transition-all shadow-soft flex items-center justify-center text-center cursor-pointer"
              >
                Eğitimleri İncele
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Container - Cleaner Border Radius */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-blue/10">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&h=1000&auto=format&fit=crop"
                alt="Anne ve uyuyan bebek"
                className="w-full h-auto object-cover"
              />

              {/* Overlay Gradient for depth if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Abstract Shape - Simplified */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-brand-beige/30 rounded-[2.5rem] -z-10"></div>

            {/* Floating Element - Cleaner Shadow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -left-8 bg-white p-4 rounded-2xl shadow-soft-lg z-20 flex items-center gap-3 border border-white/50 backdrop-blur-sm"
            >
              <div className="bg-brand-lightBlue/50 p-2 rounded-xl">
                <span className="text-2xl">🌙</span>
              </div>
              <div className="pr-2">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Uyku Zamanı</p>
                <p className="text-brand-blue font-bold">Huzurlu Geceler</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;