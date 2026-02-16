import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSuccess = () => {
        setTimeout(() => {
            onClose();
            // Optionally redirect or refresh
            window.location.reload();
        }, 2000);
    };

    return (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Background backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

            {/* Scrollable container */}
            <div className="fixed inset-0 z-10 w-full overflow-y-auto" onClick={onClose}>
                <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
                    {/* Modal panel */}
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-auto sm:my-8 sm:w-full sm:max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold z-10 transition-colors"
                        >
                            ×
                        </button>

                        <div className="bg-white">
                            {mode === 'login' ? (
                                <div className="p-0">
                                    <LoginForm
                                        onSuccess={handleSuccess}
                                        onSwitchToRegister={() => setMode('register')}
                                    />
                                </div>
                            ) : (
                                <div className="p-0">
                                    <RegisterForm
                                        onSuccess={handleSuccess}
                                        onSwitchToLogin={() => setMode('login')}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
