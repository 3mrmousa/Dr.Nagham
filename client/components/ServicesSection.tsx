import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, ArrowLeft, Microscope } from "lucide-react";
import TiltedCard, { TiltedCardLayer } from "@/components/ui/TiltedCard";

const services = [
  {
    iconSrc: "/images/services/acne.jpg",
    dotClass: "bg-primary",
    englishTitle: "Acne & Post-Acne Scarring",
    title: "حب الشباب وآثاره والندبات",
    description:
      "تشخيص الأسباب الهرمونية والجلدية لحب الشباب الحاد والمزمن، وتطبيق تقنيات علاج الندبات العميقة والسطحية عبر تقشير الجلد وتقنيات الفراكشنال الدقيقة.",
    features: [
      "* جلسات تقشير مخصصة لتخفيف الحبوب بشكل فعال واسرع من العلاج الروتيني",
      "جلسة تنضيف طبية للرؤوس السوداء والبيضاء بشكل نهائي ",
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
      "ارشادات مفصلة للوقاية والحفاظ على الجلد في حالة الامراض المزمنة",
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
      "جلسات انبات الشعر عالية الغعالية بتقنيات خديثة لتغذية وتقوية بصيلات الشعر وتحسين قوامها",
      "جلسات حقن موضعي ومايكروبيليدينج مخصصة للصلع ونحافة الشعر الوراثية",
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
      "حقن مواد اذابة للخلايا الدهنية عن طريق الجلد للتخسيس الموضعي الآمن خاصة للذقن المزدوجة",
      "حقن مواد محفزة للكولاجين ومغذيات للحفاظ على حيوية البشرة وتحسين قوامها",
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

const clinicDevices = [
  {
    imageSrc: "/images/services/woods-light.jpg",
    badge: "Wood's Light",
    title: "جهاز الكشف الضوئي (Wood's Light)",
    description:
      "متوفر جهاز الكشف الضوئي لتشخيص البهاق والتصبغات وبعض الأمراض الجلدية بدقة عالية.",
  },
  {
    imageSrc: "/images/services/cryotherapy.jpg",
    badge: "Cryotherapy & Electrocautery",
    title: "الكي البارد والكهربائي (الكي بالتبريد)",
    description:
      "علاج السنط والزوائد الجلدية بجهاز الكي البارد والكهربائي بما يناسب كل حالة.",
  },
  {
    imageSrc: "/images/services/dermapen.jpg",
    badge: "Dermapen & Microbleeding",
    title: "جلسات الديرمابن والمايكروبليدينج",
    description:
      "تقنيات المايكروبليدينج والديرمابن لعلاج الندبات، تجديد البشرة، وتحفيز الكولاجين.",
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

        {/* Diagnostic Devices & Real Clinic Procedures */}
        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/30 space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-semibold">
                تجهيزات وتقنيات العيادة الفعلية
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                أجهزة التشخيص والعلاج التخصصية بالعيادة
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              صور حقيقية من داخل العيادة أثناء استخدام أحدث أجهزة التشخيص الضوئي
              والعلاج بالتبريد والمايكروبليدينج.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {clinicDevices.map((device, index) => (
              <TiltedCard
                key={device.badge}
                imageSrc={device.imageSrc}
                altText={device.title}
                captionText={device.badge}
                showTooltip
                containerWidth="100%"
                containerHeight="420px"
                imageWidth="100%"
                imageHeight="420px"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                glare={0.25}
                shadow={0.35}
                radius={20}
                intro
                introDelay={index * 90}
                style={
                  {
                    "--tc-shadow-color": "rgba(43, 29, 36, 0.2)",
                  } as CSSProperties
                }
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <TiltedCardLayer depth={22}>
                  <div className="h-full flex flex-col justify-end p-5 text-white text-start">
                    <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-primary/90 text-on-primary text-[11px] font-bold mb-2">
                      {device.badge}
                    </span>
                    <h4 className="font-title-md text-title-md font-bold leading-snug mb-1">
                      {device.title}
                    </h4>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {device.description}
                    </p>
                  </div>
                </TiltedCardLayer>
              </TiltedCard>
            ))}
          </div>

          {/* Dermoscopy Highlight Banner */}
          <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/35 p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-outline-variant/30 flex items-center justify-center shrink-0">
                <Image
                  src="/images/about/dermatoscope-laser.jpg"
                  alt="جهاز ديرموسكوب (منظار الجلد)"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-bold">
                  <Microscope className="w-4 h-4" />
                  <span>Dermoscopy — الفحص المجهري للجلد</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-bold">
                  جهاز الديرموسكوب (منظار الجلد) للتشخيص الدقيق
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  متوفر جهاز ديرموسكوب (منظار الجلد) لتشخيص أدق للعديد من أمراض
                  الجلد والشعر والأورام السطحية.
                </p>
              </div>
            </div>

            <Link
              href="/booking"
              className="px-space-md py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary transition-colors whitespace-nowrap inline-flex items-center gap-1.5 shrink-0"
            >
              <span>حجز فحص بالمنظار</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
