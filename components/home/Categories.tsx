import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/catalog";

export default function Categories() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-28">
      {/* Premium subtle tech grid overlay */}
      <div className="absolute inset-0 soft-grid-overlay opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Power Categories
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.1]">
              Built for every scale of backup, travel, or solar resilience.
            </h2>
          </div>
          <p className="max-w-md text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
            Filter your equipment configurations by precise operational use-case, ultra-portability, or full household emergency execution layouts.
          </p>
        </div>

        {/* Categories Card Matrix */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="card-lift group relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xs sm:p-8"
            >
              {/* Product Category Context Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Refined gradient mask for high typography readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:via-slate-950/50" />
              
              {/* Top Row Indicators */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-slate-900/40 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {category.metric}
                </span>
                
                {/* Micro-interaction button glow transition */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-slate-950 group-hover:scale-110">
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
              
              {/* Bottom Typography Block */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {category.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-200 opacity-90 sm:text-sm">
                  {category.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}