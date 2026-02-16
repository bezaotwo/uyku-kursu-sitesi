import React, { useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';

interface RegisterFormProps {
    onSuccess?: () => void;
    onSwitchToLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const validateForm = () => {
        if (!formData.email || !formData.password || !formData.confirmPassword || !formData.firstName || !formData.lastName) {
            setError('Lütfen tüm zorunlu alanları doldurun.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Geçerli bir e-posta adresi girin.');
            return false;
        }

        if (formData.password.length < 8) {
            setError('Şifre en az 8 karakter olmalıdır.');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Şifreler eşleşmiyor.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Sign up with Supabase Auth
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        phone: formData.phone || null,
                    },
                },
            });

            if (signUpError) {
                throw signUpError;
            }

            // Check if email confirmation is required
            if (data?.user && !data.user.confirmed_at) {
                setSuccess(true);
                if (onSuccess) {
                    setTimeout(() => onSuccess(), 3000);
                }
            } else {
                // Auto-confirmed (if email confirmation is disabled)
                setSuccess(true);
                if (onSuccess) {
                    setTimeout(() => onSuccess(), 2000);
                }
            }
        } catch (err: any) {
            console.error('Registration error:', err);

            // Handle Supabase-specific errors
            if (err.message?.includes('already registered')) {
                setError('Bu e-posta adresi zaten kayıtlı.');
            } else if (err.message?.includes('Password')) {
                setError('Şifre gereksinimleri karşılanmıyor.');
            } else if (err.message?.includes('confirmation email') || err.message?.includes('sending confirmation')) {
                setError('Doğrulama e-postası gönderilirken sistemsel bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
            } else {
                setError(err.message || 'Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.');
            }
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="w-full max-w-md mx-auto p-8">
                <div className="text-center">
                    <div className="mb-4 text-green-500 text-5xl">✓</div>
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Kayıt Başarılı!</h2>
                    <p className="text-gray-600 mb-2 font-semibold">
                        Lütfen e-posta adresinize gönderilen doğrulama linkine tıklayın.
                    </p>
                    <p className="text-gray-500 text-sm mb-6">
                        Doğrulama e-postası gönderdik. E-posta gelen kutunuzu ve spam klasörünüzü kontrol edin.
                    </p>
                    {onSwitchToLogin && (
                        <button
                            onClick={onSwitchToLogin}
                            className="text-brand-gold hover:underline font-medium"
                        >
                            Giriş sayfasına dön
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto p-8">
            <h2 className="text-3xl font-bold text-brand-blue mb-6 text-center">Üye Ol</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        Ad *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Soyad *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-posta *
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
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefon (Opsiyonel)
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="5551234567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Şifre *
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
                        required
                        minLength={8}
                    />
                    <p className="text-xs text-gray-500 mt-1">En az 8 karakter</p>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                        Şifre Tekrar *
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
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
                    {loading ? 'Kayıt yapılıyor...' : 'Üye Ol'}
                </button>
            </form>

            {onSwitchToLogin && (
                <p className="mt-6 text-center text-gray-600">
                    Zaten hesabınız var mı?{' '}
                    <button
                        onClick={onSwitchToLogin}
                        className="text-brand-gold hover:underline font-medium"
                    >
                        Giriş Yap
                    </button>
                </p>
            )}
        </div>
    );
};

export default RegisterForm;
