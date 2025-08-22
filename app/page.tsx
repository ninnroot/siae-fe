"use client";
import { Footer } from "@/components/footer";

import About from "@/components/About/about-page";
import MerchandisePage from "@/components/MerchStore/merch-store-page";

import {
  HeroSection,
  WelcomeSection,
  LeadershipSection,
  ValuesSection,
  EventsSection,
  BlogSection,
  CorporateMembersSection,
} from "@/components/home";


export default function Home() {
  return (
    <div className="font-sans min-h-screen">

      {/* <Topbar /> */}
      <About />
      <MerchandisePage />
      {/* <Footer /> */}

      <HeroSection />
      <WelcomeSection />
      <LeadershipSection />
      <ValuesSection />
      <EventsSection />
      <BlogSection />
      <CorporateMembersSection />

    </div>
  );
}
