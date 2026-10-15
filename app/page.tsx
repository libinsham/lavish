import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import AppSection from "@/components/AppSection";

import About from "@/components/About/About";
import Trainers from "@/components/Trainers";

import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
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

      

                <Trainers />
        <Programs />
        <Testimonials />

              <ClientJourney />
        <Community />
      </main>
      <Footer />
    </>
  );
}
