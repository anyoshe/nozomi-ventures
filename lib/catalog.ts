export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  capacity: string;
  output: string;
  chargeTime: string;
  image: string;
  summary: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "nozomi-pulse-500wh",
    name: "Nozomi Pulse 500Wh",
    category: "Portable Power Station",
    price: 45900,
    rating: 4.8,
    capacity: "500Wh",
    output: "600W AC",
    chargeTime: "2.5 hrs solar",
    image: "/images/nozomi-pulse-500wh.svg",
    summary: "Compact backup power for laptops, routers, lights, cameras, and weekend travel.",
    highlights: ["LiFePO4 battery", "6 output ports", "Silent indoor use"],
  },
  {
    slug: "nozomi-titan-2000wh",
    name: "Nozomi Titan 2000Wh",
    category: "Home Backup System",
    price: 124900,
    rating: 4.9,
    capacity: "2000Wh",
    output: "2200W AC",
    chargeTime: "4 hrs solar",
    image: "/images/nozomi-titan-2000wh.svg",
    summary: "High-capacity energy storage for homes, salons, shops, clinics, and blackout resilience.",
    highlights: ["Expandable solar input", "UPS mode", "Runs fridges and pumps"],
  },
  {
    slug: "nozomi-flex-200w",
    name: "Nozomi Flex 200W",
    category: "Foldable Solar Panel",
    price: 28900,
    rating: 4.7,
    capacity: "200W",
    output: "MC4/DC",
    chargeTime: "High efficiency",
    image: "/images/nozomi-flex-200w.svg",
    summary: "Portable solar capture for camping, remote work, field teams, and daily recharge kits.",
    highlights: ["Foldable design", "Weather resistant", "Kickstand setup"],
  },
  {
    slug: "nozomi-home-kit",
    name: "Nozomi Home Solar Kit",
    category: "Solar Generator Kit",
    price: 159900,
    rating: 4.9,
    capacity: "2kWh kit",
    output: "2200W AC",
    chargeTime: "Panel bundle",
    image: "/images/nozomi-home-kit.svg",
    summary: "A complete plug-and-play solar generator package for dependable household backup.",
    highlights: ["Power station plus panels", "Install guidance", "Best value bundle"],
  },
];

export const categories = [
  {
    title: "Portable Power Stations",
    desc: "Backup power from 500Wh to 3000Wh for homes, shops, clinics, and mobile teams.",
    metric: "500Wh-3kWh",
    image: products[0].image,
    link: "/shop?category=power-stations",
  },
  {
    title: "Foldable Solar Panels",
    desc: "High-yield portable panels for charging stations anywhere the sun reaches.",
    metric: "100W-400W",
    image: products[2].image,
    link: "/shop?category=solar-panels",
  },
  {
    title: "Solar Generator Kits",
    desc: "Matched power stations and panels packaged for simple everyday energy independence.",
    metric: "Ready kits",
    image: products[3].image,
    link: "/shop?category=kits",
  },
];
