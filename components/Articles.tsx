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

const AuthorCard = () => (
    <div className="mt-12 mb-4 bg-brand-cream/30 border border-brand-darkBeige/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
        <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
                src="/nobg-pedagojikuykulogo.png"
                alt="Şeymanur Talay"
                className="w-full h-full object-cover bg-brand-lightBlue/30 p-2"
                loading="lazy"
            />
        </div>
        <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                <h3 className="text-xl font-bold text-brand-blue m-0">Şeymanur Talay</h3>
                <span className="inline-block bg-brand-lightBlue/50 text-brand-blue px-3 py-1 rounded-full text-[10px] font-bold tracking-wider border border-brand-blue/10">
                    E-E-A-T ONAYLI
                </span>
            </div>
            <p className="text-brand-darkBeige text-sm mb-3 font-semibold">Okul Öncesi Eğitim Uzmanı & Pedagojik Uyku Kurucusu</p>
            <p className="text-gray-600 text-sm leading-relaxed">
                Okul Öncesi Öğretmenliği bölümünden mezun olan Şeymanur Talay, bebeklerin nörolojik ve psikolojik gelişimini merkeze alarak ailelere bilimsel uyku danışmanlığı sunmaktadır. Güvenli bağlanma ve şefkatli yaklaşımlarla bebek uyku rutinlerini sağlıklı bir temele oturtmayı hedefler.
            </p>
        </div>
    </div>
);

const ApprovalText = () => (
    <p className="italic text-sm text-gray-500 mb-6 bg-brand-cream/50 p-4 rounded-xl border-l-4 border-brand-darkBeige">
        Bu içerik, Okul Öncesi Öğretmenliği mezunu ve Pedagojik Uyku kurucusu <strong>Şeymanur Talay</strong> tarafından incelenmiş ve pedagojik ilkelere uygunluğu onaylanmıştır.
    </p>
);

