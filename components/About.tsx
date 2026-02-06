import React from 'react';
import { Quote, GraduationCap, Heart, Brain, Instagram, ShieldCheck } from 'lucide-react';
import profilFoto from '../assets/seymanuracisu.png';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-beige/20 to-transparent -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">

                    {/* SOL TARA: FOTOĞRAF ALANI */}
                    <div className="w-full lg:w-5/12 relative">
                        {/* Rozet */}
                        <div className="absolute -top-6 -left-6 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white flex items-center gap-3 animate-bounce duration-[3000ms] hidden md:flex">
                            <div className="bg-brand-blue p-2 rounded-lg text-white">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="text-sm font-bold text-brand-blue">
                                Çocuğunuzu kime <br />emanet ediyorsunuz?
                            </div>
                        </div>

                        {/* DEĞİŞİKLİK BURADA YAPILDI: bg-white -> bg-brand-beige */}
                        <div className="relative z-10 bg-brand-beige p-3 pb-12 shadow-2xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500 border border-gray-200 rounded-xl">
                            <img
                                src={profilFoto}
                                alt="Şeymanur Talay"
                                // Fotoğrafın kendisinde beyazlık kalmaması için mix-blend-multiply ekleyebiliriz (Opsiyonel)
                                // className="w-full h-auto object-cover aspect-[4/5] rounded-lg mix-blend-multiply" 
                                className="w-full h-auto object-cover aspect-[4/5] rounded-lg"
                            />
                        </div>

                        {/* Arka Plan Şekli */}
                        <div className="absolute top-10 -right-6 w-full h-full border-2 border-brand-darkBeige/30 rounded-3xl -z-10 rotate-[3deg]"></div>
                    </div>

                    {/* SAĞ TARAF: METİN ALANI */}
                    <div className="w-full lg:w-7/12 space-y-8">
                        <div>
                            <span className="inline-block bg-[#D4A373] text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-widest mb-6 shadow-md hover:bg-[#C09066] transition-colors cursor-default">
                                TANIŞALIM
                            </span>
                            <h2 className="text-5xl lg:text-6xl font-bold text-brand-blue leading-[1.1] tracking-tight">
                                Merhaba, <br />
                                ben Şeymanur Talay
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                            <p>
                                <strong>Eğitim Fakültesi Okul Öncesi Öğretmenliği</strong> mezunuyum. Bebek uyku danışmanlığı sertifikamla ailelere bilimsel ve güvenilir bir rehberlik sunuyorum.
                            </p>
                            <p>
                                Yıllarca çocukların gelişim dönemlerini, ihtiyaçlarını ve davranışlarını bilimsel temelde inceledim. Uyku danışmanlığı, yalnızca uyku saatinden ibaret değildir.
                            </p>
                            <p>
                                Çocuğun yaşı, gelişim düzeyi, duygusal ihtiyacı ve aile dinamikleri birlikte değerlendirilmelidir. Bu nedenle çalışmalarımı, <strong>pedagojik temelli bir yaklaşımla</strong>, bir eğitimci bakış açısıyla yürütüyorum.
                            </p>

                            {/* Vurgulu Kapanış Cümlesi */}
                            <div className="bg-brand-lightBlue/30 p-4 rounded-lg border-l-4 border-brand-blue">
                                <p className="text-brand-blue font-bold">
                                    Çocuğunuzu kime emanet ettiğiniz önemlidir.
                                </p>
                            </div>
                        </div>

                        {/* Alt Bilgi ve Instagram Butonu */}
                        <div className="pt-6 border-t border-brand-darkBeige/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <p className="font-bold text-brand-blue text-lg">Şeymanur Talay</p>
                                <p className="text-brand-darkBeige">Pedagojik Uyku Kurucusu</p>
                            </div>

                            <a href="https://instagram.com/pedagojikuyku" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-md text-brand-blue font-bold hover:shadow-xl transition-all border border-gray-100 group">
                                <div className="bg-gradient-to-tr from-yellow-500 via-orange-500 to-pink-500 text-white p-1.5 rounded-full group-hover:scale-110 transition-transform">
                                    <Instagram size={18} />
                                </div>
                                @pedagojikuyku
                            </a>
                        </div>
                    </div>
                </div>

                {/* Alt Kısım: 3 Temel İlke */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-darkBeige to-brand-blue"></div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">Mesleki Yaklaşımım</h3>
                            <p className="text-gray-600">
                                Mesleki eğitimim ve tecrübemle, süreci şu üç temel üzerine kuruyorum:
                            </p>
                        </div>

                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-brand-cream p-6 rounded-2xl text-center group hover:bg-brand-blue hover:text-white transition-all duration-300">
                                <div className="bg-white text-brand-darkBeige p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-brand-darkBeige group-hover:text-white">
                                    <Brain size={24} />
                                </div>
                                <span className="font-bold block">Bilimsel Temel</span>
                            </div>

                            <div className="bg-brand-cream p-6 rounded-2xl text-center group hover:bg-brand-blue hover:text-white transition-all duration-300">
                                <div className="bg-white text-brand-darkBeige p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-brand-darkBeige group-hover:text-white">
                                    <Heart size={24} />
                                </div>
                                <span className="font-bold block">Duygusal İhtiyaçlar</span>
                            </div>

                            <div className="bg-brand-cream p-6 rounded-2xl text-center group hover:bg-brand-blue hover:text-white transition-all duration-300">
                                <div className="bg-white text-brand-darkBeige p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-brand-darkBeige group-hover:text-white">
                                    <GraduationCap size={24} />
                                </div>
                                <span className="font-bold block">Pedagojik Yaklaşım</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;