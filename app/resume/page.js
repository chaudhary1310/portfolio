"use client";
 import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function ResumePage() {
  return (
    
       <div className="flex flex-col items-center justify-center w-screen h-screen  relative text-white p-4">
        <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />
      <h1 className="text-4xl relative font-bold mb-6">My Resume</h1>

      {/* Embedded PDF */}
      <div className="w-full max-w-4xl relative h-[600px] mb-6">
        <iframe
          src="/Resume.pdf"
          className="w-full h-full border border-gray-700 rounded-lg"
          title="Resume"
        />
      </div>

      {/* Download button */}
      <a
        href="/Resume.pdf"
        download="Sumit_Yadav_Resume.pdf"
        className="px-6 py-3 bg-gradient-to-r relative from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-lg hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </div>
   
  );
}
