import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Mwangi",
    location: "Nairobi",
    text: "The Titan 2000Wh system kept my commercial supermarket running flawlessly during regional grid blackouts. Delivery was incredibly fast and the pre-purchase setup advice was clear.",
  },
  {
    name: "Aisha Mohammed",
    location: "Mombasa",
    text: "My salon business now safely runs lights, clippers, and digital booking devices smoothly through daily outages. The solar panels charge much faster than I originally expected.",
  },
  {
    name: "David Omondi",
    location: "Kisumu",
    text: "The hardware build quality feels premium, and the dedicated WhatsApp support line helped me choose the exact load size capacity requirements for my home layout.",
  },
];

export default function Testimonials() {
  return (
    // Explicitly forcing bg-slate-950 on the section wrapper to combat any global background spills
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      {/* Ambient background accent light glow */}
      <div className="absolute top-0 right-1/4 h-[350px] w-[500px] rounded-full bg-[#006D5B]/10 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C00]">
              Verified Social Proof
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.1]">
              Engineered for backup resilience, workdays, and weekends.
            </h2>
          </div>
          <p className="max-w-2xl text-sm font-normal leading-relaxed text-slate-400 sm:text-base lg:pb-1">
            From modern residential homes to scaling commercial businesses, Nozomi systems are chosen across Kenya for reliable power continuity, silent operation, and rapid technical support backup.
          </p>
        </div>

        {/* Testimonials Review Matrix */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article 
              key={t.name} 
              // Explicitly hardcoded high-contrast dark backgrounds for individual cards to ensure readability against text colors
              className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-white/20"
            >
              <div>
                {/* Structural Icon Layout Section */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#FF8C00]">
                    <Quote size={16} className="fill-[#FF8C00]/10" />
                  </div>
                  
                  {/* Clean Visual Rating Stars Matrix */}
                  <div className="flex items-center gap-0.5 text-[#FF8C00]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-[#FF8C00] text-[#FF8C00]" />
                    ))}
                  </div>
                </div>

                {/* Explicit crisp readable gray text to bypass theme leaks */}
                <p className="mt-6 text-sm leading-relaxed font-normal text-slate-200">
                  "{t.text}"
                </p>
              </div>

              {/* Author Identification Base Footnote */}
              <div className="mt-8 border-t border-white/10 pt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    {t.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-400">
                    {t.location}, Kenya
                  </p>
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#006D5B] px-2.5 py-1 rounded-md">
                  Verified User
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}