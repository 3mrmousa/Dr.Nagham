import { ArrowLeft, BadgeCheck, PhoneCall, Mail, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface-bright pb-space-xl">
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary-fixed-dim/30 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-lg lg:pt-space-xl relative z-10">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm mb-space-md flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
            طبيبة استشارية مسجلة بنقابة أطباء مصر
          </span>
          <span className="text-outline-variant text-label-sm">|</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-medium">
            ترخيص صحة: 247156 • قيد نقابة: 244156 • استشاري: 119666
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <div className="space-y-space-xs">
              <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight tracking-tight">
                رعاية طبية تخصصية وإشراقة طبيعية بإشراف
                <span className="text-primary block mt-1">
                  د. نغم عماد ناصيف مكي
                </span>
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary font-medium">
                استشاري الأمراض الجلدية والتناسلية والطب التجميلي (عيادة د. نغم
                عماد تاصيف)
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed pt-space-xs">
                خبرة إكلينيكية متخصصة تمتد لأكثر من ١٧ عاماً (منذ ٢٠٠٨) في تشخيص
                وعلاج أمراض الجلد المستعصية وتطبيق أحدث أساليب الطب التجميلي غير
                الجراحي وفق أعلى المعايير الطبية الدولية وضوابط الأمان
                الإكلينيكي.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-space-sm pt-space-xs max-w-xl">
              <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
                <div className="font-headline-md text-headline-md text-primary font-bold">
                  +١٧
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  عاماً من الخبرة (منذ ٢٠٠٨)
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
                <div className="font-headline-md text-headline-md text-secondary font-bold">
                  ٢٠١٤
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  ماجستير جلدية الأزهر ومستشفى ٦ أكتوبر
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm border border-outline-variant/30">
                <div className="font-headline-md text-headline-md text-primary font-bold">
                  ١١٩٦٦٦
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">
                  رقم قيد استشاري بالنقابة العامة
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all"
                href="#booking-section"
              >
                <span>حجز استشارة طبية الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container border border-outline-variant/40 transition-colors"
                href="#credentials-section"
              >
                <BadgeCheck className="w-5 h-5 text-secondary" />
                <span>الشهادات والترخيص الرسمي</span>
              </a>
            </div>

            <div className="pt-space-xs flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-space-xs">
                <PhoneCall className="w-4 h-4 text-secondary" />
                <span>أرقام الحجز:</span>
              </div>
              <a
                className="text-primary font-bold dir-ltr hover:underline"
                href="tel:01014056201"
              >
                01014056201
              </a>
              <span className="text-outline-variant">•</span>
              <a
                className="text-primary font-bold dir-ltr hover:underline"
                href="tel:01000118500"
              >
                01000118500
              </a>
              <span className="text-outline-variant">•</span>
              <a
                className="text-on-surface-variant hover:text-primary dir-ltr flex items-center gap-1"
                href="mailto:nagamnm81@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>nagamnm81@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container-lowest rounded-2xl p-space-xs shadow-xl overflow-hidden border border-outline-variant/30">
              <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <img
                  alt="جناح الاستشارة والعيادة لدكتورة نغم عماد تاصيف"
                  className="w-full h-full object-cover object-center"
                  src="/images/consultation-room.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md p-2 rounded-xl shadow-md flex items-center gap-2 border border-outline-variant/30">
                  <img
                    alt="شعار د. نغم عماد تاصيف الرسمي"
                    className="h-10 w-auto object-contain"
                    src="/images/logo.svg"
                  />
                </div>
                <div className="absolute bottom-4 right-4 left-4 text-on-primary">
                  <span className="inline-block px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm mb-1 font-bold">
                    العيادة الخاصة المرخصة
                  </span>
                  <p className="font-headline-sm text-headline-sm text-surface-bright leading-tight">
                    جناح الفحص والاستشارة الطبية الدقيقة
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-container-high opacity-90">
                    د. نغم عماد ناصيف مكي • استشاري الأمراض الجلدية والتناسلية
                  </p>
                </div>
              </div>

              <div className="mt-space-xs p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-secondary" />
                  <span>ترخيص وزارة الصحة: 247156</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>نقابة أطباء مصر (سنة ٢٠٢٢)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

