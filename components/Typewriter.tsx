'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypewriterProps {
  text: string
  startDelay?: number
  speed?: number
  className?: string
}

export default function Typewriter({
  text,
  startDelay = 700,
  speed = 38,
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let startTimer: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>

    startTimer = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          setDone(true)
          clearInterval(interval)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      clearInterval(interval)
    }
  }, [text, startDelay, speed])

  return (
    <span className={className}>
      {displayed}
      <AnimatePresence>
        {!done && (
          <motion.span
            key="cursor"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'loop' }}
            className="ml-px inline-block w-[1.5px] h-[0.85em] bg-orange-500 align-middle"
            aria-hidden
          />
        )}
      </AnimatePresence>
    </span>
  )
}
