import Coporate from "@/components/Coporate";
import Header from "@/components/Header";
import Membership from "@/components/Membership";


export default function Home() {
  return (
    <div>
      <Header />
      <Membership />
      <Coporate/>
      <div className='w-full h-[1px] bg-[#e2e2e3] mb-16'></div>
    </div>
  );
}
