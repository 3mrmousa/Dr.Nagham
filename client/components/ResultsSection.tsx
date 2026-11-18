import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Lock } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

const clinicalCases = [
  {
    image: "/images/services/case-skinbooster.png",
    alt: "نتائج علاج نضارة البشرة والسكين بوستر",
    beforeLabel: "قبل العلاج",
    afterLabel: "بعد جلستين",
    title: "جلسات سكين بوستر ونضارة البشرة",
    description:
      "تحسن ملحوظ في ترطيب ومرونة الجلد مع اختفاء بهتان البشرة في غضون أسبوعين.",
    metaLeft: "فترة التعافي: فورية (بدون انقطاع)",
    metaRight: "رضا الحالة: ١٠٠٪",
  },
  {
    image: "/images/services/case-laser.png",
    alt: "علاج التصبغات والندبات بالليزر",
    beforeLabel: "جلسة ١",
    afterLabel: "بعد الكورس",
    title: "علاج التصبغات والندبات بالليزر",
    description:
      "توحيد درجة لون البشرة وتلاشي آثار حب الشباب البنية والندبات بنسبة تفوق ٨٥٪.",
    metaLeft: "عدد الجلسات: ٤ جلسات",
    metaRight: "التقنية: فراكشنال وليزر كربوني",
  },
];

export function ResultsSection() {
  return (
    <section className="w-full py-space-xl bg-surface" id="results-section">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <div className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary mb-1">
              <BadgeCheck className="w-4 h-4" />
              <span>نتائج سريرية موثقة</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              نتائج العلاج بالعيادة وتطور الحالات
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            نولي خصوصية المرضى والمراجعين الأولوية القصوى. نعرض نماذج دقيقة
            توضح كفاءة الجلسات مع الحفاظ على الخصوصية والسرية الطبية التامة
            وبموافقة مسبقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {clinicalCases.map((item, index) => (
            <TiltedCard
              key={item.title}
              containerWidth="100%"
              containerHeight="410px"
              imageWidth="100%"
              imageHeight="410px"
              rotateAmplitude={8}
              scaleOnHover={1.03}
              glare={0.25}
              shadow={0.35}
              radius={20}
              intro
              introDelay={index * 90}
              captionText={item.metaRight}
              showTooltip
              style={
                {
                  "--tc-shadow-color": "rgba(43, 29, 36, 0.16)",
                } as CSSProperties
              }
            >
              <div className="w-full h-full bg-surface-container-lowest rounded-[20px] overflow-hidden border border-outline-variant/30 flex flex-col">
                <div className="relative h-60 shrink-0 bg-surface-container">
                  <Image
                    alt={item.alt}
                    fill
                    className="object-cover"
                    src={item.image}
                  />
                  <div className="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-inverse-surface/80 text-surface-bright font-label-sm text-label-sm">
                    {item.beforeLabel}
                  </div>
                  <div className="absolute top-3 left-3 px-space-xs py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                    {item.afterLabel}
                  </div>
                </div>
                <div className="p-space-md flex-1 flex flex-col justify-between gap-space-xs">
                  <div className="space-y-space-xs">
                    <h4 className="font-title-md text-title-md text-on-surface font-bold">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-secondary border-t border-outline-variant/20">
                    <span>{item.metaLeft}</span>
                    <span className="font-bold text-primary">
                      {item.metaRight}
                    </span>
                  </div>
                </div>
              </div>
            </TiltedCard>
          ))}
        </div>

        <div className="mt-space-lg p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md border border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                التزام صارم بسرية وخصوصية الحالات
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                جميع الصور المعروضة تم التقاطها ونشرها بموافقة كتابية مسبقة من
                المرضى والمراجعين.
              </p>
            </div>
          </div>
          <Link
            className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-bright border border-outline-variant/40 transition-colors whitespace-nowrap"
            href="/booking"
          >
            تقييم الحالة مع الدكتورة
          </Link>
        </div>
      </div>
    </section>
  );
}

