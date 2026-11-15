"use client";
import {
  BadgeCheck,
  Award,
  ZoomIn,
  Eye,
  Download,
  CheckCircle2,
  Mail,
  MapPin,
  ClipboardList,
  GraduationCap,
  Building2,
  Sparkles,
  Quote,
  X,
} from "lucide-react";
import { useState } from "react";

const certificateFacts = [
  {
    label: "الاسم المقيد بالنقابة:",
    value: "نغم عماد ناصيف مكي",
    valueClass: "font-bold text-on-surface",
    rowBg: "bg-surface-container",
  },
  {
    label: "الدرجة المهنية المقيدة:",
    value: "إستشاري جلدية وتناسلية",
    valueClass: "font-bold text-primary",
    rowBg: "bg-surface",
  },
  {
    label: "رقم ترخيص وزارة الصحة:",
    value: "247156 (تاريخ: ١٨-٠٤-٢٠١٣)",
    valueClass: "font-bold text-on-surface dir-ltr",
    rowBg: "bg-surface-container",
  },
  {
    label: "رقم القيد بالجدول العام:",
    value: "244156 (تاريخ: ١٨-٠٤-٢٠١٣)",
    valueClass: "font-bold text-on-surface dir-ltr",
    rowBg: "bg-surface",
  },
  {
    label: "رقم التسجيل كاستشاري:",
    value: "119666 (سنة التسجيل: 2022)",
    valueClass: "font-bold text-secondary dir-ltr",
    rowBg: "bg-surface-container",
  },
  {
    label: "الدرجة العلمية الموثقة:",
    value: "ماجستير جلدية وتناسلية (٢٠١٤)",
    valueClass: "font-bold text-on-surface",
    rowBg: "bg-surface",
  },
];

const positions = [
  {
    title: "استشاري الأمراض الجلدية — عيادات مستشفى جامعة ٦ أكتوبر",
    period: "2014 – حتى الآن",
    description:
      "October 6 University Hospital Clinics — استشارات طبية متخصصة والإشراف السريري.",
    dotClass: "bg-primary",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
  },
  {
    title: "المدير الفني — عيادات وام التخصصية (Wam Specialty Clinics)",
    period: "2011 – حتى الآن",
    description:
      "إدارة بروتوكولات الرعاية الجلدية والتجميلية وضمان الجودة الطبية بمدينة ٦ أكتوبر.",
    dotClass: "bg-secondary",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
  },
  {
    title: "استشاري الجلدية والطب التجميلي — العيادة الخاصة بمدينة ٦ أكتوبر",
    period: "2014 – حتى الآن",
    description:
      "عيادة د. نغم عماد تاصيف التخصصية — رعاية سريرية وتجميلية متكاملة للمرضى والمراجعين.",
    dotClass: "bg-primary",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
  },
];

