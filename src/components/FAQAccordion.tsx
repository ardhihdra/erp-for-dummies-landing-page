"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-colors"
                >
                    <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    {expandedFaq === index && (
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
