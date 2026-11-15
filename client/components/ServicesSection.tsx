import {
  ScanFace,
  Sun,
  ShieldPlus,
  Flower2,
  Syringe,
  Sparkles,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    Icon: ScanFace,
    iconBoxClass: "bg-primary-fixed text-primary",
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
    Icon: Sun,
    iconBoxClass: "bg-secondary-fixed text-secondary",
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
    Icon: ShieldPlus,
    iconBoxClass: "bg-primary-fixed text-primary",
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
    Icon: Flower2,
    iconBoxClass: "bg-secondary-fixed text-secondary",
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
    Icon: Syringe,
    iconBoxClass: "bg-primary-fixed text-primary",
    dotClass: "bg-primary",
    englishTitle: "Botox & Dermal Fillers",
    title: "الحقن التجميلي غير الجراحي",
    description:
      "إجراءات دقيقة لاستعادة تناسق الملامح، علاج تجاعيد التعبير، تحديد خط الفك، وحقن الفيلر الهيالوروني بمقاييس جمالية راقية تبتعد عن المبالغة.",
    features: [
      "بوتوكس الجبهة، محيط العين، وتجاعيد الرقبة",
      "فيلر الشفاه والخدود والذقن الطبيعي",
      "حقن علاج فرط التعرق (Hyperhidrosis)",
    ],
    footerLabel: "مواد مرخصة دولياً",
  },
  {
    Icon: Sparkles,
    iconBoxClass: "bg-secondary-fixed text-secondary",
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
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <div
                key={service.englishTitle}
                className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30"
              >
                <div className="space-y-space-sm">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBoxClass}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      {service.englishTitle}
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface font-bold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
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
                  <a
                    className="font-label-md text-label-md text-primary font-bold hover:underline inline-flex items-center gap-1"
                    href="#booking-section"
                  >
                    <span>حجز كشف</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

