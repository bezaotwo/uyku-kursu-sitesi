import React from 'react';
import { Check, X, Star, Crown, HeartHandshake } from 'lucide-react';
import { PricingTier } from '../types';

const pricingTiers: (PricingTier & { link?: string, isVip?: boolean, extraSupportTitle?: string, extraSupportText?: string })[] = [
  {
    id: 6,
    name: "Hızlı Destek Ön Görüşme",
    price: "1.500₺",
    description: "Tanışma, analiz ve yol haritası belirleme.",
    features: [
      { text: "1 Saat Telefonda veya Görüntülü Görüşme", included: true },
      { text: "Mevcut Durum Analizi", included: true },
      { text: "Doğru Pakete Yönlendirme", included: true },
      { text: "Kısa Tavsiyeler", included: true },
      { text: "Yazılı Plan/Takip", included: true },
      { text: "(Bu ücret paket alımı gerçekleşirse düşülür.)", included: true },
    ],
    highlight: false,
    buttonText: "Randevu Al",
    link: "https://www.shopier.com/pedogojikuyku/42596280"
  },
  {
    id: 2,
    name: "Hızlı Uyku Kursu",
    price: "2.000₺",
    description: "Görsel anlatım ile kapsamlı öğrenim.",
    features: [
      { text: "Uyku düzeni analiz ve değerlendirme", included: true },
      { text: "Yaşa uygun ritim ve rutin önerisi", included: true },
      { text: "Gece uyanma nedenlerinin bilimsel yorumu", included: true },
      { text: "Kendi kendine uykuya geçiş rehberi", included: true },
      { text: "3 gün WhatsApp yazılı destek", included: true },
    ],
    highlight: false,
    buttonText: "Randevu Al",
    link: "https://www.shopier.com/pedogojikuyku/44826928" // <-- Lütfen yönlendireceğiniz linki buraya yapıştırın
  },
  {
    id: 5,
    name: "Tuvalet Eğitimi",
    price: "2.500₺",
    description: "Bez bırakma sürecini travmasız, oyunla yönetin.",
    features: [
      { text: "Hazır Bulunuşluk Testi", included: true },
      { text: "Kişiye Özel Geçiş Planı", included: true },
      { text: "1 Saat Telefonda veya Görüntülü Görüşme", included: true },
      { text: "10 Gün Whatsapp Takibi", included: true },
      { text: "Gece & Gündüz Ayrımı", included: true },
    ],
    highlight: false,
    buttonText: "Randevu Al",
    link: "https://www.shopier.com/pedogojikuyku/42405364"
  },
  {
    id: 3,
    name: "Premium Danışmanlık",
    price: "4.900₺",
    description: "En çok tercih edilen, birebir destek.",
    features: [
      { text: "Tüm Eğitim Materyalleri", included: true },
      { text: "Bebeğe Özel Uyku Planı", included: true },
      { text: "1 Saat Telefonda veya Görüntülü Görüşme", included: true },
      { text: "3 Hafta Takip & Destek", included: true },
      { text: "Mesai Saatlerinde (10.00-18.00) Whatsapp", included: true },
    ],
    highlight: true,
    buttonText: "Randevu Al",
    link: "https://www.shopier.com/pedogojikuyku/42405410",
    extraSupportTitle: "Süreç Sonrası Destek",
    extraSupportText: "Uyku eğitimi tamamlandıktan sonra da aklınıza takılan konularda benimle iletişime geçebilirsiniz. Müsait olduğum zamanlarda sorularınızı yanıtlayarak sizi desteklemeye devam ederim."
  },
  {
    id: 4,
    name: "VIP Süreç",
    price: "6.000₺",
    description: "El ele, adım adım tam destek.",
    features: [
      { text: "Tüm Eğitim Materyalleri", included: true },
      { text: "Bebeğe Özel Uyku Planı", included: true },
      { text: "90 Dakika Görüntülü Görüşme", included: true },
      { text: "4 Hafta Kesintisiz Takip", included: true },
      { text: "10.00 – 20.00 arası Whatsapp Desteği", included: true },
    ],
    highlight: false,
    buttonText: "Başvuru Yap",
    link: "https://www.shopier.com/pedogojikuyku/42405445",
    isVip: true,
    extraSupportTitle: "Süreç Sonrası Destek",
    extraSupportText: "Uyku eğitimi tamamlandıktan sonra da aklınıza takılan konularda benimle iletişime geçebilirsiniz. Müsait olduğum zamanlarda sorularınızı yanıtlayarak sizi desteklemeye devam ederim."
  }
];

const Pricing: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          .animate-shine {
            background: linear-gradient(90deg, transparent 0%, #173b5e 50%, transparent 100%);
            background-size: 200% auto;
            animation: shine 3s linear infinite;
          }
        `}
      </style>
      <section id="pricing" className="py-24 bg-[#F9F7F5] relative"> {/* Softer background color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-4">Eğitim Paketleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Bebeğinizin ihtiyacına ve bütçenize en uygun paketi seçin, uykusuzluğa veda edin.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm
                ${tier.highlight
                    ? 'bg-white ring-4 ring-brand-blue/5 shadow-2xl scale-105 z-10'
                    : 'bg-white border border-gray-100 shadow-soft hover:shadow-soft-lg hover:-translate-y-1'}
                ${tier.comingSoon ? 'opacity-80 grayscale-[0.5]' : ''}`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1 w-max">
                    <Star size={12} fill="currentColor" /> Popüler Seçim
                  </div>
                )}

                {tier.isVip && (
                  <>
                    <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl overflow-hidden opacity-90 z-0">
                      <div className="w-full h-full animate-shine"></div>
                    </div>
                    <div className="absolute -top-[18px] left-1/2 transform -translate-x-1/2 bg-white text-brand-blue border border-brand-blue/10 p-2 rounded-full shadow-md z-10 flex items-center justify-center">
                      <Crown size={18} className="text-brand-blue stroke-[2.5]" />
                    </div>
                  </>
                )}

                <div className="text-center mb-8 border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-bold text-brand-blue mb-2 font-display">{tier.name}</h3>
                  <div className="text-4xl font-bold text-brand-darkBeige mb-2 tracking-tight">{tier.price}</div>
                  <p className="text-gray-500 text-sm h-10 leading-relaxed max-w-[80%] mx-auto">{tier.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="bg-brand-lightBlue/50 p-1 rounded-full mt-0.5 shrink-0 text-brand-blue">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-1 rounded-full mt-0.5 shrink-0 text-gray-300">
                          <X size={14} />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {tier.extraSupportTitle && tier.extraSupportText && (
                  <div className="mb-6 bg-brand-lightBlue/10 p-4 rounded-xl border border-brand-lightBlue/20">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-brand-blue mb-2">
                      {tier.extraSupportTitle}
                      <HeartHandshake size={18} className="text-brand-blue" />
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{tier.extraSupportText}</p>
                  </div>
                )}

                {tier.comingSoon ? (
                  <button className="w-full py-4 rounded-xl font-bold bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 mt-auto uppercase tracking-wide text-xs">
                    {tier.buttonText}
                  </button>
                ) : (
                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-bold transition-all mt-auto text-center block shadow-md hover:shadow-lg
                    ${tier.highlight
                        ? 'bg-brand-blue text-white hover:bg-brand-blue/90'
                        : 'bg-white border-2 border-brand-blue/10 text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white'}`}
                  >
                    {tier.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;