export function CredentialsSection() {
  const [isShowCertificate, setIsShowCertificate] = useState<boolean>(false);
  const [isShowCV, setIsShowCV] = useState<boolean>(false);
  const handleShowCertificate = () => {
    setIsShowCertificate(!isShowCertificate);
  };
  const handleShowCV = () => {
    setIsShowCV(!isShowCV);
  };

  return (
    <>
      <section
        className="w-full py-space-xl bg-surface-container-lowest border-y border-outline-variant/30"
        id="credentials-section"
      >
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto space-y-space-xs mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold shadow-sm">
              <BadgeCheck className="w-4 h-4" />
              <span>بيانات الاعتماد والتراخيص الرسمية الموثقة</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              شهادة استشاري نقابة أطباء مصر والسيرة الذاتية المعتمدة
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              كافة البيانات المهنية والدرجات الأكاديمية مسجلة وموثقة رسمياً
              بنقابة الأطباء العامة ووزارة الصحة والسكان بجمهورية مصر العربية.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-space-md border border-outline-variant/40 shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="font-title-md text-title-md text-on-surface font-bold">
                    شهادة استشاري نقابة أطباء مصر
                  </h3>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-semibold">
                  وثيقة رسمية
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-outline-variant/50 bg-surface shadow-inner group">
                <img
                  alt="شهادة استشاري نقابة أطباء مصر - د. نغم عماد ناصيف مكي"
                  className="w-full h-auto max-h-115 object-contain mx-auto bg-surface-bright p-1 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  src="/images/syndicate-certificate.png"
                />
                <div className="absolute hidden sm:group-hover:flex inset-0 z-10 flex-col items-center justify-center gap-space-xs p-space-md pb-12 text-center bg-inverse-surface/70 backdrop-blur-[3px] group-hover:opacity-100 focus-within:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-surface-bright text-primary shadow-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <p className="font-title-md text-title-md font-bold text-surface-bright">
                    اضغط للعرض أو التحميل
                  </p>
                  <p className="font-label-sm text-label-sm text-primary-fixed">
                    نسخة رسمية موثقة عالية الدقة
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleShowCertificate}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>عرض الشهادة</span>
                    </button>
                    <a
                      href="/images/syndicate-certificate.png"
                      download="شهادة-استشاري-نقابة-الأطباء-د-نغم-عماد.png"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-bright/95 text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-bright transition-colors"
                    >
                      <Download className="w-4 h-4 text-primary" />
                      <span>تحميل</span>
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-2 inset-x-2 z-20 pointer-events-none bg-inverse-surface/85 backdrop-blur-md rounded-lg p-2 text-surface-bright font-label-sm text-label-sm flex items-center justify-between">
                  <div className="w-[60%]">
                    <span>ختم النقابة العامة للأطباء بجمهورية مصر العربية</span>
                  </div>
                  <div className="flex gap-2 sm:hidden pointer-events-auto">
                    <button
                      onClick={handleShowCertificate}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a
                      href="/images/syndicate-certificate.png"
                      download="شهادة-استشاري-نقابة-الأطباء-د-نغم-عماد.png"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-bright/95 text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-bright transition-colors"
                    >
                      <Download className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-secondary-fixed shrink-0 hidden sm:block" />
                </div>
              </div>

              <div className="space-y-1.5 pt-space-xs font-body-sm text-body-sm">
                {certificateFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className={`flex justify-between items-center py-1 px-2 rounded ${fact.rowBg}`}
                  >
                    <span className="text-on-surface-variant font-medium">
                      {fact.label}
                    </span>
                    <span className={fact.valueClass}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-space-md">
              <div className="bg-surface-container-low rounded-2xl p-space-md border border-outline-variant/40 shadow-sm flex flex-col sm:flex-row items-center gap-space-md">
                <div className="w-24 h-32 rounded-xl overflow-hidden border-2 border-primary-fixed shadow-md flex-shrink-0 bg-surface">
                  <img
                    alt="د. نغم عماد ناصيف مكي"
                    className="w-full h-full object-cover object-top"
                    src="/images/doctor-portrait.png"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-right">
                  <div className="inline-block px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                    السيرة الذاتية المهنية المعتمدة
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    د. نغم عماد ناصيف مكي
                  </h3>
                  <p className="font-label-lg text-label-lg text-primary font-bold">
                    Dermatology, Venereology &amp; Aesthetic Medicine Consultant
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 font-label-sm text-label-sm text-on-surface-variant justify-center sm:justify-start">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                      nagamn81@gmail.com
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      مدينة ٦ أكتوبر / حدائق الأهرام، مصر
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handleShowCV}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>عرض السيرة الذاتية</span>
                    </button>
                    <a
                      href="/images/doctor-portrait.png"
                      download="السيرة-الذاتية-د-نغم-عماد.png"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-bright/95 text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-bright transition-colors border border-outline-variant/40"
                    >
                      <Download className="w-4 h-4 text-primary" />
                      <span>تحميل</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-2xl p-space-md border border-outline-variant/40 space-y-space-sm">
                <h4 className="font-title-md text-title-md text-on-surface font-bold flex items-center gap-space-xs">
                  <ClipboardList className="w-5 h-5 text-secondary" />
                  <span>
                    المناصب والخبرات المهنية (Professional Experience)
                  </span>
                </h4>
                <div className="space-y-space-xs">
                  {positions.map((pos) => (
                    <div
                      key={pos.title}
                      className="p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-start gap-space-xs"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${pos.dotClass}`}
                      />
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-label-lg text-label-lg text-on-surface font-bold">
                            {pos.title}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded font-label-sm text-label-sm ${pos.badgeClass}`}
                          >
                            {pos.period}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {pos.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                  <div className="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold">
                    <GraduationCap className="w-5 h-5" />
                    <span>ماجستير الأمراض الجلدية والتناسلية وتجميل الجلد</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                    جامعة الأزهر، مصر (MSc — Al-Azhar University, 2014)
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    تخصص دقيق في العلاجات السريرية وتجميل الجلد.
                  </p>
                </div>
                <div className="p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                  <div className="flex items-center gap-1.5 text-secondary font-label-md text-label-md font-bold">
                    <Building2 className="w-5 h-5" />
                    <span>بكالوريوس الطب والجراحة العامة (MBBCh)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface font-semibold">
                    جامعة حلب (University of Aleppo)
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    سنة الامتياز: مستشفى أكتوبر العام، مصر.
                  </p>
                </div>
              </div>

              <div className="p-space-sm rounded-xl bg-primary-fixed/40 border border-primary-fixed text-on-primary-fixed flex items-start gap-space-xs">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-label-md text-label-md font-bold text-on-primary-fixed">
                    تدريب سريري مكثف لمدة ٥ سنوات بالمستشفيات الجامعية (5-Year
                    Clinical Training)
                  </h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    تدريب تخصصي متقدم في تشخيص الحالات النادرة والمعقدة بمستشفى
                    الزهراء الجامعي ومستشفى جامعة مصر للعلوم والتكنولوجيا (MUST
                    Hospital).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-space-lg p-space-md rounded-2xl bg-linear-to-r from-primary-fixed/30 via-surface-container-low to-secondary-fixed/30 border border-outline-variant/50">
            <div className="flex items-start gap-space-sm">
              <Quote className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-label-lg text-label-lg text-primary font-bold">
                  الرؤية والهدف المهني لدكتورة نغم عماد تاصيف:
                </h4>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed italic pt-1">
                  &ldquo;تقديم رعاية متقدمة في طب الأمراض الجلدية والتجميل تجمع
                  بين التميز السريري، الابتكار العلمي، وأحدث التقنيات الطبية —
                  مع التركيز التام والدائم على أمان المريض، النتائج الطبيعية،
                  والالتزام الصارم بأعلى معايير الأخلاقيات الطبية.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isShowCertificate && (
        <div
          onClick={handleShowCertificate}
          className="fixed inset-0 z-100 flex items-center justify-center
        bg-black/75 backdrop-blur-sm"
        >
          <X
            onClick={handleShowCertificate}
            className="absolute top-5 right-5 size-10 text-primary-container cursor-pointer"
          />
          <img
            onClick={(e) => e.stopPropagation()}
            alt="شهادة استشاري نقابة أطباء مصر - د. نغم عماد ناصيف مكي"
            className="h-auto sm:w-100 object-contain mx-auto bg-surface-bright p-1 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            src="/images/syndicate-certificate.png"
          />
        </div>
      )}
      {isShowCV && (
        <div
          onClick={handleShowCV}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
        >
          <X
            onClick={handleShowCV}
            className="absolute top-5 right-5 size-10 text-primary-container cursor-pointer"
          />
          <img
            onClick={(e) => e.stopPropagation()}
            alt="السيرة الذاتية المهنية - د. نغم عماد ناصيف مكي"
            className="h-auto max-h-[90vh] max-w-[90vw] sm:w-100 object-contain mx-auto bg-surface-bright p-1 transition-transform duration-500 ease-out"
            src="/images/doctor-portrait.png"
          />
        </div>
      )}
    </>
  );
}
