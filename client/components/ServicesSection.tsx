import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, ArrowLeft } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard";

const services = [
  {
    iconSrc: "/images/services/acne.jpg",
    dotClass: "bg-primary",
    englishTitle: "Acne & Post-Acne Scarring",
    title: "حب الشباب وآثاره والندبات",
    description:
      "تشخيص الأسباب الهرمونية والجلدية لحب الشباب الحاد والمزمن، وتطبيق تقنيات علاج الندبات العميقة والسطحية عبر تقشير الجلد وتقنيات الفراكشنال الدقيقة.",
    features: [
      "تقطيع الألياف والندبات (Subcision)",
      "علاج الحفر والآثار الصعبة",
      "تنظيم الإفراز الدهني وتنقية البشرة",
    ],
    footerLabel: "بروتوكول سريري مخصص",
  },
  {
    iconSrc: "/images/services/pigmentation.jpg",
    dotClass: "bg-secondary",
    englishTitle: "Pigmentation & Melasma",
    title: "التصبغات والكلف وتوحيد اللون",
    description:
      "علاج البقع التصبغية المعقدة، كلف الحمل، والتصبغات الناتجة عن الالتهابات والشمس باستخدام تركيبات التقشير الطبي الآمن والأجهزة التخصصية.",
    features: [
      "التقشير البارد والكيميائي العلاجي",
      "جلسات تفتيح وتوحيد لون البشرة",
      "برامج وقاية من عودة التصبغ",
    ],
    footerLabel: "نتائج مدروسة وآمنة",
  },
  {
    iconSrc: "/images/services/eczema.jpg",
    dotClass: "bg-primary",
    englishTitle: "Chronic Skin Conditions",
    title: "الإكزيما والتهابات الجلد المزمنة",
    description:
      "تشخيص سريري شامل لأمراض الحساسية التلامسية، الإكزيما التأتبية، الصدفية، والتهابات الجلد المزمنة مع خطط علاجية دوائية ووقائية طويلة الأمد.",
    features: [
      "فحص مجهري وتشخيص دقيق",
      "علاج الحساسية والحكة الشديدة",
      "إرشادات الحفاظ على حاجز البشرة",
    ],
    footerLabel: "تشخيص استشاري معتمد",
  },
  {
    iconSrc: "/images/services/hair.jpg",
    dotClass: "bg-secondary",
    englishTitle: "Hair Loss & Scalp Disorders",
    title: "تساقط الشعر وأمراض فروة الرأس",
    description:
      "فحص شامل لتساقط الشعر الوراثي والتيلوجيني، القشرة المزمنة، والثعلبة، عبر حقن البلازما الغنية بالصفائح (PRP) والميزوثيرابي المغذي للبصيلات.",
    features: [
      "جلسات بلازما الشعر المنشطة (PRP)",
      "ميزوثيرابي إيقاف التساقط والإنبات",
      "علاج التهابات وقشرة الفروة",
    ],
    footerLabel: "تحفيز الكثافة الحيوية",
  },
  {
    iconSrc: "/images/services/botox.jpg",
    dotClass: "bg-primary",
    englishTitle: "Botox & Cosmetic Injections",
    title: "الحقن التجميلي غير الجراحي",
    description:
      "إجراءات دقيقة لاستعادة نضارة الملامح وعلاج تجاعيد التعبير بمقاييس جمالية راقية تبتعد عن المبالغة.",
    features: [
      "بوتوكس الجبهة، محيط العين، وتجاعيد الرقبة",
      "حقن علاج فرط التعرق (Hyperhidrosis)",
    ],
    footerLabel: "مواد مرخصة دولياً",
  },
  {
    iconSrc: "/images/services/laser.jpg",
    dotClass: "bg-secondary",
    englishTitle: "Laser & Skin Resurfacing",
    title: "تقشير الجلد والليزر وتجديد النضارة",
    description:
      "تطبيق أحدث أجهزة الليزر الطبية، الليزر الكربوني، التقشير الكيميائي، وحقن السكين بوستر والبروفايلو لتحفيز إنتاج الكولاجين واستعادة المرونة.",
    features: [
      "إزالة الشعر بالليزر بأنظمة تبريد حديثة",
      "حقن البروفايلو (Profhilo) وسكين بوستر",
      "تقشير كربوني لتنقية وتضييق المسام",
    ],
    footerLabel: "نضارة ونقاء فوري",
  },
];

export function ServicesSection() {
  return (
    <section
      className="w-full py-space-xl bg-surface-container-low"
      id="services-section"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm">
            <ClipboardList className="w-4 h-4" />
            <span>مجالات التخصص الإكلينيكي المعتمدة</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            التخصصات السريرية والعلاجية (Clinical Specializations)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            بروتوكولات علاجية قائمة على الطب المسند بالدليل ومطبقة بأعلى درجات
            الأمان الطبي والتعقيم الموثق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((service, index) => (
              <TiltedCard
                key={service.englishTitle}
                containerWidth="100%"
                containerHeight="390px"
                imageWidth="100%"
                imageHeight="390px"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                glare={0.25}
                shadow={0.35}
                radius={20}
                intro
                introDelay={index * 70}
                captionText={service.footerLabel}
                showTooltip
                style={
                  {
                    "--tc-shadow-color": "rgba(43, 29, 36, 0.16)",
                  } as CSSProperties
                }
              >
                <div className="w-full h-full bg-surface-container-lowest p-space-md flex flex-col justify-between border border-outline-variant/30 rounded-[20px]">
                  <div className="space-y-space-sm">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-outline-variant/25 flex items-center justify-center shrink-0">
                      <Image
                        src={service.iconSrc}
                        alt={service.title}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">
                        {service.englishTitle}
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface font-bold">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1 font-label-sm text-label-sm text-on-surface-variant pt-space-xs">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-1.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${service.dotClass}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-outline-variant/20">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {service.footerLabel}
                    </span>
                    <Link
                      className="font-label-md text-label-md text-primary font-bold hover:underline inline-flex items-center gap-1"
                      href="/booking"
                    >
                      <span>حجز كشف</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </TiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

