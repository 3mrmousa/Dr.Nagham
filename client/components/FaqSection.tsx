"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ما هي الاعتمادات والتراخيص الرسمية للعيادة؟",
    answer:
      "الدكتورة نغم عماد ناصيف مكي استشاري أمراض جلدية وتناسلية مسجلة بالنقابة العامة لأطباء مصر (رقم التسجيل كاستشاري: 119666 - سنة 2022)، ورقم ترخيص وزارة الصحة: 247156، ورقم القيد بالجدول العام لنقابة الأطباء: 244156، وحاصلة على ماجستير الأمراض الجلدية والتناسلية وتجميل الجلد من جامعة الأزهر (2014).",
  },
  {
    question: "متى تظهر نتيجة جلسات البوتوكس؟",
    answer:
      "يبدأ مفعول البوتوكس وارتخاء العضلات التعبيرية بالظهور تدريجياً بين اليوم الثالث واليوم الخامس من الجلسة، وتكتمل النتيجة النهائية عند اليوم العاشر إلى الرابع عشر.",
  },
  {
    question: "هل تسبب جلسات الليزر وإزالة الشعر أية تصبغات؟",
    answer:
      "بالتأكيد لا، عند تطبيقها بأجهزة حديثة ومعايرة دقيقة تحت إشراف طبي متخصص. نعتمد أجهزة تبريد متطورة تحمي الطبقة السطحية للجلد وتناسب خصيصاً نوعية وتصبغات البشرة الشرقية لضمان سلامة تامة بدون أي حروق أو آثار.",
  },
  {
    question: "كم جلسة أحتاجها لعلاج تساقط الشعر واستعادة كثافته؟",
    answer:
      "يحدد الكشف الطبي المجهري السبب الجذري للتساقط. في المعتاد، يتكون الكورس العلاجي المكثف من ٤ إلى ٦ جلسات بلازما أو ميزوثيرابي بفاصل زمني من أسبوعين إلى ثلاثة أسابيع بين الجلسة والأخرى، يتبعها جلسات تثبيت دورية للحفاظ على الكثافة.",
  },
  {
    question: "هل يلزم الحجز مسبقاً قبل القدوم إلى العيادة؟",
    answer:
      "نعم، نحرص في عيادتنا على نظام المواعيد المسبقة احتراماً لوقت المراجعين ولتجنب أوقات الانتظار، ولضمان حصول كل حالة على الوقت الكافي للكشف والاستشارة المخصصة. يمكن حجز الموعد بسهولة عبر الهاتف أو الواتساب مباشرة.",
  },
];

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
          {faqs.map((faq, index) => {
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

