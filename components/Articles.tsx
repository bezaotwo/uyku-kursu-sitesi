import React, { useState } from 'react';
import { X, ChevronRight, BookOpen, Moon, Clock, Baby } from 'lucide-react';

interface Article {
    id: number;
    title: string;
    summary: string;
    content: React.ReactNode;
    image: string;
    readTime: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Bebekler İçin Güvenli Uyku Rehberi (2024)",
        summary: "Amerikan Pediatri Akademisi'nin (AAP) en güncel tavsiyelerine göre bebeğiniz için en güvenli uyku ortamını nasıl oluşturursunuz?",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-brand-blue">
                    Bebeğinizin güvenliği her şeyden önemlidir. Amerikan Pediatri Akademisi (AAP), bebek ölümlerini ve SIDS (Ani Bebek Ölümü Sendromu) riskini en aza indirmek için bilimsel verilere dayanan güvenlik yönergelerini düzenli olarak güncellemektedir. İşte ebeveynlerin mutlaka bilmesi ve uygulaması gereken hayat kurtarıcı kurallar:
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">1</span> En Önemli Kural: Sırt Üstü Yatış
                </h4>
                <p>
                    Bebekler, 1 yaşına gelene kadar hem gece uykularında hem de gündüz şekerlemelerinde <strong>her zaman sırt üstü</strong> yatırılmalıdır. Eskiden önerilen yüz üstü veya yan yatış pozisyonlarının SIDS riskini artırdığı kanıtlanmıştır. "Bebek kusarsa boğulur mu?" endişesi yersizdir; bebeklerin anatomisi sırt üstü yatarken hava yolunu korumaya daha müsaittir. Bebeğiniz kendi kendine rahatça dönmeye başladığında, uyurken pozisyon değiştirmesine müdahale etmenize gerek yoktur.
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">2</span> Uyku Yüzeyi: Sert ve Düz
                </h4>
                <p>
                    Bebeğiniz, güvenlik standartlarına uygun bir beşikte, <strong>sert ve düz bir yatakta</strong> uyumalıdır. Yatağın üzerine serilen çarşafın lastikli olması ve yatağı sıkıca sarması gerekir. Eğimli ana kucakları, araba koltukları, salıncaklar veya yumuşak yataklar rutin uyku için güvenli değildir. Eğer bebeğiniz araba koltuğunda uyuyakalırsa, mümkün olan en kısa sürede düz bir zemine alınmalıdır.
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">3</span> "Çıplak" Beşik En İyisidir
                </h4>
                <p>
                    Beşikte yorgan, yastık, kenar koruyucu (bumper), peluş oyuncak, post veya gevşek battaniye <strong>bulunmamalıdır</strong>. Bu eşyalar bebeğin nefes almasını engelleyebilir veya aşırı ısınmasına neden olabilir. Bebeği sıcak tutmak için battaniye yerine, yaşına ve oda sıcaklığına uygun uyku tulumları ("giyilebilir battaniye") tercih edilmelidir.
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">4</span> Oda Paylaşımı Evet, Yatak Paylaşımı Hayır
                </h4>
                <p>
                    AAP, bebeğinizin sizinle aynı odada, ancak kendi ayrı yatağında (beşik veya anne yanı beşiği) uyumasını önerir. Bu düzenin en az ilk 6 ay, ideal olarak 1 yaşına kadar sürdürülmesi tavsiye edilir. Aynı odada uyumak SIDS riskini %50'ye kadar azaltabilirken, bebekle aynı yatakta uyumak (bed-sharing) boğulma ve ezilme riskini ciddi oranda artırır.
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">5</span> Ortam Sıcaklığı ve Emzik Kullanımı
                </h4>
                <p>
                    Bebeği kat kat giydirmekten kaçının. Oda sıcaklığının yetişkinler için konforlu olan seviyede (genellikle 20-22°C) olması yeterlidir. Bebeğin terlemesi veya göğsünün aşırı sıcak olması, fazla giydirildiğinin işaretidir. Ayrıca, emzirme düzeni oturduktan sonra uykuya geçerken emzik teklif etmek, SIDS riskini azaltan faktörlerden biridir.
                </p>

                <div className="bg-red-50 p-6 rounded-xl mt-8 border-l-4 border-red-400">
                    <p className="text-sm font-medium text-red-800">
                        <strong>Önemli Uyarı:</strong> "SIDS önleyici" olarak pazarlanan yastık, yatak veya konumlandırıcı gibi ticari ürünlere itibar etmeyiniz. En güvenli uyku, boş ve düz bir yataktır. Bu bilgiler genel bilgilendirme amaçlıdır, bebeğinizin özel durumu için her zaman doktorunuza danışın.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Uyku Rutininin Gücü: Neden ve Nasıl?",
        summary: "Düzenli bir uyku rutini bebeğinizin beyin gelişimini ve duygusal bağınızı nasıl güçlendirir? Adım adım etkili bir rutin oluşturma rehberi.",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    Her akşam aynı saatte, aynı sırayla yapılan aktiviteler zinciri... Kulağa basit gelebilir ama uyku rutini, bebeğinizin (ve sizin!) hayat kalitesini artıran en güçlü araçlardan biridir. Sleep Foundation ve sayısız bilimsel araştırma, tutarlı bir rutinin sadece uykuyu değil, gelişimi de desteklediğini kanıtlıyor.
                </p>

