import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface LoginFormProps {
    onSuccess?: () => void;
    onSwitchToRegister?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onSwitchToRegister }) => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await login(formData.email, formData.password);
            if (onSuccess) {
                onSuccess();
            }
        } catch (err: any) {
            console.error('Login error:', err);

            // Handle Supabase-specific errors
            if (err.message?.includes('Invalid login credentials')) {
                setError('E-posta veya şifre hatalı.');
            } else if (err.message?.includes('Email not confirmed')) {
                setError('E-posta adresiniz henüz doğrulanmamış. Lütfen e-postanızdaki doğrulama linkine tıklayın.');
            } else if (err.message?.includes('User not found')) {
                setError('E-posta veya şifre hatalı.');
            } else {
                setError(err.message || 'Giriş yapılamadı. Lütfen tekrar deneyin.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8">
            <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">Giriş Yap</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-posta
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Şifre
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        required
                    />
                </div>

                {error && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-gold text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                </button>
            </form>

            {onSwitchToRegister && (
                <div className="mt-6 text-center border-t pt-6">
                    <p className="text-gray-600 mb-3">
                        Henüz hesabınız yok mu?
                    </p>
                    <button
                        onClick={onSwitchToRegister}
                        className="w-full border-2 border-brand-gold text-brand-gold py-2 rounded-lg font-bold hover:bg-brand-gold hover:text-white transition-all uppercase tracking-wide"
                    >
                        KAYIT OL
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
