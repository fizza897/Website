import React from "react";
import Wrapper from "@/app/components/Shared/Wrapper";
import Image from "next/image";
import HeroImage from "@/app/components/Images/hero-poster.webp";
import Button from "@/app/components/Shared/Button";

export default function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
          {/* left side */}
          <h4 className="text-teal-700 font-semi-bold text-lg">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
          <h1 className={`text-5xl sm:text-6xl font-bold `}>Certified Web 3.0 and Metaverse Developer</h1>
          <p className="mt-6 text-xl text-slate-600">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the internet 
           </p>
            <p className="mt-2 text-lg text-slate-600 ">

          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
           <div className="mt-5 ">
            <Button text="Learn More"/>
           </div>
          {/* right side  */}
        </div>
        <div className="flex-1">
          <Image src={HeroImage} alt="hero" />
        </div>
          </div>
      </Wrapper>
    </section>
  );
}
