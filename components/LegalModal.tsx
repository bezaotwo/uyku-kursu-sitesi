import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  contentKey: 'distance' | 'privacy' | 'kvkk' | 'refund' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, contentKey }) => {
  if (!isOpen || !contentKey) return null;

  const contents = {
    distance: (
      <div className="space-y-4 text-sm text-gray-600">
        <h3 className="font-bold text-gray-900">1. TARAFLAR</h3>
        <p><strong>SATICI:</strong> Pedagojik Uyku (Bundan sonra SATICI olarak anılacaktır)</p>
        <p><strong>ALICI:</strong> Hizmeti satın alan kişi (Bundan sonra ALICI olarak anılacaktır)</p>
        <h3 className="font-bold text-gray-900">2. KONU</h3>
        <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesinden elektronik ortamda siparişini yaptığı hizmetin satışı ve teslimi ile ilgili hak ve yükümlülüklerin saptanmasıdır.</p>
        <h3 className="font-bold text-gray-900">3. CAYMA HAKKI İSTİSNASI</h3>
        <p>Elektronik ortamda anında ifa edilen hizmetler ve tüketiciye anında teslim edilen gayrimaddi mallar (dijital içerik, video, PDF vb.) cayma hakkı kapsamı dışındadır. Bu nedenle satın alınan dijital eğitim ve tamamlanan danışmanlık hizmetlerinde iade yapılmamaktadır.</p>
      </div>
    ),
    privacy: (
      <div className="space-y-4 text-sm text-gray-600">
        <p><strong>Son Güncelleme:</strong> 6 Şubat 2026.</p>
        <p>pedagojikuyku.com ('Site') olarak, ziyaretçilerimizin kişisel verilerinin güvenliğine büyük önem veriyoruz.</p>

        <p><strong className="text-gray-900">1. Toplanan Bilgiler:</strong> Sitemiz istatistiksel amaçlı standart log kayıtları tutar (IP adresi, tarayıcı türü vb.). Bu veriler anonimdir ve kimliğinizi belirlemez.</p>

        <p><strong className="text-gray-900">2. Çerezler ve Reklamlar (Google AdSense):</strong> Google dahil üçüncü taraf tedarikçiler, kullanıcıların web sitemize veya diğer web sitelerine yaptığı önceki ziyaretlere dayalı olarak reklam yayınlamak için çerezleri kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman yönetebilirsiniz.</p>

        <p><strong className="text-gray-900">3. Ödeme ve Güvenlik (Shopier):</strong> Sitemiz üzerinden gerçekleştirilen tüm ödeme işlemleri, Shopier ödeme altyapısı üzerinden 256-bit SSL şifreleme ile güvenli bir şekilde gerçekleşir. Kredi kartı bilgileriniz sunucularımızda saklanmaz, doğrudan Shopier güvencesi altındadır.</p>

        <p><strong className="text-gray-900">4. İletişim:</strong> Her türlü sorunuz için pedagojikuyku@gmail.com mail adresinden veya Instagram: @pedagojikuyku hesabından bize ulaşabilirsiniz.</p>
      </div>
    ),
    kvkk: (
      <div className="space-y-4 text-sm text-gray-600">
        <h3 className="font-bold text-gray-900">KVKK Aydınlatma Metni</h3>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla tarafımızca işlenmektedir.</p>
        <h3 className="font-bold text-gray-900">Veri İşleme Amacı</h3>
        <p>Danışmanlık hizmetinin verilebilmesi, randevu oluşturulması ve iletişim süreçlerinin yönetilmesi amacıyla verileriniz işlenir.</p>
      </div>
    ),
    refund: (
      <div className="space-y-4 text-sm text-gray-600">
        <h3 className="font-bold text-gray-900">İptal ve İade Koşulları</h3>
        <p className="font-medium text-gray-900">
          Süreç başlatıldıktan sonra ücret iadesi yapılmamaktadır.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Danışmanlık Hizmetleri:</strong> Randevu saatine 24 saat kala yapılan iptallerde ücret iadesi yapılmaz veya erteleme hakkı saklı tutulur.</li>
          <li><strong>Dijital Ürünler:</strong> Video eğitim ve e-kitap gibi dijital ürünler satın alındığı anda teslim edilmiş sayılır ve iadesi mümkün değildir.</li>
          <li>Teknik aksaklık nedeniyle hizmetin hiç verilememesi durumunda %100 ücret iadesi yapılır.</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-brand-blue">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {contents[contentKey]}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;