import { Phone, Mail, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(43,29,36,0.05)]">
      <div className="hidden lg:block bg-surface-container-low text-on-surface-variant py-space-xs">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between font-label-md text-label-md">
          <div className="flex items-center gap-space-lg">
            <div className="flex items-center gap-space-xs">
              <Phone className="w-4 h-4 text-secondary" />
              <span>للحجز والاستفسار:</span>
              <a
                className="text-on-surface hover:text-primary transition-colors dir-ltr font-label-md text-label-md"
                href="tel:01014056201"
              >
                01014056201
              </a>
              <span className="text-outline-variant">|</span>
              <a
                className="text-on-surface hover:text-primary transition-colors dir-ltr font-label-md text-label-md"
                href="tel:01000118500"
              >
                01000118500
              </a>
            </div>

            <div className="flex items-center gap-space-xs">
              <Mail className="w-4 h-4 text-secondary" />
              <a
                className="hover:text-primary transition-colors dir-ltr"
                href="mailto:nagamnm81@gmail.com"
              >
                nagamnm81@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-space-xs">
              <Clock className="w-4 h-4 text-secondary" />
              <span>
                السبت (١:٣٠–٦:٣٠ م) • الإثنين (٦–١٠:٣٠ م) • الأربعاء (١–٦:٣٠ م)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>ترخيص صحة: 247156 | قيد نقابة: 244156</span>
            </div>
            <a
              className="flex items-center gap-space-xs text-primary hover:text-primary-container transition-colors font-label-md text-label-md"
              href="https://wa.me/201014056201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب العيادة</span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <img
            alt="شعار د. نغم عماد"
            className="w-15 h-15 object-contain"
            src="/images/logo.svg"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              د. نغم عماد ناصيف مكي
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              استشاري الأمراض الجلدية والتناسلية والطب التجميلي
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-md">
          <a
            aria-current="page"
            className="px-space-sm py-space-xs transition-colors bg-primary-container text-on-primary font-label-lg rounded-lg"
            href="#"
          >
            الرئيسية
          </a>
          <a
            className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#credentials-section"
          >
            الشهادات والاعتمادات
          </a>
          <a
            className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#about-section"
          >
            عن الاستشاري
          </a>
          <a
            className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#services-section"
          >
            التخصصات والخدمات
          </a>
          <a
            className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#results-section"
          >
            النتائج السريرية
          </a>
          <a
            className="px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface transition-colors font-label-lg text-label-lg"
            href="#reviews"
          >
            آراء وتجارب
          </a>
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg hover:bg-primary transition-all shadow-[0_4px_12px_-2px_rgba(200,29,103,0.25)]"
            href="#booking-section"
          >
            احجز موعد كشف
          </a>
        </div>
      </div>
    </header>
  );
}
