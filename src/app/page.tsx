import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnerLogos />
      <CoursesSection />
      <CategoriesSection />
      <FeaturesSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
