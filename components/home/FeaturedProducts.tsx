import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BatteryCharging, Star } from "lucide-react";
import { products } from "@/lib/catalog";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Component Title Section */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Featured Systems
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.1]">
              The best sellers, sharpened for high-confidence backup protection.
            </h2>
          </div>
          
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 h-12 text-sm font-bold text-slate-900 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white group"
          >
            <span>View All Systems</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Dynamic Products Catalog Grid Matrix */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.slug}
              href={`/shop/${product.slug}`}
              className="card-lift group overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-xs transition-all"
            >
              {/* Product Media Box Container */}
              <div className="relative aspect-[1.1] overflow-hidden rounded-[1.6rem] bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                
                {/* Modern Floating Category Tag */}
                <div className="absolute left-3 top-3 rounded-full border border-slate-100/10 bg-slate-950/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {product.category}
                </div>
              </div>

              {/* Product Specifications Content Shell */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 truncate group-hover:text-primary transition duration-150 sm:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs font-normal leading-relaxed text-slate-500 line-clamp-2">
                      {product.summary}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <BatteryCharging size={18} />
                  </div>
                </div>

                {/* Highly Scannable Hardware Specifications Metric Block */}
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-slate-600">
                  <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-2.5">
                    <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wide">Capacity</span>
                    <span className="mt-0.5 text-slate-900 font-bold truncate">{product.capacity}</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-2.5">
                    <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wide">Output</span>
                    <span className="mt-0.5 text-slate-900 font-bold truncate">{product.output}</span>
                  </div>
                  <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-2.5">
                    <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wide">Solar In</span>
                    <span className="mt-0.5 text-slate-900 font-bold truncate">{product.chargeTime}</span>
                  </div>
                </div>

                {/* Ratings & Financial Evaluation Anchor Footnote */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-50 pt-4">
                  <div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-slate-200"}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-[10px] font-bold tracking-wide uppercase text-slate-400">
                      {product.rating} Rating
                    </p>
                  </div>
                  
                  {/* Clean Local Currency Typography Formats */}
                  <div className="text-right">
                    <span className="text-xs font-medium text-slate-400 block -mb-1">KSh</span>
                    <span className="text-xl font-extrabold tracking-tight text-primary sm:text-2xl">
                      {product.price.toLocaleString()}
                    </span>
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