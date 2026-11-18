import type { Metadata } from "next";
import { BookingSection } from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "حجز موعد كشف | عيادة د. نغم عماد",
  description:
    "احجز موعد كشف في عيادة د. نغم عماد ناصيف مكي بمدينة ٦ أكتوبر، مواعيد العمل وأرقام التواصل.",
};

export default function BookingPage() {
  return <BookingSection />;
}

