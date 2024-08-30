"use client";
import {
  HeroSection,
  FeaturedSection,
  WhyChooseUs,
  TestinomialCard,
  UpcomingWebinars,
  Instructor,
  Footer,
} from "./Components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestinomialCard />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
