import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Treatments from "@/components/Treatments";
import Atmosphere from "@/components/Atmosphere";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import AmbientMusic from "@/components/AmbientMusic";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Treatments />
      <Atmosphere />
      <Reviews />
      <Footer />
      <AmbientMusic />
    </main>
  );
};

export default Index;
