import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ClinicTourSection } from "@/components/ClinicTourSection";

export const metadata: Metadata = {
  title: "عن الاستشاري والعيادة | د. نغم عماد ناصيف مكي",
  description:
    "تعرف على خبرة د. نغم عماد ناصيف مكي استشاري الأمراض الجلدية والتناسلية والطب التجميلي، الشهادات والاعتمادات الرسمية، وجولة داخل العيادة.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <CredentialsSection />
      <ClinicTourSection />
    </>
  );
}

