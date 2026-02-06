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
        <p>Pedagojik Uyku olarak gizliliğinize önem veriyoruz.</p>
        <h3 className="font-bold text-gray-900">Toplanan Bilgiler</h3>
        <p>Sitemiz üzerinden yapılan işlemlerde ad, soyad, telefon ve e-posta gibi iletişim bilgileri talep edilmektedir. Bu bilgiler sadece hizmetin ifası için kullanılır.</p>
        <h3 className="font-bold text-gray-900">Üçüncü Taraflar</h3>
        <p>Kişisel bilgileriniz yasal zorunluluklar haricinde üçüncü şahıslarla paylaşılmamaktadır. Ödeme işlemleri Shopier altyapısı üzerinden güvenli bir şekilde gerçekleşir.</p>
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