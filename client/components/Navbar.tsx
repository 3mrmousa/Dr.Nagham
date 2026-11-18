"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Calendar03Icon,
  Home01Icon,
  Menu01Icon,
  Stethoscope02Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import BranchedMenu, {
  type BranchedMenuItem,
} from "@/components/ui/BranchedMenu";
import GooeyNav from "@/components/ui/GooeyNav";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الاستشاري والعيادة" },
  { href: "/services", label: "التخصصات والنتائج" },
  { href: "/booking", label: "حجز موعد" },
];

const MENU_ITEMS: BranchedMenuItem[] = [
  {
    label: "أقسام الموقع",
    children: [
      { value: "/", label: "الرئيسية", icon: Home01Icon },
      { value: "/about", label: "عن الاستشاري والعيادة", icon: UserCircleIcon },
      {
        value: "/services",
        label: "التخصصات والنتائج",
        icon: Stethoscope02Icon,
      },
      { value: "/booking", label: "حجز موعد", icon: Calendar03Icon },
    ],
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeIndex = Math.max(
    0,
    NAV_LINKS.findIndex((link) => link.href === pathname),
  );

  const handleSelect = (value: string) => {
    setMenuOpen(false);
    router.push(value);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(43,29,36,0.05)]">
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-surface-container-low/90 border-b border-outline-variant/25 text-on-surface-variant py-1.5">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-4 text-xs">
          {/* Contact & Hours */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span className="text-on-surface-variant">للحجز:</span>
              <a
                dir="ltr"
                className="font-semibold tabular-nums text-on-surface hover:text-primary transition-colors"
                href="tel:01014056201"
              >
                01014056201
              </a>
              <span className="text-outline-variant">•</span>
              <a
                dir="ltr"
                className="font-semibold tabular-nums text-on-surface hover:text-primary transition-colors"
                href="tel:01000118500"
              >
                01000118500
              </a>
            </div>

            <span className="hidden xl:inline-block h-3.5 w-px bg-outline-variant/40" />

            <div className="hidden xl:flex items-center gap-1.5 truncate">
              <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span className="truncate">
                السبت ١:٣٠–٦:٣٠ م • الإثنين ٦–١٠:٣٠ م • الأربعاء ١–٦:٣٠ م
              </span>
            </div>

            <span className="hidden 2xl:inline-block h-3.5 w-px bg-outline-variant/40" />

            <a
              className="hidden 2xl:flex items-center gap-1.5 hover:text-primary transition-colors shrink-0"
              href="mailto:nagamnm81@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span dir="ltr">nagamnm81@gmail.com</span>
            </a>
          </div>

          {/* Credentials Badge & WhatsApp CTA */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest/80 border border-outline-variant/30 px-2.5 py-0.5 text-[11px] text-on-surface-variant">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>ترخيص صحة: 247156</span>
              <span className="text-outline-variant">|</span>
              <span>قيد نقابة: 244156</span>
            </div>

            <a
              className="inline-flex items-center gap-1.5 rounded-full bg-primary-fixed/60 hover:bg-primary-fixed text-on-primary-fixed font-semibold px-3 py-0.5 text-[11px] transition-colors"
              href="https://wa.me/201014056201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>واتساب العيادة</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="relative h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <Link href="/" className="flex items-center gap-space-md">
          <Image
            alt="شعار د. نغم عماد"
            width={60}
            height={60}
            priority
            className="w-15 h-15 object-contain"
            src="/images/shared/logo.svg"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              د. نغم عماد ناصيف مكي
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              استشاري الأمراض الجلدية والتناسلية والطب التجميلي
            </span>
          </div>
        </Link>

        <div className="hidden lg:block">
          <GooeyNav
            items={NAV_LINKS.map(({ label }) => ({ label }))}
            activeIndex={activeIndex}
            onChange={(index) => router.push(NAV_LINKS[index].href)}
            theme="light"
            color="#c81d67"
            activeTextColor="#ffffff"
            colors={["#c81d67", "#a2004f", "#ffb1c5"]}
            size="md"
            frame={false}
            particleCount={12}
            spread={48}
            className="hidden xl:inline-flex"
          />
        </div>

        <div className="flex items-center gap-space-sm">
          <Link
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg rounded-lg hover:bg-primary transition-all shadow-[0_4px_12px_-2px_rgba(200,29,103,0.25)]"
            href="/booking"
          >
            احجز موعد كشف
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="lg:hidden w-10 h-10 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-center cursor-pointer"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <HugeiconsIcon icon={Menu01Icon} size={20} />
            )}
          </button>
        </div>

        {/* BranchedMenu Dropdown for Mobile / Tablet */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full inset-e-margin md:inset-e-margin-tablet mt-2 w-72 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/95 backdrop-blur-xl p-4 shadow-lg">
            <BranchedMenu
              key={pathname}
              items={MENU_ITEMS}
              defaultOpen={[0]}
              defaultActive={pathname}
              onSelect={handleSelect}
              color="#1b1c1a"
              accentColor="#a2004f"
              lineColor="#e0bec5"
              width={250}
              rowHeight={36}
              indent={36}
            />
          </div>
        )}
      </div>
    </header>
  );
}
