"use client"

import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-12 left-4 z-40 p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 group"
      aria-label="Voltar"
    >
      <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
    </button>
  )
}
