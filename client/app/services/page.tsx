import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { FaqSection } from "@/components/FaqSection";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "التخصصات والنتائج السريرية | عيادة د. نغم عماد",
  description:
    "خدمات الأمراض الجلدية، الليزر، الحقن التجميلي، وعلاج الشعر والبشرة مع النتائج السريرية والأسئلة الشائعة.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />
      <ServicesSection />
      <ResultsSection />
      <FaqSection />
    </>
  );
}
