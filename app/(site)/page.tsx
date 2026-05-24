import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyNozomi from "@/components/home/WhyNozomi";
import Testimonials from "@/components/home/Testmonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyNozomi />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}