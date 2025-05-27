import AboutUs from "@/_components/AboutUs";
import HeroSection from "@/_components/HeroSection";
import Products from "@/_components/Products";
import Referances from "@/_components/Referances";
import Services from "@/_components/Services";
import Works from "@/_components/Works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Products />
      <Referances />
      <Works />
    </div>
  );
}
