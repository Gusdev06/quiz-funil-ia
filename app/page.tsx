"use client"

import { useState, useEffect, useRef } from "react"
import { ScreenEntrada } from "@/components/quiz/screen-entrada"
import { ScreenDesafio } from "@/components/quiz/screen-desafio"
import { ScreenRevelacao } from "@/components/quiz/screen-revelacao"
import { ScreenProvaResultado } from "@/components/quiz/screen-prova-resultado"
import { ScreenMetricas } from "@/components/quiz/screen-metricas"
import { ScreenPossibilidades } from "@/components/quiz/screen-possibilidades"
import { ScreenDecisao } from "@/components/quiz/screen-decisao"
import { ScreenOferta } from "@/components/quiz/screen-oferta"
import { ProgressBar } from "@/components/quiz/progress-bar"
import { BackButton } from "@/components/quiz/back-button"

export default function QuizFunil() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalScreens = 7

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => Math.min(prev + 1, totalScreens))
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  const goBack = () => {
    if (isTransitioning || currentScreen === 1) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => Math.max(prev - 1, 1))
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const renderScreen = () => {
    const screenProps = { onNext: goToNext }

    switch (currentScreen) {
      case 1:
        return <ScreenEntrada {...screenProps} />
      case 2:
        return <ScreenDesafio {...screenProps} />
      case 3:
        return <ScreenRevelacao {...screenProps} />
      case 4:
        return <ScreenProvaResultado {...screenProps} />
      // ScreenMetricas removed (was 5)
      case 5:
        return <ScreenPossibilidades {...screenProps} />
      case 6:
        return <ScreenDecisao {...screenProps} />
      case 7:
        return <ScreenOferta />
      default:
        return <ScreenEntrada {...screenProps} />
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B] relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient orb effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF88] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Progress bar */}
      <ProgressBar current={currentScreen} total={totalScreens} />

      {/* Back button */}
      {currentScreen > 1 && <BackButton onClick={goBack} />}

      {/* Main content */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[480px] mx-auto px-5 md:px-6 pt-16 pb-12"
      >
        <div
          className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning
            ? "opacity-0 translate-y-5"
            : "opacity-100 translate-y-0"
            }`}
        >
          {renderScreen()}
        </div>
      </div>
    </main>
  )
}
