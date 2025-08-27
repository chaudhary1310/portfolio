import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "Node Js",
      image:
        "./node-js.svg",
      className: " absolute top-5 left-[20%] rotate-[-5deg] ",
    },
    {
      title: "Expree Js",
      image:
        "./express-js.svg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "JavaScript",
      image:
        "./js.svg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Next.Js",
      image:
        "./nextjs.svg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "MongoDb",
      image:
        "./mongodb.svg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "C++",
      image:
        "./c.svg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "React",
      image:
        "./react.svg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return ( 
    <div className="relative h-full flex items-center justify-center text-center gap-8">
        <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full" />

    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item,index) => (
          <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-70 w-90 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
     </div>
  );
}
