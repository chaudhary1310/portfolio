"use client";
import "./globals.css";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBook,
  IconBrandGithub,
  IconBrandX,
  IconBulb,
  IconExchange,
  IconFaceId,
  IconHome,
  IconLabel,
  IconNewSection,
  IconPhone,
  IconTerminal2,
} from "@tabler/icons-react";

export default function RootLayout({ children }) {
  const links = [
    {
      label: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./",
    },
    {
      title: "Skills",
      icon: <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./Skills",
    },
    {
      title: "About Me",
      icon: <IconFaceId className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./About",
    },
    
    {
      title: "Resume",
      icon: <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./resume",
    },
    
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/chaudhary1310",
    },
  ];

  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Fixed Tab Bar (top center) */}
        <div className="fixed bottom-4  left-1/2 -translate-x-1/2 z-50">
          <FloatingDock
            mobileClassName="translate-y-0" // reset from demo
            items={links}
          />
        </div>

        {/* Page content */}
        <main className="relative h-full z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
