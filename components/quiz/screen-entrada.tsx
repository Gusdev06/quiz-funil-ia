"use client"

import { useEffect } from "react"
import { ChevronDown, Users, BadgeCheck } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenEntradaProps {
  onNext: () => void
}

export function ScreenEntrada({ onNext }: ScreenEntradaProps) {
  useEffect(() => {
    // Load the vturb player script
    const script = document.createElement("script")
    script.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f8cbb1385ff513705f870/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logo */}
      <div className="mb-8">
        <span className="text-white/60 font-medium text-sm">@gustagoat.ia</span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border mb-8 animate-pulse">
        <BadgeCheck className="w-4 h-4 text-[#00FF88]" />
        <span className="text-xs font-medium text-white uppercase tracking-wider">
          Método Validado
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-heading text-[28px] md:text-[36px] font-bold leading-tight tracking-[-0.02em] mb-4 text-balance max-w-[500px]">
        Daqui a 1 ano, todo mundo vai usar{" "}
        <span className="gradient-text">IA</span>{" "}
        pra criar conteúdo. A diferença é{" "}
        <span className="gradient-text">quem começou hoje</span>.
      </h1>

      {/* Subtitle */}
      <p className="text-[#8A8A8E] text-base leading-relaxed mb-8 max-w-[400px]">
        Crie uma influenciadora de IA que vende por você — sem aparecer, sem gravar, sem complicação.
      </p>

      {/* VSL Video */}
      <div className="w-full max-w-[400px] mb-8">
        <img
          src="/images/hf_20260206_041610_e3d99106-b917-4061-8ce6-24f1caa9fae1.png"
          alt="Banner"
          className="w-full mb-4"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-697f8cbb1385ff513705f870" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      {/* CTA Text */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <span className="text-[#8A8A8E] text-sm">Selecione para começar</span>
        <ChevronDown className="w-5 h-5 text-[#8A8A8E] animate-bounce-subtle" />
      </div>

      {/* Primary Button */}
      <PrimaryButton onClick={onNext}>
        Quero saber como
      </PrimaryButton>

      {/* Social Proof */}
      <div className="flex items-center gap-2 mt-6 text-white/40 text-xs">
        <Users className="w-4 h-4" />
        <span>+ de 847 pessoas já criaram a delas</span>
      </div>
    </div>
  )
}
