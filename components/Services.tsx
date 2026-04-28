import React from 'react';
import { Calendar, Clock, Phone, MonitorPlay, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Hızlı Destek',
    description: '30 dakikalık hızlı değerlendirme ile durum tespiti yapıyor, size en uygun yol haritasını birlikte belirliyoruz.',
    icon: MessageCircle
  },
  {
    title: 'Uyku Danışmanlığı',
    description: 'Kapsamlı ve uzun süreli destek ile bebeğinizin uyku düzenini oluşturuyoruz. 2-3 hafta süren birebir takip.',
    icon: Calendar
  },
  {
    title: 'Saat Düzenleme',
    description: '1 haftalık yoğun program ile bebeğinizin biyolojik saatine uygun rutinler oluşturuyoruz.',
    icon: Clock
  },
  {
    title: 'Canlı Görüşme',
    description: '1 saatlik detaylı telefon veya video görüşmesi ile sorularınızı yanıtlıyor, nokta atışı çözümler sunuyoruz.',
    icon: Phone
  },
  {
    title: 'Eğitim Paneli',
    description: 'Online eğitim platformu ile bilgilere her an erişim imkanı. Videolar ve dokümanlar.',
    icon: MonitorPlay
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-blue text-white relative overflow-hidden">

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-brand-darkBeige font-bold tracking-widest text-sm mb-3">HİZMETLERİMİZ</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-white">Nasıl Yardımcı Olabilirim?</h2>
          <p className="text-indigo-200/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Her ailenin ihtiyacına uygun, bilimsel ve sevgi dolu çözümlerle yanınızdayız.
          </p>
        </div>

        {/* Grid Layout - Improved Spacing */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href="#pricing"
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-brand-darkBeige/50 hover:bg-white/10 transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col items-start text-left hover:-translate-y-1 cursor-pointer block"
            >
              <div className="w-14 h-14 bg-brand-darkBeige/20 rounded-2xl flex items-center justify-center mb-6 text-brand-darkBeige group-hover:text-white group-hover:bg-brand-darkBeige transition-all duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold mb-3 font-display text-white">{service.title}</h3>
              <p className="text-indigo-100/70 text-base leading-relaxed mb-4">
                {service.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#pricing" className="inline-flex items-center justify-center bg-brand-darkBeige hover:bg-[#a67c52] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-brand-darkBeige/20">
            Tüm Paketleri İncele
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;