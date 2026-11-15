import {
  Syringe,
  Sparkles,
  Microscope,
  HeartPulse,
  Award,
  Users,
  Stethoscope,
} from "lucide-react";

const trainingBadges = [
  {
    Icon: Syringe,
    iconColor: "text-primary",
    title: "حقن التجميل المتقدمة والفيلر والبوتوكس",
    subtitle: "Cosmetic Injection Techniques: Botox & Dermal Fillers",
  },
  {
    Icon: Sparkles,
    iconColor: "text-secondary",
    title: "الميزوثيرابي وعلاج الشعر ونضارة البشرة",
    subtitle: "Mesotherapy, Hair Rejuvenation & Skin Resurfacing",
  },
  {
    Icon: Microscope,
    iconColor: "text-primary",
    title: "تقنيات الليزر المتقدمة للأمراض الجلدية",
    subtitle: "Laser Technologies & Advanced Dermatological Devices",
  },
  {
    Icon: HeartPulse,
    iconColor: "text-secondary",
    title: "تقنيات المايكروبليدينج وعلاج الندبات",
    subtitle: "Microbleeding Techniques & Post-Acne Scar Revision",
  },
];

const societies = [
  "الجمعية المصرية للأمراض الجلدية (EDS)",
  "جمعية الطبيبات المصريات",
  "مؤتمرات شرم ديرما الدولية (Sharm Derma)",
  "مؤتمرات الأقصر لديرماتولوجي",
  "مؤتمر زايد الطبي للأمراض الجلدية",
  "مؤتمرات الأزهر الطبية والمؤتمرات التفاعلية (DMC)",
];

export function AboutSection() {
  return (
    <section className="w-full py-space-xl bg-surface" id="about-section">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 grid grid-cols-2 gap-space-sm relative">
            <div className="space-y-space-sm">
              <div className="rounded-xl overflow-hidden shadow-md h-52 bg-surface-container border border-outline-variant/30">
                <img
                  alt="غرفة الفحص والعلاج الطبي المجهزة"
                  className="w-full h-full object-cover"
                  src="/images/treatment-room.png"
                />
              </div>
              <div className="p-space-sm bg-primary-fixed rounded-xl text-on-primary-fixed">
                <div className="font-label-md text-label-md font-bold mb-1">
                  الرعاية الشخصية التخصصية
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-fixed-variant leading-relaxed">
                  خطط علاجية مفصلة تناسب طبيعة جلد كل مريض بدقة تامة وبإشراف
                  استشاري مباشر.
                </p>
              </div>
            </div>

            <div className="space-y-space-sm pt-space-md">
              <div className="p-space-sm bg-secondary-fixed rounded-xl text-on-secondary-fixed">
                <div className="font-label-md text-label-md font-bold mb-1">
                  تدخلات تجميلية آمنة
                </div>
                <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant leading-relaxed">
                  أحدث صيحات الحقن التجميلي الطبيعي بدون مبالغة، وبمواد معتمدة
                  من هيئات الدواء.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-52 bg-surface-container border border-outline-variant/30">
                <img
                  alt="مكتب الاستشارة الطبية"
                  className="w-full h-full object-cover"
                  src="/images/consultation-room.png"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-space-md">
            <div className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary">
              <Award className="w-4 h-4" />
              <span>الخبرة الأكاديمية والمهنية المعتمدة</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              د. نغم عماد ناصيف مكي
              <span className="block text-primary font-headline-sm text-headline-sm font-normal mt-1">
                استشاري الأمراض الجلدية والتناسلية والطب التجميلي
              </span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              استشاري معتمد من نقابة أطباء مصر، بخبرة سريرية تزيد عن ١٧ عاماً في
              تشخيص وعلاج طيف واسع من الحالات الجلدية الصعبة وتطبيق بروتوكولات
              الطب التجميلي غير الجراحي وتقنيات الليزر المتقدمة. تعتمد الدكتورة
              نغم منهجية تجمع بين العمق التشخيصي الأكاديمي والنهج المتمحور حول
              المريض لتحقيق نتائج علاجية وطبيعية تدوم طويلاً.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
              {trainingBadges.map((item) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/30"
                  >
                    <Icon
                      className={`w-5 h-5 mt-0.5 shrink-0 ${item.iconColor}`}
                    />
                    <div>
                      <h4 className="font-label-lg text-label-lg text-on-surface font-semibold">
                        {item.title}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-space-sm bg-surface-container-lowest rounded-xl border border-outline-variant/40 space-y-2">
              <div className="font-label-md text-label-md text-secondary font-bold flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>العضويات والمؤتمرات العلمية الدولية والمحلية المشاركة:</span>
              </div>
              <div className="flex flex-wrap gap-2 font-label-sm text-label-sm">
                {societies.map((society) => (
                  <span
                    key={society}
                    className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface"
                  >
                    {society}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between border border-outline-variant/30">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-title-md text-title-md text-on-surface font-bold">
                    تشخيص سريري دقيق وخطة علاجية مخصصة
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    كشف استشاري متكامل وخطة علاجية تناسب كل حالة بإشراف الدكتورة
                    نغم مباشرة.
                  </div>
                </div>
              </div>
              <a
                className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors whitespace-nowrap"
                href="#booking-section"
              >
                حجز استشارة
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