                <h4 className="text-xl font-bold text-brand-blue mt-6">Rutin Neden Bu Kadar Önemli?</h4>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>
                        <strong>Biyolojik Saati Düzenler:</strong> Düzenli rutinler, bebeğinizin sirkadiyen ritminin (vücut saati) oturmasına yardımcı olur. Beyin, rutin aktiviteleri gördükçe "artık uyku zamanı, melatonini salgıla" mesajını alır.
                    </li>
                    <li>
                        <strong>Güven ve Kontrol Hissi:</strong> Bebekler sürprizleri sevmez. Bir sonraki adımın ne olduğunu bilmek (banyodan sonra masaj, masajdan sonra uyku gibi) onlara müthiş bir güven hissi verir. Dünyayı öngörülebilir kılar, bu da stresi ve kortizol seviyesini düşürür.
                    </li>
                    <li>
                        <strong>Duygusal Bağlanma:</strong> Günün koşuşturmacasından uzaklaşıp, telefonların bir kenara bırakıldığı ve sadece bebeğinize odaklandığınız o 15-20 dakika, aranızdaki güvenli bağlanmayı kuvvetlendirir.
                    </li>
                    <li>
                        <strong>Öğrenme Kapasitesi:</strong> Uyku öncesi kitap okuma veya masal anlatma, dil gelişimini destekler. İyi bir uyku ise gün içinde öğrenilenlerin hafızaya kaydedilmesini sağlar.
                    </li>
                </ul>

                <h4 className="text-xl font-bold text-brand-blue mt-8">İdeal Bir Bebek Uyku Rutini Nasıl Olmalı?</h4>
                <p>
                    "Mükemmel" bir rutin yoktur, ailenize uyan rutin vardır. Ancak uzmanların önerdiği temel akış şöyledir:
                </p>

                <div className="bg-brand-cream/50 p-6 rounded-xl border border-brand-darkBeige/20 my-4 space-y-4">
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">Adım 1:</div>
                        <div><strong>Enerjiyi Atın ve Sakinleşin:</strong> Yatmadan 30-45 dakika önce hareketli oyunları, varsa ekranları kapatın. Evdeki ışıkları loşlaştırın.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">Adım 2:</div>
                        <div><strong>Fiziksel Rahatlama:</strong> Ilık bir banyo veya sadece el-yüz yıkama, bez değişimi ve pijama giyme. Bu adım vücudun rahatlamasına yardımcı olur.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">Adım 3:</div>
                        <div><strong>Beslenme:</strong> Bebeğinizi son kez besleyin. Ancak beslenmenin uykudan hemen önce olmamasına, beslenirken uyuyakalmamasına özen gösterin (uyku ilişkilendirmesi olmaması için).</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">Adım 4:</div>
                        <div><strong>Bağ Kurma ve Uykuya Geçiş:</strong> Sakin bir şarkı, ninni veya kısa bir masal. "İyi geceler" deyip, bebeği <em>uykulu ama uyanık</em> halde yatağına bırakmak.</div>
                    </div>
                </div>

