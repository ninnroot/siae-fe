import Image from "next/image";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Topbar />
      <p>home</p>
      <Footer />
    </div>
  );
}
