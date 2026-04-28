import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Articles from './components/Articles';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState<{ title: string, key: 'distance' | 'privacy' | 'kvkk' | 'refund' | null }>({
    title: '',
    key: null
  });

  const openLegal = (title: string, key: 'distance' | 'privacy' | 'kvkk' | 'refund') => {
    setLegalModalContent({ title, key });
    setIsLegalModalOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-brand-cream font-sans relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Articles />
          <MissionVision />

          {/* İletişim / Yönlendirme Alanı */}
          <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Hala sorularınız mı var?</h2>
              <p className="text-gray-600 mb-8">
                Bebeğinizin uyku sorunu için en doğru paketin hangisi olduğuna karar veremediniz mi?
                Bize yazın, size yardımcı olalım.
              </p>
              <a
                href="https://wa.me/905431461104"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all inline-flex items-center gap-2"
              >
                Whatsapp'tan Ulaşın
              </a>
            </div>
          </section>
        </main>
        <Footer openLegal={openLegal} />

        <LegalModal
          isOpen={isLegalModalOpen}
          onClose={() => setIsLegalModalOpen(false)}
          title={legalModalContent.title}
          contentKey={legalModalContent.key}
        />

        <CookieBanner onOpenPrivacyPolicy={() => openLegal('Gizlilik Politikası', 'privacy')} />
      </div>
    </AuthProvider>
  );
}

export default App;