import Header from "@/components/header";
import Hero from "@/components/hero";
import PracticeAreas from "@/components/practice-areas";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
