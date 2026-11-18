import Link from "next/link";
import { ArrowRight, CalendarCheck, Home, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center py-space-xl px-margin md:px-margin-tablet lg:px-margin-desktop overflow-hidden bg-surface">
      <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-primary-fixed-dim/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full rounded-3xl border border-outline-variant/35 bg-surface-container-lowest p-8 md:p-12 text-center shadow-[0_12px_40px_-16px_rgba(27,28,26,0.08)] space-y-6">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">
          خطأ ٤٠٤
        </div>

        <div className="space-y-2">
          <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            الصفحة غير موجودة
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو تم نقله. يمكنك
            العودة إلى الصفحة الرئيسية أو استكشاف خدمات العيادة وحجز موعدك.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary transition-colors shadow-[0_4px_12px_-2px_rgba(200,29,103,0.25)]"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg font-semibold border border-outline-variant/40 hover:border-primary/40 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-primary" />
            <span>التخصصات والخدمات</span>
          </Link>

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary-fixed/60 text-on-secondary-fixed font-label-lg text-label-lg font-semibold hover:bg-secondary-fixed transition-colors"
          >
            <CalendarCheck className="w-4 h-4 text-secondary" />
            <span>حجز موعد</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

