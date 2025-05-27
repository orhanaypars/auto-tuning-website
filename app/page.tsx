import AboutUs from "@/_components/AboutUs";
import Certifications from "@/_components/Certifications";
import ContactPage from "@/_components/ContactPage";
import FavQuestionPage from "@/_components/FavQuestionPage";
import HeroSection from "@/_components/HeroSection";
import Products from "@/_components/Products";
import Services from "@/_components/Services";
import Works from "@/_components/Works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Products />
      <Works />
      <FavQuestionPage />
      <ContactPage />
      <Certifications />
    </div>
  );
}
