import Image from "next/image";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import OurTeam from "@/components/ourteam";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Topbar />
      <OurTeam />
      <Footer />
    </div>
  );
}
