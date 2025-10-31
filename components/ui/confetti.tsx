"use client"

import confetti from "canvas-confetti"
import { useCallback, useEffect, useRef } from "react"

import type { GlobalOptions, Options } from "canvas-confetti"

interface ConfettiProps {
  particleCount?: number
  angle?: number
  spread?: number
  startVelocity?: number
  decay?: number
  gravity?: number
  drift?: number
  ticks?: number
  origin?: { x: number; y: number }
  colors?: string[]
  shapes?: Options["shapes"]
  scalar?: number
  zIndex?: number
  disableForReducedMotion?: boolean
  useWorker?: boolean
  resize?: boolean
}

export const useConfetti = () => {
  const confettiRef = useRef<confetti.CreateTypes | null>(null)

  const fire = useCallback((options?: Options & GlobalOptions) => {
    if (confettiRef.current) {
      confettiRef.current(options)
    }
  }, [])

  const fireDefault = useCallback(() => {
    fire({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [fire])

  const fireRealistic = useCallback(() => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
    }

    function fireConfetti(particleRatio: number, opts: Options) {
      fire({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fireConfetti(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fireConfetti(0.2, {
      spread: 60,
    })

    fireConfetti(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    fireConfetti(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    fireConfetti(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [fire])

  const fireEmoji = useCallback((emoji: string[] = ["🎉", "✨", "🎊"]) => {
    const scalar = 2
    const unicorn = confetti.shapeFromText({ text: emoji[0], scalar })
    const star = confetti.shapeFromText({ text: emoji[1], scalar })
    const party = confetti.shapeFromText({ text: emoji[2], scalar })

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn, star, party],
      scalar,
    }

    fire({
      ...defaults,
      particleCount: 30,
    })

    fire({
      ...defaults,
      particleCount: 5,
    })

    fire({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: [star],
    })
  }, [fire])

  const fireSide = useCallback(() => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#3B82F6", "#7C3AED", "#EC4899", "#F59E0B"]

    const frame = () => {
      if (Date.now() > end) return

      fire({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      })
      fire({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [fire])

  const fireStars = useCallback(() => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    }

    const shoot = () => {
      fire({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      })

      fire({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
  }, [fire])

  useEffect(() => {
    confettiRef.current = confetti.create(undefined, {
      resize: true,
      useWorker: true,
    })

    return () => {
      confettiRef.current?.reset()
    }
  }, [])

  return {
    fire,
    fireDefault,
    fireRealistic,
    fireEmoji,
    fireSide,
    fireStars,
  }
}

export { confetti }
