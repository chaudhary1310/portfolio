"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useSidebar } from "./SidebarProvider";

export function SidebarLink({ link, className, ...props }) {
  const { open, animate } = useSidebar();

  


  return (
    
      <a
        href={link.href}
        className={cn(
          "flex items-center gap-3 py-2 px-3 rounded-lg group/sidebar transition-all duration-200",
          "hover:bg-white/20 hover:scale-105",
          className
        )}
        {...props}
      >
        {link.icon}
        <motion.span
          animate={{
            display: animate ? (open ? "inline-block" : "none") : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className="text-sm font-medium whitespace-pre inline-block"
        >
          {link.label}
        </motion.span>
      </a>

    
  );
}
