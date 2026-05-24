import Link from "next/link";
import { Mail, MapPin, MessageSquare, Phone, Zap, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "/shop", label: "Shop Products" },
  { href: "/solutions", label: "Solutions Hub" },
  { href: "/learning-center", label: "Learning Center" },
  { href: "/about", label: "About Our Vision" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark text-white">
      {/* Subtle bottom environmental background lighting */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[128px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand Pitch (Takes up 4/12 width) */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-[#006D5B] sm:text-3xl">
                Nozomi<span className="font-light text-slate-400 transition duration-200 group-hover:text-accent">Ventures</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-normal leading-relaxed text-slate-400">
              Premium solar power stations and rapid-fold panels built to combat grid instability for modern Kenyan homes, commerce, and field teams.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-sm">
              <Zap size={12} className="text-accent fill-accent" />
              <span>Clean Power. Uncompromised Uptime.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Takes up 2/12 width) */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="inline-flex items-center gap-1 text-slate-400 transition-all duration-200 ease-out hover:translate-x-0.5 hover:text-accent"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Operational Contacts (Takes up 3/12 width) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact Operations
            </h3>
            <div className="mt-5 space-y-4 text-sm">
              <a 
                href="tel:+254736889880" 
                className="flex items-center gap-3 text-slate-400 transition duration-200 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Phone size={14} />
                </span>
                <span className="font-medium">+254 736 889 880</span>
              </a>
              
              <a 
                href="mailto:info@nozomiventures.co.ke" 
                className="flex items-center gap-3 text-slate-400 transition duration-200 hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <Mail size={14} />
                </span>
                <span className="font-medium break-all">info@nozomiventures.co.ke</span>
              </a>
              
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-accent">
                  <MapPin size={14} />
                </span>
                <span className="font-medium">Mombasa, Kenya</span>
              </div>
            </div>
          </div>

          {/* Column 4: Premium Context Conversion Card (Takes up 3/12 width) */}
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-md shadow-xl lg:col-span-3">
            <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>Ready to Go Solar?</span>
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Share your backup goals and get an immediate custom load calculations quote from our local technical engineers.
            </p>
            <a
              href="https://wa.me/254736889880"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-500 shadow-md shadow-accent/10"
            >
              <MessageSquare size={14} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Lower Metadata Border Base */}
        <div className="relative z-10 mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Nozomi Ventures. Built for reliable off-grid uptime.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}