"use client"

import { Check } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenDecisaoProps {
  onNext: () => void
}

export function ScreenDecisao({ onNext }: ScreenDecisaoProps) {
  const objections = [
    "Não precisa saber IA — eu te ensino do zero",
    "Não precisa saber editar — mostro o passo a passo",
    "Não precisa de experiência — só precisa começar"
  ]

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Title */}
      <h2 className="font-heading text-[26px] md:text-[28px] font-bold tracking-[-0.02em] mb-4 text-white text-balance relative">
        Eu já fiz o trabalho duro por você.
      </h2>

      {/* Subtitle */}
      <p className="text-[#8A8A8E] text-base leading-relaxed mb-8 relative">
        Testei dezenas de ferramentas. Errei. Ajustei. Até achar o caminho.
        <br /><br />
        Agora tá tudo num método simples:
      </p>

      {/* Objections List */}
      <div className="w-full space-y-4 mb-8 relative">
        {objections.map((objection, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-left animate-in fade-in slide-in-from-left-4 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Check icon */}
            <div className="w-6 h-6 rounded-full border border-[#00FF88]/50 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-[#00FF88]" strokeWidth={2} />
            </div>

            {/* Text */}
            <p className="text-white text-[15px]">{objection}</p>
          </div>
        ))}
      </div>

      {/* Scarcity note */}
      <div className="flex items-center gap-2 text-[#8A8A8E] text-sm mb-8 relative">
        <span>🔐 Suporte individual só enquanto eu der conta</span>
      </div>

      {/* Question */}
      <h3 className="font-heading text-2xl font-bold text-white mb-6 relative">
        Você quer criar a sua?
      </h3>

      {/* Button */}
      <PrimaryButton onClick={onNext} large>
        Sim, quero criar a minha
      </PrimaryButton>

      {/* Micro text */}
      <p className="text-white/40 text-xs mt-4">
        Ver oferta especial →
      </p>
    </div>
  )
}
