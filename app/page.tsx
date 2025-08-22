"use client";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
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
      <Topbar />
      <HeroSection />
      <WelcomeSection />
      <LeadershipSection />
      <ValuesSection />
      <EventsSection />
      <BlogSection />
      <CorporateMembersSection />
      <Footer />
    </div>
  );
}
