import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react'; // Facebook buradan silindi
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLegal, setCurrentLegal] = useState<{ title: string, key: 'distance' | 'privacy' | 'kvkk' | 'refund' | null }>({
    title: '',
    key: null
  });

  const openLegal = (title: string, key: 'distance' | 'privacy' | 'kvkk' | 'refund') => {
    setCurrentLegal({ title, key });
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-brand-blue text-white py-12 border-t border-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Marka ve Sosyal Medya */}
            <div>
              <div className="text-2xl font-bold font-sans mb-4">
                Pedagojik <span className="text-brand-darkBeige">Uyku</span>
              </div>
              <p className="text-indigo-200 text-sm mb-6">
                Bebekleriniz için güvenli bağlanma temelli, ağlatmadan uyku eğitimi.
              </p>
              <div className="flex space-x-4">
                {/* Instagram - Link Eklendi */}
                <a
                  href="https://instagram.com/pedagojikuyku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-darkBeige transition-colors"
                >
                  <Instagram size={20} />
                </a>

                {/* Mail - Aktif Hale Getirildi */}
                <a
                  href="mailto:pedagojikuyku@gmail.com"
                  className="text-white hover:text-brand-darkBeige transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-beige">Hızlı Erişim</h3>
              <ul className="space-y-2 text-indigo-200 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Anasayfa</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Hakkımda</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Paketler</a></li>
              </ul>
            </div>

            {/* Yasal Linkler */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-beige">Yasal</h3>
              <ul className="space-y-2 text-indigo-200 text-sm">
                <li><button onClick={() => openLegal('Mesafeli Satış Sözleşmesi', 'distance')} className="hover:text-white text-left transition-colors">Mesafeli Satış Sözleşmesi</button></li>
                <li><button onClick={() => openLegal('İptal ve İade Koşulları', 'refund')} className="hover:text-white text-left transition-colors">İptal ve İade</button></li>
                <li><button onClick={() => openLegal('Gizlilik Politikası', 'privacy')} className="hover:text-white text-left transition-colors">Gizlilik Politikası</button></li>
                <li><button onClick={() => openLegal('KVKK Metni', 'kvkk')} className="hover:text-white text-left transition-colors">KVKK Aydınlatma Metni</button></li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-beige">İletişim</h3>
              <ul className="space-y-2 text-indigo-200 text-sm">
                <li>info@pedagojikuyku.com</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-indigo-900 mt-12 pt-8 text-center text-xs text-indigo-400">
            <p>&copy; {new Date().getFullYear()} Pedagojik Uyku. Tüm hakları saklıdır.</p>
            <p className="mt-2 text-indigo-500">Site Beyzanur ACISU tarafından hazırlanmıştır.</p>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentLegal.title}
        contentKey={currentLegal.key}
      />
    </>
  );
};

export default Footer;