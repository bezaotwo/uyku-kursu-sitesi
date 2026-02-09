import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
    onOpenPrivacyPolicy: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage on mount
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#1f1b4b] text-[#caa269] py-4 px-6 shadow-2xl border-t border-[#caa269]/20 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm md:text-base pr-4">
                    Sizlere daha iyi hizmet sunabilmek ve reklamları kişiselleştirmek için çerezleri kullanıyoruz.
                    Detaylı bilgi için{' '}
                    <button
                        onClick={onOpenPrivacyPolicy}
                        className="underline font-bold hover:text-white transition-colors cursor-pointer"
                    >
                        Gizlilik Politikamızı
                    </button>{' '}
                    inceleyebilirsiniz.
                </p>
                <div className="flex-shrink-0">
                    <button
                        onClick={handleAccept}
                        className="bg-[#caa269] text-[#1f1b4b] px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#1f1b4b] transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base whitespace-nowrap"
                    >
                        Kabul Et
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
