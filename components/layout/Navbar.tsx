'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X, MessageSquare } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop All' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/learning-center', label: 'Learning Center' },
  { href: '/about', label: 'About Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="glass-nav mx-auto max-w-7xl rounded-full px-4 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Clean Proportional Typographic Brand Identity */}
          <a href="/" className="group flex flex-col justify-center pl-2">
            <span className="text-xl font-extrabold tracking-tight text-[#006D5B] sm:text-2xl">
              Nozomi<span className="font-light text-slate-500 transition group-hover:text-[#FF8C00]">Ventures</span>
            </span>
          </a>

          {/* Desktop Navigation Links — Centered and Visible */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#006D5B]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-2">
            {/* Desktop Call To Action */}
            <a
              href="https://wa.me/254736889880"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#FF8C00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-sm transition-all duration-200 hover:bg-[#ff9e22] hover:shadow-md md:inline-flex"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Navigation — Smooth Dropdown Stack */}
        {isOpen && (
          <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-1.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#006D5B]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <hr className="my-2 border-slate-100" />
              
              {/* Mobile Action Call */}
              <a
                href="https://wa.me/254736889880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FF8C00] py-3.5 text-sm font-bold text-slate-950 shadow-sm active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}