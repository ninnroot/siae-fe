"use client";
import Image from "next/image";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import OurTeam from "@/components/ourteam";


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

     
      <OurTeam />
    

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
