"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
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
              className="w-full py-2.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center justify-center gap-2 hover:bg-secondary-fixed-dim transition-colors"
              href="https://wa.me/201014056201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل مباشر مع مسؤولة الاستقبال عبر واتساب</span>
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
                  src="/images/clinic-exterior.png"
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
