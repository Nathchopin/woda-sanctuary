import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Treatments from "@/components/Treatments";
import Atmosphere from "@/components/Atmosphere";
import Reviews from "@/components/Reviews";
import Formation from "@/components/Formation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Treatments />
      <Atmosphere />
      <Reviews />
      <Formation />
      <Footer />
    </main>
  );
};

export default Index;
