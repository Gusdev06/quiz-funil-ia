"use client"

import React, { useEffect, useState } from "react"

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
  const [finalHref, setFinalHref] = useState(href)

  useEffect(() => {
    if (href) {
      // Captura os parâmetros UTM da URL atual
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = new URLSearchParams()

      // Extrai todos os parâmetros UTM
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
      utmKeys.forEach(key => {
        const value = urlParams.get(key)
        if (value) {
          utmParams.append(key, value)
        }
      })

      // Se houver parâmetros UTM, adiciona ao href
      if (utmParams.toString()) {
        const separator = href.includes('?') ? '&' : '?'
        setFinalHref(`${href}${separator}${utmParams.toString()}`)
      }
    }
  }, [href])

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2",
    "gradient-bg text-[#0A0A0B] font-semibold",
    "rounded-[14px] transition-all duration-300",
    "hover:scale-[1.02] active:scale-[0.98]",
    "shadow-[0_4px_20px_rgba(217,255,2,0.25)]",
    "hover:shadow-[0_4px_30px_rgba(217,255,2,0.4)]",
    large ? "py-[22px] px-10 text-base" : "py-[18px] px-8 text-[15px]",
    animated && "animate-pulse-glow",
    className
  )

  if (href) {
    return (
      <a
        href={finalHref}
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
