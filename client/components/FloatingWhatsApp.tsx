import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        aria-label="WhatsApp"
        className="flex items-center gap-2 px-space-md py-2 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
        href="https://wa.me/201014056201"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-label-md text-label-md hidden sm:inline">
          حجز موعد واتساب
        </span>
      </a>
    </div>
  );
}
