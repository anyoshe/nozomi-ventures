"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254736889880"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nozomi Ventures on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_44px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-4 focus:ring-green-400/40 active:scale-95 group sm:bottom-8 sm:right-8"
    >
      {/* Invisible ambient pulse effect to draw user attention organically */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 opacity-75 duration-1000 group-hover:hidden" />
      
      {/* Clean micro-pivoted text message icon */}
      <MessageSquare size={24} className="fill-white/10 transition-transform duration-300 group-hover:scale-105" />
    </a>
  );
}