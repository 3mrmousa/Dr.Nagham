import { Building2 } from "lucide-react";

const tourPhotos = [
  {
    image: "/images/shared/consultation-room.png",
    alt: "مكتب الاستشارة الطبية الخاص بدكتورة نغم عماد",
    badge: "غرفة الاستشارة والتشخيص",
    badgeColor: "text-primary",
    title: "استشارة شخصية هادئة",
    description:
      "وقت كافٍ لمناقشة كافة التساؤلات وشرح خطة العلاج المناسبة بدقة ووضوح.",
  },
  {
    image: "/images/about/treatment-room.png",
    alt: "غرفة الفحص والإجراءات التجميلية المعقمة",
    badge: "جناح الإجراءات الطبية",
    badgeColor: "text-secondary",
    title: "تعقيم وأجهزة متطورة",
    description:
      "سرير فحص مريح وإضاءة فحص مجهرية لضمان الدقة في الحقن والتطبيق العلاجي.",
  },
  {
    image: "/images/shared/clinic-exterior.png",
    alt: "مقر العيادة الخارجي ويافطة دكتورة نغم عماد تاصيف",
    badge: "موقع العيادة المتميز",
    badgeColor: "text-primary",
    title: "سهولة الوصول والموقع",
    description:
      "يافطة فوشيا واضحة (دكتورة نغم عماد تاصيف) أعلى قطونيل وكارينا بجوار معمل البرج.",
  },
];

export function ClinicTourSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
          <div className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary">
            <Building2 className="w-4 h-4" />
            <span>جولة داخل أروقة العيادة</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            بيئة علاجية مصممة لأقصى درجات الراحة
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            عيادة مجهزة وفق أحدث الاشتراطات الطبية المعتمدة لتوفير تجربة مريحة،
            آمنة ومفعمة بالخصوصية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {tourPhotos.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/30"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
                <div
                  className={`absolute bottom-2 right-2 bg-surface-container-lowest/90 px-space-xs py-0.5 rounded text-label-sm font-label-sm font-bold ${item.badgeColor}`}
                >
                  {item.badge}
                </div>
              </div>
              <div className="p-space-sm space-y-1">
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

