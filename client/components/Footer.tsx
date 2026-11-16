import {
  MapPin,
  Phone,
  Mail,
  Clock,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const specializationsList = [
  "علاج حب الشباب وآثاره والندبات (Acne)",
  "علاج التصبغات والكلف والتقشير الطبي",
  "الإكزيما والتهابات الجلد والأمراض المزمنة",
  "تساقط الشعر ومشاكل فروة الرأس والبلازما",
  "الحقن التجميلي غير الجراحي (بوتوكس)",
  "تقنيات الليزر المتقدمة وتجديد النضارة",
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(43,29,36,0.03)]">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
        <div className="space-y-space-md">
          <div className="flex items-center gap-space-sm">
            <img
              alt="شعار د. نغم عماد"
              className="w-15 h-15 object-contain"
              src="/images/logo.svg"
            />
            <div>
              <h4 className="font-title-md text-title-md text-primary leading-tight">
                د. نغم عماد تاصيف
              </h4>
              <span className="text-xs text-on-surface-variant font-medium">
                د. نغم عماد ناصيف مكي
              </span>
            </div>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            استشاري الأمراض الجلدية والتناسلية والطب التجميلي. خبرة سريرية موثقة
            تمتد لأكثر من ١٧ عاماً في تشخيص وعلاج أمراض الجلد وتطبيق التقنيات
            التجميلية غير الجراحية.
          </p>

          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
              استشاري نقابة أطباء مصر (119666)
            </span>
            <span className="px-space-sm py-space-xs rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
              ترخيص صحة (247156)
            </span>
          </div>
        </div>

        <div className="space-y-space-md">
          <h5 className="font-headline-sm text-headline-sm text-on-surface">
            التخصصات السريرية
          </h5>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            {specializationsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-space-md">
          <h5 className="font-headline-sm text-headline-sm text-on-surface">
            معلومات العيادة والتواصل
          </h5>
          <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-start gap-space-xs">
              <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <span>
                مدينة ٦ أكتوبر - مبنى العيادات التخصصية، أعلى قطونيل وكارينا،
                بجوار معمل البرج
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <span className="dir-ltr font-bold text-on-surface">
                01014056201 / 01000118500
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <span className="dir-ltr">nagamnm81@gmail.com</span>
            </div>
            <div className="flex items-start gap-space-xs">
              <Clock className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                <div>السبت: ١:٣٠ م – ٦:٣٠ م</div>
                <div>الإثنين: ٦:٠٠ م – ١٠:٣٠ م</div>
                <div>الأربعاء: ١:٠٠ م – ٦:٣٠ م</div>
                <div className="opacity-80">
                  الأحد، الثلاثاء، الخميس، الجمعة: مغلق
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-space-md">
          <h5 className="font-headline-sm text-headline-sm text-on-surface">
            أجنحة العيادة والوثائق
          </h5>
          <div className="grid grid-cols-3 gap-space-xs">
            <div className="h-16 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant text-center font-label-sm text-label-sm p-1">
              غرفة الكشف
            </div>
            <div className="h-16 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant text-center font-label-sm text-label-sm p-1">
              جناح الإجراءات
            </div>
            <div className="h-16 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant text-center font-label-sm text-label-sm p-1">
              شهادة الاستشاري
            </div>
          </div>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <a
              aria-label="رابط الاستفسار"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              href="#credentials-section"
            >
              <BadgeCheck className="w-4 h-4" />
            </a>
            <a
              aria-label="واتساب"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              href="https://wa.me/201014056201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              aria-label="اتصال"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              href="tel:01014056201"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md flex flex-col md:flex-row items-center justify-between text-on-surface-variant font-label-md text-label-md gap-space-sm border-t border-outline-variant/30">
        <p>
          © ٢٠٢٥ عيادة د. نغم عماد تاصيف (د. نغم عماد ناصيف مكي) — استشاري
          الأمراض الجلدية والتناسلية والطب التجميلي. جميع الحقوق محفوظة.
        </p>
        <div className="flex items-center gap-space-md">
          <a className="hover:text-primary transition-colors" href="#">
            سياسة الخصوصية الطبية
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            اللوائح المهنية
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="#credentials-section"
          >
            بيانات القيد والترخيص
          </a>
        </div>
      </div>
    </footer>
  );
}
