import React from 'react';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Bebeklerde Uyku Gerilemesi Nedir?",
    excerpt: "4. ay, 8. ay ve 12. ay uyku gerilemeleri hakkında bilmeniz gereken her şey ve çözüm önerileri.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
    date: "12 Mart 2024",
    author: "Seda Yılmaz"
  },
  {
    id: 2,
    title: "Güvenli Bağlanma ve Uyku Eğitimi",
    excerpt: "Ağlatmadan uyku eğitimi mümkün mü? Bebeğinizle bağınızı güçlendirirken uyku düzeni oluşturmak.",
    image: "https://images.unsplash.com/photo-1628258448386-89d531a74d23?q=80&w=800&auto=format&fit=crop",
    date: "05 Mart 2024",
    author: "Seda Yılmaz"
  },
  {
    id: 3,
    title: "Gündüz Uykularını Düzenlemek",
    excerpt: "Bebeğiniz gündüzleri kısa mı uyuyor? Uykuyu uzatmanın ve kaliteli hale getirmenin püf noktaları.",
    image: "https://images.unsplash.com/photo-1520542352876-c56092019910?q=80&w=800&auto=format&fit=crop",
    date: "28 Şubat 2024",
    author: "Seda Yılmaz"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">Blog & Güncel Yazılar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Anne ve bebek dünyasına dair merak edilenler, ipuçları ve uzman görüşleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-darkRose">
                  Blog
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-darkRose transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-brand-darkRose font-bold text-sm hover:underline">
                  Devamını Oku →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="bg-brand-lightBlue text-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-indigo-200 transition-colors">
                Tüm Yazıları Gör
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;