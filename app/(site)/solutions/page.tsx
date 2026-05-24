import Link from "next/link";
import { ArrowRight, Building2, Home, Plane, Store } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Homes and Apartments",
    desc: "Maintain zero-delay continuity for essential household items—including lights, routers, televisions, workstations, refrigerators, and security networks—through unexpected grid disruptions.",
  },
  {
    icon: Store,
    title: "Shops and Salons",
    desc: "Protect daily business operations and client satisfaction with silent backup power configured for electronic POS checkouts, retail grooming tools, atmospheric lighting, and vital cold storage.",
  },
  {
    icon: Building2,
    title: "Clinics and Offices",
    desc: "Support critical diagnostic machinery, primary internet routing arrays, and collaborative workspace computers with clean, ultra-stable surge protection that requires zero mechanical oversight.",
  },
  {
    icon: Plane,
    title: "Travel and Field Work",
    desc: "Deploy standalone energy anywhere. Power high-draw production cameras, laptops, communication phones, logistics drones, and remote camp lighting networks from portable solar-ready power packages.",
  },
];

export default function SolutionsPage() {
  return (
    <section className="min-h-screen bg-slate-50">
      
      {/* Premium Dark Tone Value Banner */}
      <div className="relative overflow-hidden bg-dark text-white">
        {/* Soft atmospheric background contrast accent light */}
        <div className="absolute top-0 right-1/3 h-[300px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Tailored Integrations
          </span>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Solar backup architectures matched to the way you actually consume energy.
          </h1>
          <p className="mt-5 max-w-2xl text-sm font-normal leading-relaxed text-slate-400 sm:text-base">
            Identify your primary grid challenge, then isolate the exact power station tier, monocrystalline panel configuration, and accessories required to build a permanent uptime safety net.
          </p>
        </div>
      </div>

      {/* Solutions Core Matrix Layout */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article 
                key={solution.title} 
                className="card-lift group rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-xs"
              >
                {/* Visual Structural Icon Anchor */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  {solution.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  {solution.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Conversion Banner Module */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-white sm:p-12 shadow-md shadow-primary/5">
          {/* Internal background micro-gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Need an ecosystem sized precisely for your appliance load?
              </h2>
              <p className="mt-2 text-sm text-white/80 font-normal leading-relaxed">
                Send our engineering consultants your typical daily appliance consumption list, and Nozomi will map out the ideal capacity threshold configuration for you.
              </p>
            </div>
            
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 h-12 text-sm font-bold text-slate-950 transition-all duration-200 hover:scale-105 shadow-sm shrink-0 w-fit group"
            >
              <span>Explore Custom Configurations</span>
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}