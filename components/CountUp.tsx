'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

interface CountUpProps {
  to: number
  duration?: number
  className?: string
}

export default function CountUp({ to, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })
    return () => controls.stop()
  }, [isInView, count, to, duration])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
