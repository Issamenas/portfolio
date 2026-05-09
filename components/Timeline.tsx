'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { itemEntrance } from '@/lib/animations'

type TimelineItemType = 'work' | 'education'

interface TimelineItem {
  id: string
  type: TimelineItemType
  company?: string
  institution?: string
  role?: string
  degree?: string
  period: string
  location: string
  description: string
  bullets: string[]
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="relative pl-4">
      {/* Vertical line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={itemEntrance}
            transition={{ delay: index * 0.08 }}
            className="relative pl-6"
          >
            {/* Dot */}
            <div className="absolute left-0 top-[7px] h-[6px] w-[6px] rounded-full bg-zinc-400 dark:bg-zinc-600 -translate-x-[2.5px]" />

            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h4 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.role ?? item.degree}
                </h4>
                <span className="font-mono text-xs text-zinc-500 shrink-0 tabular-nums">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-zinc-500">{item.company ?? item.institution}</p>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>

              {item.bullets.length > 0 && (
                <ul className="space-y-1 pt-0.5">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-xs text-zinc-500">
                      <span className="text-zinc-400 dark:text-zinc-700 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
