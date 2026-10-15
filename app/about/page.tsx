import type { Metadata } from "next";

import Header from "@/components/Header";
import AboutUs from "@/components/About-us/AboutUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | LAVI’SH Performance",
  description:
    "Discover the LAVI’SH Performance philosophy and our personalized approach to fitness, athletic performance, recovery, and wellbeing.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutUs />
      </main>

      <Footer />
    </>
  );
}