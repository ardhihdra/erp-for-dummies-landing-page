"use client";

import { useState } from "react";
import Link from "next/link";
import { industries } from "@/data/industries";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function IndustrySelector() {
    const [selectedIndustry, setSelectedIndustry] = useState(0);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Industry Selector */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Pilih Industri Anda
                        </label>
                        <div className="relative">
                            <select
                                value={selectedIndustry}
                                onChange={(e) => setSelectedIndustry(Number(e.target.value))}
                                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-medium appearance-none cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                                {industries.map((industry, index) => (
                                    <option key={industry.id} value={index}>
                                        {industry.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                        <p className="text-gray-700 leading-relaxed">
                            {industries[selectedIndustry].description}
                        </p>
                    </div>

                    <Link
                        href={`/apps/${industries[selectedIndustry].slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                    >
                        <span>Lihat Detail</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Features List */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Fitur Utama
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {industries[selectedIndustry].features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all"
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                <span className="text-sm font-medium text-gray-700">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
