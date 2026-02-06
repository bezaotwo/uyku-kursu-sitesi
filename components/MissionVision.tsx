import React from 'react';
import { Target, Lightbulb, Baby, ShieldCheck } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-cream/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-beige/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lightBlue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission Column */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-brand-darkBeige hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-50 text-brand-darkBeige rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-brand-blue">Misyonumuz</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              Pedagogikuyku.com’un misyonu; 0–4 yaş çocukların uyku ve tuvalet eğitimi süreçlerini, gelişimsel özellikleri ve bireysel ihtiyaçları doğrultusunda ele alarak, ailelere pedagojik, bağlanma temelli ve bilimsel danışmanlık sunmaktır.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-brand-cream rounded-xl">
                 <Baby className="text-brand-darkBeige flex-shrink-0 mt-1" size={20} />
                 <p className="text-sm text-gray-600">
                   Her çocuğun gelişim hızının ve düzeninin farklı olduğu bilinciyle; tek tip yöntemler yerine, çocuğun yaşına, gelişim basamağına ve aile dinamiklerine uygun çözümler üretmeyi amaçlıyoruz.
                 </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-brand-cream rounded-xl">
                 <ShieldCheck className="text-brand-darkBeige flex-shrink-0 mt-1" size={20} />
                 <p className="text-sm text-gray-600">
                   Pedagojik yaklaşımımızda amacımız; aileleri suçlayan ya da zorlayıcı yöntemler uygulayan bir anlayıştan uzak durarak, aileleri güçlendiren, çocuğun duygusal güvenliğini koruyan ve sürdürülebilir düzenler oluşturmaktır.
                 </p>
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-brand-blue hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-50 text-brand-blue rounded-2xl flex items-center justify-center">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl font-bold text-brand-blue">Vizyonumuz</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              Pedagogikuyku.com olarak vizyonumuz; 0–4 yaş çocukların uyku ve tuvalet eğitimi süreçlerinde pedagojik bakış açısını merkeze alan, güvenilir ve bilimsel bir danışmanlık platformu olmaktır.
            </p>

            <h3 className="font-semibold text-brand-blue mb-4">Uzun vadede hedeflerimiz;</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-600">Uyku ve tuvalet eğitiminin yalnızca davranış değil, gelişimsel bir süreç olduğu bilincini yaygınlaştırmak.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-600">Ebeveynlerin doğru bilgiye kolayca ulaşabildiği bir platform olmak.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-600">Eğitim fakültesi temelli uzmanlıkla oluşturulmuş örnek bir danışmanlık yaklaşımı sunmak.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;