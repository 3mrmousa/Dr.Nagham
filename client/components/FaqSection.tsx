"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CLINIC_FAQS } from "@/lib/seo";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-4xl mx-auto px-margin md:px-margin-tablet">
        <div className="text-center space-y-1 mb-space-lg">
          <span className="font-label-md text-label-md text-secondary font-bold">
            الأسئلة الشائعة
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            إجابات د. نغم على أكثر استفساراتكم شيوعاً
          </h2>
        </div>

        <div className="space-y-space-xs">
          {CLINIC_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-right p-space-sm rounded-xl bg-surface-container-low cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between font-label-lg text-label-lg text-on-surface font-semibold">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

