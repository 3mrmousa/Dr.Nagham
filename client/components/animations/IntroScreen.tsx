"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center px-margin text-center select-none bg-linear-to-b from-surface-bright via-primary-fixed/85 to-surface backdrop-blur-xs"
        >
          <motion.img
            src="/images/shared/logo.svg"
            alt="شعار عيادة د. نغم عماد ناصيف مكي"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-36 sm:w-44 h-auto object-contain drop-shadow-sm"
          />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-headline-md text-headline-md text-primary font-bold mt-space-md"
          >
            د. نغم عماد ناصيف مكي
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="font-body-lg text-body-lg text-on-surface-variant font-medium max-w-md leading-relaxed mt-1"
          >
            استشاري الأمراض الجلدية والتناسلية والطب التجميلي
          </motion.p>
          <motion.hr
            className="h-1 w-48 sm:w-56 border-0 rounded-full bg-linear-to-r from-secondary via-primary to-primary-container mt-space-lg"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
