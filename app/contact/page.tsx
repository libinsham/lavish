import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us | LAVI’SH Performance",
  description:
    "Get in touch with LAVI’SH Performance and join a community focused on fitness, performance, recovery, and wellbeing.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}