                <p className="italic text-gray-500 text-sm mt-4">
                    İpucu: Rutini çok uzun tutmayın. 20-30 dakika idealdir. Önemli olan süresi değil, her gece aynı sırayla yapılmasıdır.
                </p>
            </div>
        )
    },
    {
        id: 3,
        title: "Uyku Gerilemesi (Sleep Regression): Bir Kriz mi, Gelişim mi?",
        summary: "Güzel uyuyan bebeğiniz aniden sık uyanmaya mı başladı? Uyku gerilemesinin bilimsel nedenleri ve bu zorlu süreçle başa çıkma stratejileri.",
        readTime: "6 dk okuma",
        image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                    Her şey yolundaydı... Bebeğiniz geceleri deliksiz uyuyor, gündüz uykularını düzenli yapıyordu. Sonra birdenbire, bir gece her şey değişti. Sık uyanmalar, uykuya direnme, nedensiz ağlamalar başladı. Hoş geldiniz, "Uyku Gerilemesi" (Sleep Regression) dönemindesiniz. Panik yapmayın; bu aslında bebeğinizin büyüdüğünün ve beyninin geliştiğinin en büyük işaretidir.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-orange-50 p-5 rounded-xl">
                        <h5 className="font-bold text-orange-800 mb-2">Yaygın Belirtiler</h5>
                        <ul className="list-disc pl-4 text-sm space-y-1 text-orange-900/80">
                            <li>Gece sık uyanma</li>
                            <li>Uykuya dalmakta zorluk ve itiraz</li>
                            <li>Kısa gündüz uykuları (30-45 dk)</li>
                            <li>İştah değişiklikleri</li>
                            <li>Artan huysuzluk ve ayrılık kaygısı</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-xl">
                        <h5 className="font-bold text-brand-blue mb-2">Ne Zaman Beklenir?</h5>
                        <ul className="list-disc pl-4 text-sm space-y-1 text-blue-900/80">
                            <li><strong>4. Ay:</strong> Uyku döngülerinin yetişkin benzeri yapıya geçişi.</li>
                            <li><strong>8-10. Ay:</strong> Emekleme, sıralama, ayrılık kaygısı.</li>
                            <li><strong>12. Ay:</strong> Yürüme ve konuşma çabaları.</li>
                            <li><strong>18. Ay:</strong> Bağımsızlık isteği ve benlik gelişimi.</li>
                        </ul>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6">Neden Oluyor?</h4>
                <p>
                    Cleveland Clinic uzmanlarına göre, bu dönemlerde bebeğinizin beyni "fazla mesai" yapar. Yeni bir beceri öğrenirken (örneğin dönmek veya ayağa kalkmak), beyin o kadar heyecanlıdır ki uykuda bile pratik yapmak ister. Ayrıca uyku döngülerindeki biyolojik değişimler, ufacık bir uyanıklıkta tekrar uykuya dönmeyi zorlaştırabilir. Yani bu bir "gerileme" değil, aslında "gelişimsel bir sıçrama"dır.
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6">Nasıl Başa Çıkabilirsiniz?</h4>
                <div className="space-y-4">
                    <p>
                        <strong>1. Tutarlılığı Koruyun:</strong> En büyük hata, "düzen bozuldu" diyip kuralları tamamen yıkmaktır. Rutinlerinize sadık kalın. Bu sürecin geçici olduğunu (genellikle 2-4 hafta) kendinize hatırlatın. Her zamanki gibi banyonuzu yaptırın, kitabınızı okuyun.
                    </p>
                    <p>
                        <strong>2. Erken Yatırın:</strong> Gerileme döneminde uyku kalitesi düştüğü için bebekler daha çabuk yorulur (overtired). Akşam uykusunu 15-20 dakika öne çekmek, aşırı yorgunluğu ve buna bağlı ağlama krizlerini önleyebilir.
                    </p>
                    <p>
                        <strong>3. Gündüz Bol Temas ve Egzersiz:</strong> Yeni becerilerini (emekleme, dönme) gündüz bol bol pratik etmesini sağlayın ki geceye enerji kalmasın. Ayrıca gündüz tensel temas ve oyunla "deposunu" doldurun, böylece gece ayrılık kaygısı azalabilir.
                    </p>
                    <p>
                        <strong>4. Yeni Alışkanlıklara Dikkat:</strong> Bebeği sakinleştirmek elbette önemlidir ancak kriz anını yönetmek için sallayarak uyutma veya emerek uyutma gibi sürdürmek istemediğiniz yeni alışkanlıklar başlatmamaya çalışın.
                    </p>
                </div>

                <div className="mt-6 border-t pt-4 text-gray-500 text-sm">
                    <p>Unutmayın, bu zorlu günler geçecek. Sabrınız ve tutarlılığınızla bebeğiniz bu gelişim basamağını tırmanıp, eskisinden daha iyi bir uyku düzenine kavuşacaktır.</p>
                </div>
            </div>
        )
    }
];

const Articles: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const openModal = (article: Article) => {
        setSelectedArticle(article);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedArticle(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="articles" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-brand-lightBlue text-brand-blue px-4 py-1.5 rounded-full font-bold text-sm tracking-widest mb-4">
                        FAYDALI BİLGİLER
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
                        Ebeveynler İçin <span className="text-brand-darkBeige">Rehber</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Bebeğinizin uykusu ve gelişimi hakkında bilimsel kaynaklardan derlenmiş, güvenilir bilgiler.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">

                            {/* Image Container */}
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-brand-blue flex items-center gap-1">
                                    <Clock size={14} /> {article.readTime}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-brand-blue mb-3 line-clamp-2 min-h-[3.5rem]">
                                    {article.title}
                                </h3>

                                {/* Summary Section - Highlighted/Italic as requested */}
                                <div className="bg-white p-4 rounded-xl border-l-4 border-brand-darkBeige mb-6 flex-1">
                                    <p className="text-gray-600 italic text-sm leading-relaxed">
                                        "{article.summary}"
                                    </p>
                                </div>

                                <button
                                    onClick={() => openModal(article)}
                                    className="w-full py-3 rounded-xl bg-white border border-brand-blue text-brand-blue font-bold flex items-center justify-center gap-2 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300"
                                >
                                    <BookOpen size={18} />
                                    Devamını Oku
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedArticle && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={closeModal}
                    ></div>

                    <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">

                        {/* Modal Header Image */}
                        <div className="h-48 sm:h-64 relative shrink-0">
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-brand-blue p-2 rounded-full transition-all duration-300"
                            >
                                <X size={24} />
                            </button>
                            <div className="absolute bottom-6 left-6 sm:left-8 right-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                                    {selectedArticle.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Scrollable Content */}
                        <div className="p-6 sm:p-10 overflow-y-auto">
                            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-brand-blue">
                                {selectedArticle.content}
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-darkBeige transition-colors"
                                >
                                    Kapat
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Articles;
