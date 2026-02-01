"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  href?: string
  large?: boolean
  animated?: boolean
}

export function PrimaryButton({ 
  children, 
  onClick, 
  className,
  href,
  large = false,
  animated = false
}: PrimaryButtonProps) {
  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2",
    "gradient-bg text-[#0A0A0B] font-semibold",
    "rounded-[14px] transition-all duration-300",
    "hover:scale-[1.02] active:scale-[0.98]",
    "shadow-[0_4px_20px_rgba(0,255,136,0.25)]",
    "hover:shadow-[0_4px_30px_rgba(0,255,136,0.4)]",
    large ? "py-[22px] px-10 text-base" : "py-[18px] px-8 text-[15px]",
    animated && "animate-pulse-glow",
    className
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, "w-full text-center")}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, "w-full")}>
      {children}
    </button>
  )
}
