"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

export function BookingSection() {
  return (
    <section
      className="w-full py-space-xl bg-surface-container-low"
      id="booking-section"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-space-md">
            <div className="space-y-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  الحجز والتواصل المباشر
                </span>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mt-1">
                  بيانات التواصل ومواعيد العمل
                </h3>
              </div>

              <div className="divide-y divide-outline-variant/25 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-space-xs pb-space-sm">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-on-surface">
                      العنوان بالتفصيل:
                    </div>
                    <div className="pt-0.5">
                      مدينة ٦ أكتوبر - مبنى العيادات التخصصية، أعلى قطونيل
                      (Cottonil) ومحلات كارينا (Carina)، بجوار معمل البرج.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs py-space-sm">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <span className="font-bold text-on-surface">
                      أرقام الحجز المباشر:
                    </span>
                    <div className="dir-ltr text-right space-x-2 pt-0.5 font-bold text-primary">
                      <a className="hover:underline" href="tel:01014056201">
                        01014056201
                      </a>
                      <span>/</span>
                      <a className="hover:underline" href="tel:01000118500">
                        01000118500
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs py-space-sm">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <span className="font-bold text-on-surface">
                      البريد الإلكتروني المعتمد:
                    </span>
                    <div className="dir-ltr text-right pt-0.5 font-bold text-on-surface-variant">
                      <a
                        className="hover:underline text-primary"
                        href="mailto:nagamnm81@gmail.com"
                      >
                        nagamnm81@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-space-xs pt-space-sm">
                  <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-on-surface">
                      مواعيد عمل العيادة:
                    </div>
                    <ul className="pt-1 space-y-1">
                      <li>السبت: ١:٣٠ م – ٦:٣٠ م</li>
                      <li>الإثنين: ٦:٠٠ م – ١٠:٣٠ م</li>
                      <li>الأربعاء: ١:٠٠ م – ٦:٣٠ م</li>
                      <li className="text-on-surface-variant/80">
                        الأحد، الثلاثاء، الخميس، الجمعة: مغلق
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="group w-full px-4 py-3 rounded-xl bg-[#1f9d55] hover:bg-[#198749] text-white shadow-[0_8px_20px_-6px_rgba(31,157,85,0.45)] hover:shadow-[0_10px_24px_-6px_rgba(31,157,85,0.55)] transition-all flex items-center justify-between gap-3"
              href="https://wa.me/201014056201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div className="text-start">
                  <div className="font-label-lg text-label-lg font-bold leading-tight">
                    تواصل مباشر مع مسؤولة الاستقبال
                  </div>
                  <div className="text-xs text-white/85">
                    عبر واتساب العيادة للحجز والاستفسار
                  </div>
                </div>
              </div>
              <ArrowLeft className="w-4 h-4 opacity-85 group-hover:-translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl p-space-md shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-space-md">
            <div className="space-y-space-md flex-1 flex flex-col">
              <div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  العنوان وطريقة الوصول
                </span>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mt-1">
                  موقع العيادة ومعالم الوصول
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm h-56 lg:flex-1 lg:min-h-56 relative border border-outline-variant/40">
                <img
                  alt="يافطة العيادة ومبنى العيادات التخصصية أعلى قطونيل"
                  className="w-full h-full object-cover"
                  src="/images/shared/clinic-exterior.png"
                />
                <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/85 via-transparent to-transparent flex items-end p-space-xs">
                  <span className="text-surface-bright font-label-sm text-label-sm">
                    اللافتة باللون الفوشيا الواضح أعلى محلات قطونيل وكارينا
                  </span>
                </div>
              </div>
            </div>

            <a
              aria-label="خريطة الموقع"
              className="w-full h-28 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center p-space-sm text-center"
              href="https://maps.app.goo.gl/kx1pMRN2x7ZpzMQv9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center gap-1">
                <Navigation className="w-6 h-6 text-primary" />
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  فتح الموقع على خرائط جوجل
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  مدينة ٦ أكتوبر - بجوار معمل البرج
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
