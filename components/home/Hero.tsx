import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BatteryCharging, ShieldCheck, Sun, Zap, Sparkles } from "lucide-react";

const stats = [
  { value: "2-5 Days", label: "Kenya Delivery" },
  { value: "2 Years", label: "Local Warranty" },
  { value: "Scalable", label: "Up to 15kWh" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      {/* Background Tech Mesh (Using v4 Soft Grid Overlay) */}
      <div className="absolute inset-0 soft-grid-overlay opacity-15" />
      
      {/* Ambient Lighting Glows */}
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[128px]" />
      <div className="absolute top-20 right-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[128px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          
          {/* Left Text Column (Takes up 7/12 width) */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Minimalist Context Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-slate-200 backdrop-blur-md">
              <Zap size={12} className="text-accent fill-accent animate-pulse" />
              <span>Engineered for the Kenyan Grid</span>
            </div>

            {/* Fluid Premium Heading */}
            <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Clean energy backup. <br />
              <span className="bg-gradient-to-r from-accent via-amber-400 to-[#006D5B] bg-clip-text text-transparent">
                Without compromise.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Explore professional portable power stations, rapid-fold solar panels, and complete smart bundles designed to keep your home comfortable and your business running.
            </p>

            {/* Conversion Actions */}
            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-amber-500 shadow-lg shadow-accent/20"
              >
                <span>Explore Systems</span>
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="https://wa.me/254736889880"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/20"
              >
                <span>Consult an Engineer</span>
              </a>
            </div>

            {/* Premium Stat Cards */}
            <div className="mt-12 w-full border-t border-white/10 pt-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="text-2xl font-extrabold text-white sm:text-3xl tracking-tight transition group-hover:text-accent">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Frame Column (Takes up 5/12 width) */}
          <div className="relative w-full lg:col-span-5">
            {/* Soft Ambient Shadow Backdrop */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-primary/20 blur-2xl" />
            
            {/* The Main Display Card */}
            <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur-xl shadow-2xl">
              
              {/* Product Image Window */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-950">
                <Image
                  src="/images/hero-solar.svg"
                  alt="Nozomi backup solar power system setup"
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Interactive Dynamic Badge Overlay */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur-sm">
                  <Sparkles size={12} />
                  <span>Popular Bundle</span>
                </div>

                {/* Lower Information Banner inside the image frame */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-accent">
                        Recommended Setup
                      </p>
                      <h3 className="mt-0.5 text-base font-bold text-white">Nozomi Titan 2000Wh Kit</h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <BatteryCharging size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Multi-tier Secondary Benefits Layout Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 text-slate-900 shadow-sm">
                  <Sun size={18} className="text-accent fill-accent/10" />
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-1">Solar Intake</h4>
                  <p className="text-sm font-extrabold leading-snug">Smart Fast-Charging Controllers</p>
                </div>
                
                <div className="flex flex-col gap-2 rounded-2xl bg-primary p-4 text-white shadow-sm">
                  <ShieldCheck size={18} className="text-accent" />
                  <h4 className="text-xs font-bold uppercase tracking-wide text-primary-200 mt-1">Local Support</h4>
                  <p className="text-sm font-extrabold leading-snug">Zero-Wait Local Maintenance</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}