import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Core Multi-Column Structural Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          {/* Content Heading Column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Direct Communication
            </span>
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Tell us exactly what you need to power.
            </h1>
            <p className="mt-5 text-sm font-normal leading-relaxed text-slate-500 sm:text-base md:text-lg max-w-xl">
              Share your core household or commercial appliances, target backup runtime thresholds, and general property location. Our engineers will draft a practical energy matrix built for your budget constraints and load requirements.
            </p>
          </div>

          {/* Interactive Dynamic Action Directory Card */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xs sm:p-10 relative overflow-hidden">
            
            {/* Subtle background graphic highlight */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-slate-50/50 pointer-events-none" />

            <div className="grid gap-4 relative z-10">
              
              {/* WhatsApp Premium Anchor Row */}
              <a 
                href="https://wa.me/254736889880" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-transparent bg-[#25D366]/5 p-5 transition-all duration-200 hover:border-[#25D366]/20 hover:bg-[#25D366]/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-transform duration-200 group-hover:scale-105">
                  <MessageSquare size={20} className="fill-[#25D366]/5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 -mb-0.5">Instant Consultation</p>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">WhatsApp: +254 736 889 880</p>
                </div>
              </a>

              {/* Native Voice Cellular Line Route */}
              <a 
                href="tel:+254736889880" 
                className="group flex items-center gap-4 rounded-2xl border border-transparent bg-slate-50 p-5 transition-all duration-200 hover:border-slate-200/60 hover:bg-slate-100/60"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-105">
                  <Phone size={18} className="fill-accent/5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 -mb-0.5">Voice Engineering Desk</p>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">Call: +254 736 889 880</p>
                </div>
              </a>

              {/* Enterprise Messaging Mail Route */}
              <a 
                href="mailto:info@nozomiventures.co.ke" 
                className="group flex items-center gap-4 rounded-2xl border border-transparent bg-slate-50 p-5 transition-all duration-200 hover:border-slate-200/60 hover:bg-slate-100/60"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 -mb-0.5">Corporate Communications</p>
                  <p className="text-sm font-bold text-slate-900 sm:text-base truncate max-w-[200px] sm:max-w-none">info@nozomiventures.co.ke</p>
                </div>
              </a>

              {/* Geographic Flag Baseline Card */}
              <div className="flex items-center gap-4 rounded-2xl bg-slate-50/60 p-5 border border-slate-100/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dark/5 text-dark">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 -mb-0.5">Headquarters</p>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">Mombasa, Kenya</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}