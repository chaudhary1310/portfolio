"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Page() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fullscreen Background */}
      <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />
      
      {/* Foreground Content */}
      <h2 className="relative z-10 text-4xl lg:text-7xl font-bold text-white">
        Full Stack Developer{" "}
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          Sumit Here
        </span>
      </h2>
    </div>
  );
}
