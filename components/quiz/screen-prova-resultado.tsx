"use client"

import { PrimaryButton } from "./primary-button"
import { useEffect } from "react"


interface ScreenProvaResultadoProps {
  onNext: () => void
}

export function ScreenProvaResultado({ onNext }: ScreenProvaResultadoProps) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f7b726300fb8f8ee0296a/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // Optional: clean up script if necessary
      // document.head.removeChild(s);
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Badge */}
      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00FF88]/15 mb-6">
        <span className="text-[11px] font-semibold text-[#00FF88] uppercase tracking-[0.1em]">
          Case Real
        </span>
      </div>

      {/* Title */}
      <h2 className="font-heading text-[28px] font-bold tracking-[-0.02em] mb-4 text-white">
        <span className="gradient-text">U$500</span> por um único vídeo.
      </h2>

      {/* Description */}
      <p className="text-[#8A8A8E] text-base leading-relaxed mb-6 max-w-[360px]">
        Uma marca internacional  pagou isso para a Olivia por um vídeo de 10 segundos. Eu não gravei. Não apareci. Não saí de casa.
      </p>

      {/* Divider */}
      <div className="w-[40%] h-px gradient-bg opacity-30 mb-6" />

      {/* Highlight text */}
      <p className="text-white font-semibold text-lg mb-8">
        A Olivia fez tudo.
      </p>

      {/* Video Player */}
      <div className="w-full max-w-[400px] mb-8">
        {/* @ts-ignore */}
        <vturb-smartplayer
          id="vid-697f7b726300fb8f8ee0296a"
          style={{ display: "block", margin: "0 auto", width: "100%" }}
        />
      </div>

      {/* Button */}
      <PrimaryButton onClick={onNext}>
        Continuar
      </PrimaryButton>
    </div>
  )
}
