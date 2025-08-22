"use client";
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
