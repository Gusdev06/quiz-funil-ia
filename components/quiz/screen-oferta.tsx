"use client"

import { Check, Shield, Lock, Zap } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import Image from "next/image"

export function ScreenOferta() {
  const comparison = [
    { item: "Contratar modelo profissional", price: "R$500" },
    { item: "Editor de vídeo freelancer", price: "R$300" },
    { item: "Produção de conteúdo", price: "R$400" },
    { item: "Ferramentas e softwares", price: "R$200" }
  ]

  const deliverables = [
    "Treinamento completo: Crie sua Influenciadora de IA do zero",
    "Estratégias validadas para crescer seu perfil no Instagram",
    "Domine o UGC: Crie vídeos que vendem no TikTok Shop e Shopee",
    "Receba em Dólar: Feche parcerias de UGC com marcas gringas",
    "Monetização: Todas as formas de lucrar com seu perfil",
    "Arsenal de Prompts Exclusivo para gerar fotos ultra-realistas"
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
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00FF88]/20 to-[#00D4FF]/20 border border-[#00FF88]/30 mb-4">
        <span className="text-[13px] font-bold text-[#00FF88] uppercase tracking-[0.12em]">
          🚀 Oferta Exclusiva de Lançamento
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-white mb-6 relative">
        O que você vai receber?
      </h3>

      {/* Image */}
      <div className="w-full relative mb-8 rounded-2xl overflow-hidden glass animate-in fade-in zoom-in duration-700">
        <Image
          src="https://i.imgur.com/gKuwTmT.jpeg"
          alt="Conteúdo do treinamento"
          width={400}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

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
          <span className="text-[#8A8A8E] text-lg line-through">R$297</span>

          {/* Launch label */}
          {/* <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 my-4">
            <span className="text-[11px] font-semibold text-[#00FF88] uppercase tracking-[0.15em]">
              Condição Exclusiva no Grupo
            </span>
          </div> */}

          {/* Final price */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex items-end gap-2 leading-none">
              <span className="text-white text-xl mb-4 font-medium">11x de</span>
              <span className="font-mono text-[56px] md:text-[64px] font-bold gradient-text">R$9,86</span>
            </div>
            <span className="text-[#8A8A8E] text-sm font-medium">ou R$ 97,00 à vista</span>
          </div>

          {/* Payment info */}
          <p className="text-[#8A8A8E] text-sm">
            Oferta exclusiva de lançamento por tempo limitado.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <PrimaryButton
        href="https://pay.hub.la/6MfU0miJdwxDQBHQY3Sm?utm_source=instagram&utm_medium=manychat&utm_campaign=lancamento"
        large
        animated
        className="mb-6"
      >
        <span>DESBLOQUEAR MEU ACESSO AGORA!!</span>
        <Zap className="w-5 h-5" />
      </PrimaryButton>

      {/* Section 4 - Testimonials */}
      <div className="w-full mb-8 relative">
        <h3 className="font-heading text-2xl font-bold text-white mb-6 text-center">
          Veja o que os alunos estão dizendo
        </h3>

        <div className="space-y-4">
          {/* Testimonial 1 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700">
            <Image
              src="https://i.imgur.com/zRKXm61.jpeg"
              alt="Depoimento 1"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial 2 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700 delay-100">
            <Image
              src="https://i.imgur.com/Qew7LLK.jpeg"
              alt="Depoimento 2"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Testimonial 3 */}
          <div className="w-full relative animate-in fade-in zoom-in duration-700 delay-200">
            <Image
              src="https://i.imgur.com/tM1Lbxl.jpeg"
              alt="Depoimento 3"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 5 - Guarantee */}
      <div className="w-full glass rounded-xl p-4 mb-8 relative">
        <div className="flex items-start gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-[#00FF88]/10 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-[#00FF88]" />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Garantia de Satisfação</h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Compra 100% segura com garantia de satisfação. Se não gostar, devolvemos seu dinheiro em até 7 dias.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 - FAQ */}
      <div className="w-full mb-8 relative">
        <h3 className="font-heading text-2xl font-bold text-white mb-6 text-center">
          Dúvidas Frequentes
        </h3>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-2 text-[15px]">
              O que exatamente é esse treinamento?
            </h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              É um treinamento completo do zero que ensina, passo a passo, como criar Influencers de IA realistas, gerar conteúdos e vídeos prontos e usar isso para viralizar e monetizar. É método prático, não teoria.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-2 text-[15px]">
              Preciso gastar com IA para criar minha Influencer?
            </h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Não. Você não precisa gastar nada para criar sua Influencer de IA. Mostramos como usar IAs gratuitas para gerar sua Influencer do zero e, além disso, apresentamos ferramentas profissionais para quem quiser escalar depois. Você começa sem investimento e evolui quando fizer sentido.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-2 text-[15px]">
              Em quanto tempo eu crio minha Influencer de IA?
            </h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Em menos de 10 minutos, você já sai com sua Influencer de IA criada e pronta para uso. Nada de semanas estudando. É resultado imediato.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-2 text-[15px]">
              Preciso saber algo sobre IA, edição ou marketing?
            </h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Não. O treinamento foi criado para quem está começando do absoluto zero. Sem programação, sem edição avançada e sem linguagem técnica. Você só segue, aplica e executa.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="w-full glass rounded-xl p-5 text-left">
            <h4 className="text-white font-semibold mb-2 text-[15px]">
              Dá mesmo para viralizar ou ganhar dinheiro com isso?
            </h4>
            <p className="text-[#8A8A8E] text-sm leading-relaxed">
              Sim. Influencers de IA já estão viralizando agora e sendo usadas para vendas, monetização, parcerias e tráfego. Mostramos como entrar antes da saturação e transformar atenção em dinheiro.
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
