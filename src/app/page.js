"use client"
import { NavBarr } from "@/components/NavBarr";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {

  const words = `At Brandify, we specialize in enhancing your business's online presence through sleek, personalized websites and strategic branding. Our mission is to help you attract more customers by creating modern, premium websites that reflect your unique identity and values. With a focus on quality and innovation, we are dedicated to making your brand stand out in the digital world.

  This name and bio aim to convey a modern, professional, and innovative approach to web development and personal branding
`;

  return (
   <>
    <NavBarr/>
    <div className="h-screen w-full z-40 inset-0 flex items-center justify-center text-white font-bold text-4xl text-center md:text-4xl lg:text-7xl">
      <div className="block space-y-6">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-purple-200 to-emerald-400/50 text-center">
            Brandify
        </h1>
        <p className="text-xl md:text-3xl bg-gradient-to-r text-transparent from-blue-300/90 to-purple-500/60 bg-clip-text px-5">At Brandify, we craft modern websites and strategic branding to make your brand shine online</p>
      </div>
      </div>
      <BackgroundBeams/>
    </>
  );
}
