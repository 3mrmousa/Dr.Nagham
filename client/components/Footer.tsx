import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const PAGE_LINKS = [
  { href: "/", label: "الرئيسية وآراء المراجعين" },
  { href: "/about", label: "عن الاستشاري والعيادة" },
  { href: "/about#credentials-section", label: "الشهادات والاعتمادات" },
  { href: "/services", label: "التخصصات والنتائج السريرية" },
  { href: "/services#results-section", label: "حالات قبل وبعد" },
  { href: "/booking", label: "حجز موعد كشف" },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(43,29,36,0.03)]">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
        {/* Clinic Brand */}
        <div className="space-y-space-md">
          <Link href="/" className="flex items-center gap-space-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="شعار د. نغم عماد"
              className="w-15 h-15 object-contain"
              src="/images/shared/logo.svg"
            />
            <div>
              <h4 className="font-title-md text-title-md text-primary leading-tight">
                د. نغم عماد تاصيف
              </h4>
              <span className="text-xs text-on-surface-variant font-medium">
                د. نغم عماد ناصيف مكي
              </span>
            </div>
          </Link>

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

        {/* Quick Page Links */}
        <div className="space-y-space-md">
          <h5 className="font-headline-sm text-headline-sm text-on-surface">
            أقسام الموقع
          </h5>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            {PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinic Contact & Hours */}
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
                <a href="tel:01014056201" className="hover:text-primary">
                  01014056201
                </a>{" "}
                /{" "}
                <a href="tel:01000118500" className="hover:text-primary">
                  01000118500
                </a>
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a
                href="mailto:nagamnm81@gmail.com"
                className="dir-ltr hover:text-primary transition-colors"
              >
                nagamnm81@gmail.com
              </a>
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

        {/* Clinic Shortcuts & Social */}
        <div className="space-y-space-md">
          <h5 className="font-headline-sm text-headline-sm text-on-surface">
            روابط سريعة
          </h5>
          <div className="grid grid-cols-3 gap-space-xs">
            <Link
              href="/about"
              className="h-16 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center text-on-surface-variant hover:text-primary text-center font-label-sm text-label-sm p-1"
            >
              عن الاستشاري
            </Link>
            <Link
              href="/services"
              className="h-16 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center text-on-surface-variant hover:text-primary text-center font-label-sm text-label-sm p-1"
            >
              الخدمات والنتائج
            </Link>
            <Link
              href="/booking"
              className="h-16 rounded-lg bg-primary-fixed hover:bg-primary-fixed-dim transition-colors flex items-center justify-center text-on-primary-fixed font-bold text-center font-label-sm text-label-sm p-1"
            >
              حجز موعد
            </Link>
          </div>
          <div className="flex items-center gap-space-sm pt-space-xs">
            <Link
              aria-label="الشهادات والاعتمادات"
              className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              href="/about#credentials-section"
            >
              <BadgeCheck className="w-4 h-4" />
            </Link>
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
          <Link
            className="hover:text-primary transition-colors"
            href="/about#credentials-section"
          >
            بيانات القيد والترخيص
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/services"
          >
            الخدمات الطبية
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/booking"
          >
            احجز موعدك
          </Link>
        </div>
      </div>
    </footer>
  );
}
