"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("drnagham_intro_seen")) return;
    sessionStorage.setItem("drnagham_intro_seen", "1");

    const showTimer = setTimeout(() => setShowIntro(true), 0);
    const hideTimer = setTimeout(() => setShowIntro(false), 1200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center px-margin text-center select-none overflow-hidden bg-linear-to-b from-surface-bright via-surface to-primary-fixed/35"
        >
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-primary-fixed-dim/35 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
            className="pointer-events-none absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-secondary-fixed/35 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.86, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-5 rounded-full bg-white/85 backdrop-blur-md ring-1 ring-outline-variant/40 shadow-[0_18px_45px_-18px_rgba(162,0,79,0.28)]"
            >
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 0, scale: 1.2 }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-primary/25"
              />
              <Image
                src="/images/shared/logo.svg"
                alt="شعار عيادة د. نغم عماد ناصيف مكي"
                width={112}
                height={112}
                priority
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
              className="mt-space-md inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-lowest/90 border border-outline-variant/35 font-label-sm text-label-sm text-secondary font-bold shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>استشاري نقابة أطباء مصر • خبرة +١٧ عاماً</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
              className="font-headline-md sm:text-3xl text-primary font-bold mt-3 tracking-tight"
            >
              د. نغم عماد ناصيف مكي
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
              className="font-body-md sm:font-body-lg text-on-surface-variant font-medium max-w-md leading-relaxed mt-1.5"
            >
              استشاري الأمراض الجلدية والتناسلية والطب التجميلي
            </motion.p>

            <div className="mt-space-lg w-48 sm:w-56 h-1 rounded-full bg-outline-variant/25 overflow-hidden">
              <motion.div
                className="h-full w-full origin-right rounded-full bg-linear-to-l from-secondary via-primary to-primary-container"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              onClick={() => setShowIntro(false)}
              className="mt-4 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              تخطي
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