const articles: Article[] = [
    {
        id: 1,
        title: "Bebeklerde Güvenli Uyku Kuralları: SIDS Riskini Azaltan AAP Rehberi",
        summary: "Bebeklerde güvenli uyku kuralları ve SIDS riskini azaltmak için Amerikan Pediatri Akademisi (AAP) rehberliğinde hayat kurtarıcı uyku ortamı düzenlemeleri.",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <ApprovalText />

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                    <h4 className="text-xl font-bold text-brand-blue mb-3">Güvenli Uyku Nedir?</h4>
                    <p className="text-gray-600">
                        <strong>Güvenli uyku</strong>, bebeklerin sağlıklı fiziksel gelişimini desteklerken, Ani Bebek Ölümü Sendromu (SIDS) ve boğulma gibi hayati riskleri ortadan kaldırmak amacıyla Amerikan Pediatri Akademisi (AAP) tarafından standartları belirlenmiş, bilimsel kanıtlara dayanan uyku ortamı düzenlemeleridir.
                    </p>
                </div>

                <p className="text-lg font-medium text-gray-800">
                    Bebeğinizin güvenliği her şeyden önemlidir. AAP, bebek ölümlerini engellemek için güvenlik yönergelerini düzenli olarak güncellemektedir. İşte ebeveynlerin istisnasız uygulaması gereken hayat kurtarıcı kurallar:
                </p>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-6 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">1</span> En Önemli Kural: Sırt Üstü Yatış (Back-to-Sleep)
                </h4>
                <p>
                    Bebekler, 1 yaşına gelene kadar hem gece uykularında hem de gündüz şekerlemelerinde istisnasız <strong>her zaman sırt üstü yatırılmalıdır</strong>. Yüz üstü veya yan yatış pozisyonlarının SIDS riskini ciddi oranda artırdığı kanıtlanmıştır.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>
                        <strong>Boğulma Endişesi:</strong> "Bebek kusarsa sırt üstü yatarken boğulur mu?" endişesi anatomik olarak yersizdir. Bebeklerin nefes borusu, yemek borusunun üstündedir. Sırt üstü yatarken yerçekimi sayesinde kusmuk yemek borusunda kalır.
                    </li>
                    <li>
                        <strong>Dönme Başladığında:</strong> Bebeğiniz kendi kendine karın üstü dönmeye başladığında (genellikle 4-6. aylar), onu sürekli düzeltmenize gerek yoktur. Ancak uykuya her zaman sırt üstü başlatmalısınız.
                    </li>
                </ul>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-8 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">2</span> Uyku Yüzeyi: Sert, Düz ve Boş Olmalı
                </h4>
                <p>
                    Bebeğiniz, güncel güvenlik standartlarına uygun bir beşikte, esnemeyen sert ve düz bir yatakta uyumalıdır.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>Yatağın üzerine serilen çarşaf lastikli olmalı ve yatağı gergin bir şekilde sıkıca sarmalıdır.</li>
                    <li>Eğimli ana kucakları, pusetler, ev tipi salıncaklar veya yetişkin yatakları rutin uyku için <strong>kesinlikle güvenli değildir</strong>. Pusetinde uyuyakalan bir bebek en kısa sürede düz bir zemine alınmalıdır.</li>
                </ul>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-8 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">3</span> "Çıplak Beşik" Yaklaşımını Uygulayın
                </h4>
                <p>
                    Beşikte yorgan, yastık, kenar koruyucu (bumper), peluş oyuncak, müslin bez veya serbest duran herhangi bir battaniye <em>bulunmamalıdır</em>.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li><strong>Neden Önemli?</strong> Bu eşyalar bebeğin yüzünü kapatabilir veya SIDS için büyük bir risk faktörü olan aşırı ısınmaya neden olabilir.</li>
                    <li><strong>Ne Kullanılmalı?</strong> Bebeği sıcak tutmak için örtü yerine, yaşına ve oda sıcaklığına uygun TOG değerli <strong>uyku tulumları</strong> tercih edilmelidir.</li>
                </ul>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-8 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">4</span> Oda Paylaşımı: Evet, Yatak Paylaşımı: Hayır
                </h4>
                <p>
                    AAP, bebeğinizin sizinle aynı odada, ancak <strong>kendi ayrı yatağında</strong> uyumasını kesin olarak önerir.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>Bu düzen en az ilk 6 ay (ideal olarak 1 yaş) sürdürülmelidir. Aynı odada uyumak SIDS riskini %50'ye kadar azaltır.</li>
                    <li>Bebekle aynı yatakta uyumak (bed-sharing); boğulma, ezilme ve yataktan düşme risklerini dramatik şekilde artırır.</li>
                </ul>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-8 mb-3 flex items-center gap-2">
                    <span className="bg-brand-lightBlue/30 p-1 rounded-md text-brand-blue">5</span> Ortam Sıcaklığı ve Emzik Kullanımı
                </h4>
                <p>
                    Oda sıcaklığının yetişkinler için hafif serin ama konforlu olan seviyede (genellikle <strong>20-22°C</strong>) olması yeterlidir. Bebeği aşırı giydirmekten kaçının.
                </p>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>Emzirme düzeni tamamen oturduktan sonra (genellikle 3-4 hafta) uykuya geçerken emzik teklif etmek, emme refleksini çalıştırarak SIDS riskini azaltır.</li>
                </ul>

                <AuthorCard />
            </div>
        )
    },
    {
        id: 2,
        title: "Bebeklerde Uyku Rutininin Gücü: Adım Adım Rehber",
        summary: "Düzenli bir uyku rutini bebeğinizin beyin gelişimini ve duygusal bağınızı nasıl güçlendirir? Adım adım etkili bir rutin oluşturma rehberi.",
        readTime: "4 dk okuma",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <ApprovalText />

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                    <h4 className="text-xl font-bold text-brand-blue mb-3">Uyku Rutini Nedir?</h4>
                    <p className="text-gray-600">
                        <strong>Uyku rutini</strong>, her akşam tutarlı bir sırayla uygulanan, bebeğin beynine uyku zamanının geldiğini işaret ederek melatonin (uyku hormonu) salınımını başlatan, öngörülebilir ve yatıştırıcı fiziksel/duygusal aktivitelerden oluşan yapılandırılmış süreçtir.
                    </p>
                </div>

                <p className="text-lg font-medium text-gray-800">
                    Her akşam tekrar eden bu zincir, sadece uykuyu değil bilişsel gelişimi de destekler. National Sleep Foundation verileri tutarlı bir rutinin tüm ailenin hayat kalitesini artırdığını kanıtlamaktadır.
                </p>

                <h4 className="text-xl font-bold text-brand-blue mt-8">Uyku Rutini Neden Bu Kadar Önemlidir?</h4>
                <ul className="list-disc pl-5 space-y-3 marker:text-brand-darkBeige">
                    <li>
                        <strong>Biyolojik Saati Düzenler:</strong> Beyin çevresel ipuçlarını (loş ışık, banyo) alır ve sirkadiyen ritmi düzenleyerek melatonini salgılar.
                    </li>
                    <li>
                        <strong>Güven ve Kontrol Hissi Yaratır:</strong> Bebekler belirsizlikten kaygı duyar. Öngörülebilir adımlar stres hormonunu (kortizol) düşürür ve uykuya dalışı kolaylaştırır.
                    </li>
                    <li>
                        <strong>Güvenli Bağlanmayı (Attachment) Kuvvetlendirir:</strong> Ekranların olmadığı bu 20-30 dakikalık odaklanma süresi, ebeveyn-bebek bağını derinleştirir.
                    </li>
                    <li>
                        <strong>Bilişsel Kapasiteyi Artırır:</strong> Uyku öncesi kitap okumak dil gelişimini desteklerken, kesintisiz uyku gün içinde öğrenilenlerin beyne kalıcı olarak kaydedilmesini (konsolidasyon) sağlar.
                    </li>
                </ul>

                <h4 className="text-xl font-bold text-brand-blue mt-8">İdeal Bir Bebek Uyku Rutini Nasıl Planlanır?</h4>
                <p>
                    "Mükemmel rutin" yoktur, ebeveynlerin her gün sürdürebileceği tutarlı akış vardır. Uzmanların önerdiği etkili sıralama şu şekildedir:
                </p>

                <div className="bg-brand-cream/50 p-6 rounded-xl border border-brand-darkBeige/20 my-4 space-y-5">
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">1. Adım</div>
                        <div><strong>Uyaranları Azaltma (Uykuya 45 dk kala):</strong> Hareketli oyunları bitirin. TV ve tablet gibi melatonin salgısını durduran <strong>mavi ışık</strong> yayan ekranları kapatın. Işıkları loşlaştırın.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">2. Adım</div>
                        <div><strong>Fiziksel Rahatlama (Uykuya 30 dk kala):</strong> Çok sıcak olmayan ılık bir banyo veya yüz yıkama seansı yapın. Hafif bir yağ ile sakinleştirici masaj uygulayıp, uyku tulumunu giydirin.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">3. Adım</div>
                        <div><strong>Besleme (Uykuya 15-20 dk kala):</strong> Gece uykusu öncesi son beslenmeyi yapın. <strong>Kritik Kural:</strong> "Uyku-beslenme bağımlılığı" yaratmamak için bebeğin memede veya biberonda uyuyakalmasını engelleyin.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">4. Adım</div>
                        <div><strong>Bağ Kurma:</strong> Loş odada sakin bir sesle kitap okuyun veya ninni söyleyin.</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-bold text-brand-darkBeige whitespace-nowrap">5. Adım</div>
                        <div><strong>Uykulu Ama Uyanık Bırakma:</strong> Bebeğinizi mayışmış ama gözleri henüz kapanmamışken kendi yatağına bırakın. Bu adım, bebeğin gece uyandığında desteksiz tekrar uykuya dönebilmesi (bağımsız uyku becerisi) için atılan en önemli temeldir.</div>
                    </div>
                </div>

                <AuthorCard />
            </div>
        )
    },
    {
        id: 3,
        title: "Uyku Gerilemesi (Sleep Regression): Belirtileri, Ayları ve Çözüm Yolları",
        summary: "Güzel uyuyan bebeğiniz aniden sık uyanmaya mı başladı? Uyku gerilemesinin belirtileri, görüldüğü aylar ve bu süreçte uygulayabileceğiniz etkili stratejiler.",
        readTime: "6 dk okuma",
        image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop",
        content: (
            <div className="space-y-6 text-gray-700 leading-relaxed">
                <ApprovalText />

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                    <h4 className="text-xl font-bold text-brand-blue mb-3">Uyku Gerilemesi Nedir?</h4>
                    <p className="text-gray-600">
                        <strong>Uyku gerilemesi</strong>, halihazırda düzenli uyku alışkanlığına sahip bir bebeğin; dönme, emekleme, konuşma gibi yeni nörolojik beceriler kazanması veya uyku döngülerindeki doğal biyolojik değişimler sebebiyle aniden gece sık uyanması, şekerlemeleri reddetmesi ve uykuya dalmakta aşırı zorlanması durumudur.
                    </p>
                </div>

                <p className="text-lg font-medium text-gray-800">
                    Panik yapmayın; bu korkutucu gibi görünen tablo aslında bebeğinizin büyüdüğünün, beyninin kusursuz çalıştığının en büyük kanıtıdır. Şefkatli yönlendirmelerle bu süreç aşılabilir.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                        <h5 className="font-bold text-orange-800 mb-3">Gerileme Belirtileri Nelerdir?</h5>
                        <p className="text-sm text-orange-900/80 mb-3">Hastalık veya diş çıkarma durumu olmamasına rağmen şu işaretler varsa gerileme dönemindesiniz:</p>
                        <ul className="list-disc pl-4 text-sm space-y-2 text-orange-900/80">
                            <li>Gece saat başı veya çok sık uyanmalar.</li>
                            <li>Uyku vakti geldiğinde yatağa gitmemek için ağlama ve direnme.</li>
                            <li>Gündüz şekerlemelerinin 30-45 dakikaya düşmesi.</li>
                            <li>Gün içinde artan huysuzluk, anne/babaya yapışma ve ayrılık kaygısı.</li>
                            <li>İştah dalgalanmaları (aşırı emme isteği veya beslenmeyi reddetme).</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h5 className="font-bold text-brand-blue mb-3">Hangi Aylarda Görülür?</h5>
                        <ul className="list-disc pl-4 text-sm space-y-2 text-blue-900/80">
                            <li><strong>4. Ay Gerilemesi:</strong> Uyku mimarisinin yetişkinlere benzemeye başlamasıdır (Derin uyku ve REM oluşumu). Kalıcı bir değişimdir.</li>
                            <li><strong>8-10. Ay Gerilemesi:</strong> Fiziksel gelişimin (emekleme, tutunma) zirvesidir. Ayrılık kaygısı başlar.</li>
                            <li><strong>12. Ay Gerilemesi:</strong> Yürümeye başlama ve dil gelişimi beyni aşırı uyarır. Çift uykudan tek uykuya düşme sinyalleri görülebilir.</li>
                            <li><strong>18. Ay Gerilemesi:</strong> Bağımsızlık ve benlik gelişiminin doruk noktasıdır. Uyku sınırlarını test etme açıkça yaşanır.</li>
                        </ul>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-brand-darkBeige mt-8">Gerileme Dönemini Yönetmek İçin 4 Etkili Strateji</h4>
                <div className="space-y-4">
                    <p>
                        <strong>1. Tutarlılığı Koruyun:</strong> 2-6 hafta süren bu geçici dönemde "düzen zaten bozuldu" diyerek kuralları yıkmayın. Mevcut banyo, kitap ve ninni rutinlerinize harfiyen sadık kalın.
                    </p>
                    <p>
                        <strong>2. Uyku Saatini Öne Çekin:</strong> Gündüz uykusu bozulan bebek <strong>aşırı yorulur (overtired)</strong> ve kortizol salgılar. Gece yatış saatini 15-30 dakika erkene çekmek yorgunluk krizini engeller.
                    </p>
                    <p>
                        <strong>3. Gündüz Bol Pratik, Gece Bol Uyku:</strong> Bebeğinizin beyni yeni öğrendiği ayağa kalkma/dönme becerisini gece denemek ister. Bunu engellemek için gündüz saatlerinde bu eylemleri bol bol pratik ettirin. Tensel temas ile duygusal deposunu doldurun.
                    </p>
                    <p>
                        <strong>4. Yeni Uyku Birliktelikleri Yaratmayın:</strong> Gecenin 3'ünde bebeği sakinleştirmek için daha önce yapmadığınız; sürekli sallama, her uyanışta emzirme veya arabayla gezdirme gibi alışkanlıklar başlatırsanız gerileme bittiğinde kalıcı bir uyku problemine sahip olursunuz. Şefkatli ancak kararlı durun.
                    </p>
                </div>

                <AuthorCard />
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

                                {/* Summary Section */}
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
