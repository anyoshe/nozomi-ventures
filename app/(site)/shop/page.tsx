import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, SlidersHorizontal, Star } from "lucide-react";
import { categories, products } from "@/lib/catalog";

export default function ShopPage() {
  return (
    <section className="min-h-screen bg-slate-50">
      
      {/* Editorial Dark Split Header */}
      <div className="relative overflow-hidden bg-dark text-white">
        {/* Environmental ambient backing lighting */}
        <div className="absolute top-0 right-1/4 h-[350px] w-[600px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Value Statement Branding */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Nozomi Storefront
              </span>
              <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.05]">
                Power architecture built for uncompromising uptime.
              </h1>
              <p className="mt-5 max-w-xl text-sm font-normal leading-relaxed text-slate-400 sm:text-base">
                Browse professional grade solar power stations, high-efficiency foldable panel collectors, and complete backup energy systems engineered for Kenyan homes, commerce, and field logistics.
              </p>
            </div>

            {/* Premium Category Quick-Links Matrix */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.link}
                  className="group relative rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10 shadow-sm"
                >
                  <p className="text-sm font-bold tracking-tight text-white transition duration-200 group-hover:text-accent">
                    {category.title}
                  </p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-slate-500 transition duration-200 group-hover:text-slate-400">
                    {category.metric}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Main Catalog View Grid Layout */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Navigation Action Filter Bar Controls */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 h-11 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-xs">
            <SlidersHorizontal size={14} className="text-primary" />
            <span>Curated Equipment Catalog</span>
          </div>
          
          <a
            href="https://wa.me/254736889880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 h-12 text-sm font-bold text-white transition-all duration-200 hover:bg-[#005a4c] shadow-md shadow-primary/5 group"
          >
            <span>Need Technical Sizing Help?</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* 4-Column Responsive High-Density Grid Matrix */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="card-lift group overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Media Media Image Frame Box */}
                <div className="relative aspect-[1.05] overflow-hidden rounded-[1.6rem] bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-slate-100/10 bg-slate-950/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                {/* Card Specific Metadata Details */}
                <div className="px-3 pt-4 pb-2">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-slate-200"} 
                      />
                    ))}
                  </div>
                  
                  <h2 className="mt-2.5 text-base font-bold tracking-tight text-slate-900 group-hover:text-primary transition duration-150 truncate">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-xs font-normal leading-relaxed text-slate-500 line-clamp-2">
                    {product.summary}
                  </p>

                  {/* Clean Bounded Parameter Feature Highlights Row */}
                  <div className="mt-4 space-y-2 border-t border-slate-50 pt-3.5">
                    {product.highlights.slice(0, 2).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Functional Pricing Base Footer Callout */}
              <div className="px-3 pb-3 pt-2">
                <div className="flex items-center justify-between border-t border-slate-50 pt-3.5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-slate-400 -mb-1">KSh</span>
                    <span className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                      {product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* Clean interactive visual action arrow circular pop */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-accent group-hover:text-slate-950 transition-all duration-300 shadow-inner group-hover:scale-105">
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}