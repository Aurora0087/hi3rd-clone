import Hero from "@/components/Hero";
import WorldExplor from "@/components/GameFeatures";
import Image from "next/image";
import GameFeatures from "@/components/GameFeatures";
import Charecters from "@/components/Charecters";
import Archives from "@/components/Archives";

export default function Home() {
  return (
    <div className=" bg-slate-800 w-screen overflow-hidden min-h-screen">
      <div className="flex flex-col w-full snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        <Hero />
        <GameFeatures />
        <Charecters />
        <Archives/>
      </div>
    </div>
  );
}
