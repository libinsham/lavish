import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import AppSection from "@/components/AppSection";


import Trainers from "@/components/Trainers";

import PerformanceServices from "@/components/PerformanceServices/PerformanceServices";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import Programs from "@/components/Programs";

import Footer from "@/components/Footer";
import ClientJourney from "@/components/ClientJourney/ClientJourney";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />

 <AppSection />

 <Programs/>
    
                <Trainers />
        <PerformanceServices />
        <Testimonials />

              <ClientJourney />
        <Community />
      </main>
      <Footer />
    </>
  );
}
