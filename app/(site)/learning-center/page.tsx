import Link from "next/link";
import { ArrowRight, BatteryCharging, Gauge, SunMedium } from "lucide-react";

const guides = [
  {
    icon: Gauge,
    title: "Estimate your total load",
    desc: "Itemize your active home appliances, review continuous running wattage draw, and calculate operational hours to isolate your exact target battery capacity needs.",
  },
  {
    icon: BatteryCharging,
    title: "Understand Wh vs W metrics",
    desc: "Watt-hours (Wh) measure total volume capacity of stored energy inside the system. Watts (W) dictate peak power output performance a device requires at any single moment.",
  },
  {
    icon: SunMedium,
    title: "Plan solar recharge rates",
    desc: "Photovoltaic panel dimensions, seasonal ambient weather clearance, directional angle tilt, and overhead tree shade metrics dictate how quickly your equipment recharges.",
  },
];

export default function LearningCenterPage() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Content Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Educational Center
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
            Acquire localized backup protection with zero guesswork.
          </h1>
          <p className="mt-5 text-sm font-normal leading-relaxed text-slate-500 sm:text-base md:text-lg max-w-2xl">
            Practical, field-tested energy basics designed to help you select portable power station capacities, matched solar collector grids, and runtime equations with total technical clarity.
          </p>
        </div>

        {/* Clean Balanced Learning Grid Matrix */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <article 
                key={guide.title} 
                className="card-lift group flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-xs"
              >
                <div>
                  {/* Clean Visual Icon Ring Wrapper */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-slate-950">
                    <Icon size={20} className="transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  
                  <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {guide.title}
                  </h2>
                  <p className="mt-2.5 text-xs font-normal leading-relaxed text-slate-500 sm:text-sm">
                    {guide.desc}
                  </p>
                </div>

                {/* Micro-interaction anchor indicator to signify clickability */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 transition-all duration-300 transform translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Read Breakdown</span>
                  <ArrowRight size={12} />
                </div>
              </article>
            );
          })}
        </div>

        {/* Structural Footer CTA Anchor Shell */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-200/60 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            Ready to match these parameters straight to real backup packages?
          </p>
          
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-dark px-6 h-12 text-sm font-bold text-white transition-all duration-200 hover:bg-primary shadow-sm group shrink-0 w-fit"
          >
            <span>Browse Recommended Systems</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}