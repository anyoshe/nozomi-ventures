import { BatteryFull, Headphones, ShieldCheck, Truck } from "lucide-react";

const trusts = [
  { 
    icon: Truck, 
    title: "Fast Countrywide Delivery", 
    desc: "Secure nationwide dispatch across Kenya within 2-5 days." 
  },
  { 
    icon: ShieldCheck, 
    title: "2-Year Local Warranty", 
    desc: "Full local coverage and rapid hardware support backup." 
  },
  { 
    icon: BatteryFull, 
    title: "Premium LiFePO4 Cells", 
    desc: "Long-cycle chemical composition engineered for daily use." 
  },
  { 
    icon: Headphones, 
    title: "On-Demand Expert Help", 
    desc: "Direct system-sizing guidance over WhatsApp before you commit." 
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Swapped custom background layouts with our unified v4 glass utility wrapper */}
        <div className="glass-nav rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trusts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-start transition-all duration-200"
                >
                  {/* Subtle, modern ambient color pill tracking for the icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Refined typography weightings and clean semantic theme variables */}
                  <h3 className="mt-5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}