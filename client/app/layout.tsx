import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import IntroScreen from "@/components/animations/IntroScreen";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex-arabic",
});

export const metadata: Metadata = {
  title: "عيادة دكتورة نغم عماد تاصيف - استشاري جلدية وتجميل",
  description:
    "عيادة د. نغم عماد ناصيف مكي - استشاري الأمراض الجلدية والتناسلية والطب التجميلي بمدينة ٦ أكتوبر. خبرة إكلينيكية تمتد لأكثر من ١٧ عاماً.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html dir="rtl" lang="ar" className={ibmPlexArabic.variable}>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <IntroScreen />
        {children}
      </body>
    </html>
  );
}
