"use client"

import { Check, Shield, Lock, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"

export function ScreenOferta() {
  const comparison = [
    { item: "Contratar modelo profissional", price: "R$500" },
    { item: "Editor de vídeo freelancer", price: "R$300" },
    { item: "Produção de conteúdo", price: "R$400" },
    { item: "Ferramentas e softwares", price: "R$200" }
  ]

  const deliverables = [
    "Método passo a passo",
    "Biblioteca de prompts testados",
    "Guia de ferramentas gratuitas e pagas",
    "Templates de abordagem para marcas",
    "Acesso à comunidade privada",
    "Atualizações vitalícias"
  ]

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* Section 1 - Anchoring */}
      <h2 className="font-heading text-[24px] font-bold tracking-[-0.02em] mb-6 text-white relative">
        Quanto custaria fazer isso sozinho?
      </h2>

      {/* Comparison cards */}
      <div className="w-full space-y-2 mb-6 relative">
        {comparison.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 bg-white/[0.03] rounded-lg"
          >
            <span className="text-white/70 text-sm">{item.item}</span>
            <span className="text-[#8A8A8E] text-sm line-through">{item.price}</span>
          </div>
        ))}
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-4 w-full mb-6 relative">
        <div className="flex-1 h-px gradient-bg opacity-30" />
        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 text-sm font-medium">
          OU
        </span>
        <div className="flex-1 h-px gradient-bg opacity-30" />
      </div>

      {/* Section 2 - Product */}
      <h3 className="font-heading text-xl font-bold text-white mb-6 relative">
        Acesso completo ao método:
      </h3>

      {/* Deliverables */}
      <div className="w-full space-y-3 mb-8 relative">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-left"
          >
            <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-[#0A0A0B]" strokeWidth={3} />
            </div>
            <span className="text-white text-[15px]">{item}</span>
          </div>
        ))}
      </div>

      {/* Section 3 - Price Box */}
      <div className="w-full glass-strong rounded-[20px] p-8 mb-8 relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-[20px] p-[1px] bg-gradient-to-r from-[#00FF88] via-[#00D4FF] to-[#00FF88] bg-[length:200%_100%] animate-gradient-shift opacity-50" />
        <div className="absolute inset-[1px] rounded-[19px] bg-[#111113]" />

        <div className="relative">
          {/* Original price */}
          <span className="text-[#8A8A8E] text-lg line-through">R$782</span>

          {/* Launch label */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 my-4">
            <span className="text-[11px] font-semibold text-[#00FF88] uppercase tracking-[0.15em]">
              Oferta de Lançamento
            </span>
          </div>

          {/* Final price */}
          <div className="flex items-start justify-center mb-2">
            <span className="text-white text-2xl font-medium mt-4">R$</span>
            <span className="font-mono text-[64px] font-bold gradient-text leading-none">27</span>
            <span className="text-white text-2xl font-medium mt-4">,99</span>
          </div>

          {/* Payment info */}
          <p className="text-[#8A8A8E] text-sm">
            Pagamento único. Acesso vitalício.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <PrimaryButton
        href="https://cakto.com.br/seu-link-aqui"
        large
        animated
        className="mb-6"
      >
        <span>Acessar o Método Agora</span>
        <Zap className="w-5 h-5" />
      </PrimaryButton>

      {/* Section 4 - Guarantee */}
      <div className="w-full glass rounded-xl p-4 mb-6 relative">
        <div className="flex items-start gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-[#00FF88]/10 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#00FF88]" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Garantia de 7 dias</h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Acesse tudo, teste o método. Se não fizer sentido pra você, devolvo 100% do valor. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-white/40 text-xs">
        <Lock className="w-3.5 h-3.5" />
        <span>Pagamento processado com segurança via Cakto</span>
      </div>
    </div>
  )
}
