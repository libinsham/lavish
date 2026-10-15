import type { Metadata, Viewport } from "next";
import { Bai_Jamjuree, Anton } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import "./globals.css";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavish Performance — Train Beyond",
};

export const viewport: Viewport = {
  themeColor: "#dcebed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bai.variable} ${anton.variable}`}>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
