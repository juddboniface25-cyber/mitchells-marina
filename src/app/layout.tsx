import type { Metadata } from "next";
import { Oswald, Lora, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MarinaSchema } from "@/components/MarinaSchema";
import { marina } from "@/data/marina";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const description =
  "Covered and open boat slips for boats up to 50 ft, annual-lease RV sites with full hookups, a gas dock and store, boat rentals and striper charters, on the point at Smith Mountain Lake. 3553 Trading Post Rd, Huddleston, VA.";

export const metadata: Metadata = {
  // Without this, Next resolves social image URLs against localhost in dev
  // and against the per-deployment VERCEL_URL in production.
  metadataBase: new URL(marina.siteUrl),
  title: {
    default: `${marina.name} | Smith Mountain Lake, Huddleston VA`,
    template: `%s | ${marina.shortName} Marina, Smith Mountain Lake`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: marina.name,
    title: `${marina.name} | Smith Mountain Lake`,
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${marina.name} | Smith Mountain Lake`,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${lora.variable} ${nunito.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-paper focus:text-ink focus:border focus:border-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MarinaSchema />
      </body>
    </html>
  );
}
