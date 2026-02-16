import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import UserProfile from '../components/profile/UserProfile';

const ProfileDemo: React.FC = () => {
    const { login, isAuthenticated, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
        } finally {
            setIsLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#1f1b4b] to-[#2d2860] flex items-center justify-center">
                <p className="text-white text-xl">Yükleniyor...</p>
            </div>
        );
    }

    if (isAuthenticated) {
        return <UserProfile />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1f1b4b] to-[#2d2860] flex items-center justify-center px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-[#caa269]/30">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Giriş Yap</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-[#caa269] text-sm font-semibold mb-2 block">
                            E-posta
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#caa269]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#caa269]"
                            placeholder="ornek@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-[#caa269] text-sm font-semibold mb-2 block">
                            Şifre
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#caa269]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#caa269]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                            <p className="text-red-300 text-sm">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#caa269] text-[#1f1b4b] px-6 py-3 rounded-full font-bold hover:bg-[#b89158] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    Demo için: Önce bir kullanıcı oluşturun ve e-posta doğrulaması yapın.
                </p>
            </div>
        </div>
    );
};

export default ProfileDemo;
