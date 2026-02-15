"use client"

import { useState } from "react"
import { QuizQuestion, QuizOption } from "@/types/quiz"
import { CheckCircle2 } from "lucide-react"

interface ScreenQuestionProps {
  question: QuizQuestion
  currentQuestion: number
  totalQuestions: number
  onAnswer: (option: QuizOption) => void
}

export function ScreenQuestion({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer
}: ScreenQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (option: QuizOption) => {
    setSelectedOption(option.id)

    // Delay para mostrar a seleção antes de avançar
    setTimeout(() => {
      onAnswer(option)
      setSelectedOption(null)
    }, 400)
  }

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Question Counter */}
      <div className="mb-6">
        <span className="text-[#8A8A8E] text-sm font-medium">
          Pergunta {currentQuestion} de {totalQuestions}
        </span>
      </div>

      {/* Question Title */}
      <h2 className="font-heading text-[24px] md:text-[28px] font-bold tracking-[-0.02em] mb-8 text-white leading-tight max-w-[420px]">
        {question.title}
      </h2>

      {/* Options */}
      <div className="w-full flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              disabled={selectedOption !== null}
              className={`
                relative w-full p-5 rounded-xl text-left
                transition-all duration-300
                ${isSelected
                  ? "gradient-bg scale-[1.02] shadow-[0_4px_30px_rgba(0,255,136,0.4)]"
                  : "glass hover:bg-white/[0.08] hover:scale-[1.01]"
                }
                ${selectedOption && !isSelected ? "opacity-50" : ""}
                disabled:cursor-not-allowed
              `}
            >
              <div className="flex items-center gap-4">
                {/* Checkbox/Check */}
                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full border-2
                  flex items-center justify-center transition-all duration-300
                  ${isSelected
                    ? "border-[#0A0A0B] bg-[#0A0A0B]"
                    : "border-white/30"
                  }
                `}>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-[#00FF88]" />
                  )}
                </div>

                {/* Option Text */}
                <span className={`
                  text-[15px] leading-relaxed font-medium
                  ${isSelected ? "text-[#0A0A0B]" : "text-white"}
                `}>
                  {option.text}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
