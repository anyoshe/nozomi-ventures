import { BatteryCharging, ShieldCheck, Sparkles, SunMedium } from "lucide-react";

const points = [
  {
    icon: BatteryCharging,
    title: "Right-Sized Load Systems",
    description:
      "Avoid paying for excess capacity. Our engineering approach calculates your exact household or commercial appliance surge parameters.",
  },
  {
    icon: SunMedium,
    title: "Solar-First Infrastructure",
    description:
      "Every portable station and panel bundle is optimized for high-efficiency solar recharge rates under dynamic local climate cycles.",
  },
  {
    icon: ShieldCheck,
    title: "Support Rooted Globally & Locally",
    description:
      "Skip wait times for international shipping returns. Get immediate access to expert technical sizing advice and on-the-ground local warranty dispatch.",
  },
];

export default function WhyNozomi() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid Header Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              The Nozomi Advantage
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.1]">
              Engineered backup energy with a radically clearer buying experience.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Choosing solar or black-out battery banks shouldn't feel like a guessing game. We blend top-tier off-grid hardware with real consultative planning.
            </p>
          </div>

          {/* Right Column Context Box: Fixed customer-facing copy with premium accent trim */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-6 sm:p-8 shadow-sm">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-accent" />
            
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Sparkles size={20} className="fill-accent/10" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">Designed For Daily Lifespans</h3>
                <p className="text-xs font-medium text-slate-400">Zero fumes. Zero noise. Absolute operational reliance.</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Unlike legacy gas generators that require high maintenance, fuel storage, and noisy setups, Nozomi solar ecosystems safely power sensitive electronics inside your home or shop without disruption.
            </p>
          </div>
        </div>

        {/* Lower Value Proposition Matrix Items */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="card-lift group rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-xs"
              >
                {/* Visual Icon Accent Capsule */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {point.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}