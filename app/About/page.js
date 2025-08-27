"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { ColourfulText } from "@/components/ui/colourful-text";

export default function DirectionAwareHoverDemo() {
  const imageUrl = "/sumit.jpg"; // keep image inside public/

  return (
    <div className="w-screen h-screen relative space-x-100 p-10 flex items-center justify-center">
      {/* Background */}
      <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />

      {/* Paragraphs (centered container, but left-aligned text) */}
      <div className="relative  max-w-4xl text-left">
        <p className="text-2xl  md:text-5xl font-bold text-white ">
          <ColourfulText text="I'm Sumit Yadav"  /> </p>
         <p className="text-2xl md:text-5xl p-10 font-bold text-white font-sans">
          <ColourfulText text=" Full Stack Developer"  />
         </p>
         <p className="text-2xl  p-5 text-white font-sans">A proactive full-stack developer passionate about creating dynamic web
          experiences. From frontend to backend, I thrive on solving complex
          problems with clean, efficient code. My expertise spans React, Next.js,
          and Node.js, and I'm always eager to learn more.
        </p>

        <p className="text-2xl p-5 text-white font-sans">
          When I'm not immersed in work, I'm exploring new ideas and staying
          curious. Life's about balance, and I love embracing every part of it. 
        </p>

        <p className="text-2xl p-5  text-white font-sans">
          I believe in waking up each day eager to make a difference!
        </p>
      </div>

      {/* Hover Card */}
      <div className="absolute top-70 right-50">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Namaste</p>
          <p className="font-normal text-sm">Good Wish</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}
