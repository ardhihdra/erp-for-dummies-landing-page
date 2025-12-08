"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {isLogin ? "Masuk" : "Daftar"}
                    </h2>
                    <p className="text-gray-600">
                        {isLogin
                            ? "Masuk ke akun Anda untuk melanjutkan"
                            : "Buat akun baru untuk memulai"}
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                placeholder="Masukkan nama lengkap"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="nama@perusahaan.com"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {isLogin && (
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded border-gray-300"
                                />
                                Ingat saya
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                Lupa password?
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        {isLogin ? "Masuk" : "Daftar"}
                    </button>
                </form>

                {/* Toggle */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        {isLogin ? "Daftar sekarang" : "Masuk"}
                    </button>
                </div>
            </div>
        </div>
    );
}
