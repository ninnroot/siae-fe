import Image from "next/image";
import { Topbar } from "@/components/topbar";
import { Footer } from "@/components/footer";
import About from "@/components/About/about-page";
import MerchandisePage from "@/components/MerchStore/merch-store-page";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* <Topbar /> */}
      <About />
      <MerchandisePage />
      {/* <Footer /> */}
    </div>
  );
}
