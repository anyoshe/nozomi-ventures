import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    ShieldCheck,
    Star,
    SunMedium,
    Truck,
} from "lucide-react";
import { products } from "@/lib/catalog";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

    return (
        <section className="min-h-screen bg-slate-50">
            <div className="relative overflow-hidden bg-dark text-white">
                <div className="absolute top-0 right-1/4 h-[320px] w-[560px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/10"
                    >
                        <ArrowLeft size={17} />
                        Back to catalog
                    </Link>

                    <div className="mt-10 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                                {product.category}
                            </span>
                            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                {product.name}
                            </h1>
                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                                {product.summary}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white">
                                    <Star size={15} className="fill-accent text-accent" />
                                    {product.rating} rating
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white">
                                    <Truck size={15} className="text-accent" />
                                    2–5 day delivery
                                </span>
                            </div>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                                        Capacity
                                    </p>
                                    <p className="mt-2 text-lg font-extrabold text-white">{product.capacity}</p>
                                </div>
                                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                                        Output
                                    </p>
                                    <p className="mt-2 text-lg font-extrabold text-white">{product.output}</p>
                                </div>
                                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                                        Charge time
                                    </p>
                                    <p className="mt-2 text-lg font-extrabold text-white">{product.chargeTime}</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                        Starting from
                                    </p>
                                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                                        KSh {product.price.toLocaleString()}
                                    </p>
                                </div>
                                <a
                                    href={`https://wa.me/254736889880?text=Hi%20Nozomi%20Ventures,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-accent/90"
                                >
                                    <MessageCircle size={18} />
                                    Request quote
                                </a>
                            </div>
                        </div>

                        <div className="card-lift relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_32px_90px_rgba(10,37,64,0.2)]">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 rounded-[1.2rem] border border-white/10 bg-dark/80 p-4 backdrop-blur">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                                        Best for
                                    </p>
                                    <p className="mt-2 text-lg font-bold text-white">{product.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xs sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                            Product overview
                        </p>
                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            Built for reliable power, clean setup, and confident buying.
                        </h2>
                        <div className="mt-6 space-y-3">
                            {product.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-3 rounded-[1.2rem] bg-slate-50 px-4 py-3">
                                    <CheckCircle2 size={19} className="mt-0.5 text-primary" />
                                    <p className="text-sm font-semibold leading-6 text-slate-700">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-dark p-6 text-white sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
                            Why buyers choose it
                        </p>
                        <div className="mt-5 space-y-4">
                            <div className="flex items-start gap-3">
                                <SunMedium className="mt-1 text-accent" size={20} />
                                <div>
                                    <p className="font-bold">Solar-ready performance</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">
                                        Engineered for clean charging and dependable output in homes, stores, and mobile teams.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="mt-1 text-accent" size={20} />
                                <div>
                                    <p className="font-bold">Local support and assurance</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">
                                        Clear guidance, warranty coverage, and direct support for the full purchase journey.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Truck className="mt-1 text-accent" size={20} />
                                <div>
                                    <p className="font-bold">Fast delivery</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">
                                        Products are prepared for quick nationwide dispatch with reliable handling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                                Explore more
                            </p>
                            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                Other Nozomi power options
                            </h2>
                        </div>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-primary hover:bg-primary hover:text-white"
                        >
                            Browse all products
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/shop/${item.slug}`}
                                className="card-lift group overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-xs"
                            >
                                <div className="relative aspect-[1.1] overflow-hidden rounded-[1.5rem] bg-slate-50">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="px-3 pb-3 pt-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>

                                            <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-200">
                                                {item.name}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-500">{item.summary}</p>
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
