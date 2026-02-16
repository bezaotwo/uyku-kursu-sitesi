import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Loader } from 'lucide-react';

const UserProfile: React.FC = () => {
    const { user, loading, logout } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#1f1b4b] to-[#2d2860] flex items-center justify-center">
                <div className="text-center">
                    <Loader className="w-12 h-12 text-[#caa269] animate-spin mx-auto mb-4" />
                    <p className="text-white text-lg">Yükleniyor...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#1f1b4b] to-[#2d2860] flex items-center justify-center px-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-[#caa269]/30">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-red-400 text-3xl">⚠️</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Hata</h3>
                        <p className="text-gray-300 mb-6">Oturum bulunamadı. Lütfen giriş yapın.</p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-[#caa269] text-[#1f1b4b] px-6 py-3 rounded-full font-bold hover:bg-[#b89158] transition-all"
                        >
                            Ana Sayfaya Dön
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1f1b4b] to-[#2d2860] py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Hoşgeldiniz, {user?.first_name || 'Kullanıcı'}
                    </h1>
                    <p className="text-[#caa269] text-lg">
                        Profil bilgilerinizi buradan görüntüleyebilirsiniz
                    </p>
                </div>

                {/* Profile Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-[#caa269]/30 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#caa269]/20">
                        <div className="w-20 h-20 bg-[#caa269] rounded-full flex items-center justify-center">
                            <User className="w-10 h-10 text-[#1f1b4b]" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Profil Bilgileri</h2>
                            <p className="text-gray-300">Kişisel bilgileriniz</p>
                        </div>
                    </div>

                    {/* Profile Information */}
                    <div className="space-y-6">
                        {/* Name */}
                        <div className="bg-white/5 rounded-xl p-6 border border-[#caa269]/20">
                            <label className="text-[#caa269] text-sm font-semibold mb-2 block">
                                Ad Soyad
                            </label>
                            <div className="flex items-center gap-3">
                                <User className="w-5 h-5 text-gray-400" />
                                <p className="text-white text-lg font-medium">
                                    {user?.first_name} {user?.last_name}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white/5 rounded-xl p-6 border border-[#caa269]/20">
                            <label className="text-[#caa269] text-sm font-semibold mb-2 block">
                                E-posta Adresi
                            </label>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <p className="text-white text-lg font-medium">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 pt-6 border-t border-[#caa269]/20 flex flex-col sm:flex-row gap-4">
                        <button
                            className="flex-1 bg-[#caa269] text-[#1f1b4b] px-6 py-3 rounded-full font-bold hover:bg-[#b89158] transition-all shadow-lg"
                            onClick={() => alert('Bilgileri güncelleme özelliği yakında eklenecek!')}
                        >
                            Bilgileri Güncelle
                        </button>
                        <button
                            className="flex-1 bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all border border-[#caa269]/30"
                            onClick={logout}
                        >
                            Çıkış Yap
                        </button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Hesap ID: {user?.id}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
