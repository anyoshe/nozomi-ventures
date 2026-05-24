import { CheckCircle2, ShieldCheck, SunMedium, Zap } from "lucide-react";

const values = [
  {
    title: "Premium Hardware Architectures",
    desc: "Deploying enterprise-grade, solar-ready portable power units engineered to handle high-surge appliances without technical strain."
  },
  {
    title: "Proactive Localized Mentorship",
    desc: "Delivering continuous, direct technical guidance through every step of your energy transition—from initial provisioning to post-purchase setup."
  },
  {
    title: "Market-Specific System Optimization",
    desc: "Curating energy storage and collection packages explicitly built around the operational patterns of Kenyan residential networks and commercial centers."
  },
  {
    title: "Accelerated Logistics & Support",
    desc: "Bypassing generic automated ticketing workflows with immediate, conversational WhatsApp consultations and precise performance sizing math."
  }
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white">
      
      {/* Brand Ethos Introduction Grid */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          {/* Mission Core Value Copy */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Vision
            </span>
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Powering modern enterprise with cleaner, silent autonomy.
            </h1>
            <p className="mt-5 text-sm font-normal leading-relaxed text-slate-500 sm:text-base max-w-xl">
              Nozomi Ventures assists residential households, localized micro-retail shops, medical facilities, and remote logistics teams in transitioning beyond mechanical fuel generators and unpredictable grid infrastructure into intelligent, portable solar backup networks.
            </p>
          </div>

          {/* Unified Value Proposition Highlight Display */}
          <div className="rounded-[2rem] bg-dark p-6 text-white sm:p-10 shadow-xl relative overflow-hidden">
            {/* Ambient structural layout illumination */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              
              <div className="rounded-2xl bg-white/5 border border-white/5 p-5 sm:p-6 transition duration-200 hover:bg-white/10">
                <Zap className="text-accent" size={22} />
                <p className="mt-5 text-lg font-bold tracking-tight">Zero Emission</p>
                <p className="mt-1 text-xs text-slate-400 font-normal leading-normal">Indoor-safe execution without toxic workspace fumes.</p>
              </div>
              
              <div className="rounded-2xl bg-white/5 border border-white/5 p-5 sm:p-6 transition duration-200 hover:bg-white/10">
                <SunMedium className="text-accent" size={22} />
                <p className="mt-5 text-lg font-bold tracking-tight">Solar Independence</p>
                <p className="mt-1 text-xs text-slate-400 font-normal leading-normal">Rapid structural recharge cycles utilizing clean sunlight.</p>
              </div>
              
              <div className="col-span-2 rounded-2xl bg-primary/10 border border-primary/20 p-6 transition duration-200 hover:bg-primary/15">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldCheck size={24} />
                  <p className="text-lg font-bold tracking-tight text-white">Fully Supported On-Site</p>
                </div>
                <p className="mt-2 text-xs text-slate-300 font-normal leading-relaxed">
                  Engineered load sizing calculations, local deployment assistance, hardware warranty protocols, and reliable real-time technical after-sales protection.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Structural Differentiators Matrix Wrapper */}
      <div className="bg-slate-50 border-t border-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Operational Core</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why technical operators build alongside Nozomi</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="card-lift group flex items-start gap-4 rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs transition-all duration-300 hover:border-slate-300"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" size={18} />
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs font-normal leading-relaxed text-slate-500 sm:text-sm">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}