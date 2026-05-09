'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Layers, Database, Cpu } from 'lucide-react'
import { staggerContainer, itemEntrance } from '@/lib/animations'
import { skillGroups } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

type CategoryKey = 'AI & Data Science' | 'Frameworks & Libraries' | 'Data & Databases' | 'Engineering & Tools'

const categoryConfig: Record<CategoryKey, { icon: LucideIcon; color: string; slug: string }> = {
  'AI & Data Science':       { icon: Brain,    color: '#3b82f6', slug: 'ai-and-data-science' },
  'Frameworks & Libraries':  { icon: Layers,   color: '#8b5cf6', slug: 'frameworks-and-libraries' },
  'Data & Databases':        { icon: Database, color: '#10b981', slug: 'data-and-databases' },
  'Engineering & Tools':     { icon: Cpu,      color: '#f97316', slug: 'engineering-and-tools' },
}

const badgeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
}

const badgeItem = {
  hidden: { opacity: 0, y: 6, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="border-t border-zinc-200 dark:border-zinc-800 py-16">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-10"
        >
          <motion.div variants={itemEntrance}>
            <SectionLabel label="skills" description="Technologies and tools I work with" />
          </motion.div>

          {skillGroups.map((group) => {
            const config = categoryConfig[group.category as CategoryKey]
            const Icon = config?.icon
            const color = config?.color ?? '#f97316'
            const slug = config?.slug ?? group.category.toLowerCase()

            return (
              <motion.div key={group.category} variants={itemEntrance} className="space-y-3">
                {/* Category header with icon */}
                <div className="flex items-center gap-1.5">
                  {Icon && (
                    <Icon
                      size={13}
                      strokeWidth={1.5}
                      style={{ color }}
                      aria-hidden
                    />
                  )}
                  <span className="font-mono text-xs" style={{ color }}>
                    {slug}
                  </span>
                </div>

                {/* Badge cloud — CSS variable drives hover color */}
                <motion.div
                  variants={badgeStagger}
                  className="flex flex-wrap gap-2"
                  style={{ '--cat-color': color } as React.CSSProperties}
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeItem}
                      whileHover={{ scale: 1.04, y: -1 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className={cn(
                        'font-mono text-xs px-2.5 py-1 rounded-md cursor-default',
                        'border border-zinc-200 dark:border-zinc-800',
                        'text-zinc-600 dark:text-zinc-400',
                        'hover:[border-color:var(--cat-color)]',
                        'hover:[color:var(--cat-color)]',
                        'transition-colors duration-200'
                      )}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
