'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import { leftBorderSlide } from '@/lib/animations'
import type { projects } from '@/data/content'

type Project = (typeof projects)[number]

export function ProjectCardSkeleton() {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-md p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="skeleton h-4 w-3/5" />
        <div className="skeleton h-3 w-1/5" />
      </div>
      <div className="space-y-2">
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-4/5" />
      </div>
      <div className="skeleton h-3 w-2/3" />
    </div>
  )
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const metricLabel = project.highlights[0]?.label ?? null
  const secondMetric = project.highlights[1]?.label ?? null

  return (
    /* Entrance + card lift on hover */
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      {/* Hover manager for left-border variant */}
      <motion.article
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={cn(
          'group relative border rounded-md overflow-hidden',
          'border-zinc-200 dark:border-zinc-800',
          'hover:border-zinc-300 dark:hover:border-zinc-600',
          'hover:bg-zinc-50 dark:hover:bg-zinc-900/50',
          'transition-colors duration-200'
        )}
      >
        {/* Orange left border — slides in from top on hover */}
        <motion.div
          variants={leftBorderSlide}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500 origin-top z-10"
        />

        <div className="p-5 space-y-4">
          {/* Header: title + metric */}
          <div className="flex items-start justify-between gap-3">
            <h3 className={cn(
              'text-[15px] font-medium leading-snug transition-colors duration-200',
              'text-zinc-800 dark:text-zinc-200',
              'group-hover:text-zinc-950 dark:group-hover:text-zinc-50'
            )}>
              {project.title}
            </h3>
            {metricLabel && (
              <span className="font-mono text-[11px] text-orange-500 shrink-0 pt-0.5 tabular-nums">
                {metricLabel}
              </span>
            )}
          </div>

          {/* Tag + company row */}
          <div className="flex items-center gap-2 flex-wrap -mt-1">
            <span className="font-mono text-[11px] text-zinc-500">{project.tag}</span>
            {project.company && (
              <>
                <span className="text-zinc-300 dark:text-zinc-700 text-[11px]">·</span>
                <span className="font-mono text-[11px] text-zinc-500">{project.company}</span>
              </>
            )}
            {secondMetric && (
              <>
                <span className="text-zinc-300 dark:text-zinc-700 text-[11px]">·</span>
                <span className="font-mono text-[11px] text-orange-500">{secondMetric}</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Bullet details */}
          {project.details.length > 0 && (
            <ul className="space-y-1">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-2 text-xs text-zinc-500">
                  <span className="text-zinc-400 dark:text-zinc-700 shrink-0">—</span>
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {/* Stack — dot-separated */}
          <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 leading-relaxed transition-colors duration-200 group-hover:text-zinc-500 dark:group-hover:text-zinc-500">
            {project.stack.join(' · ')}
          </p>

          {/* Footer */}
          <div className="pt-1 border-t border-zinc-100 dark:border-zinc-900">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-150 font-mono"
              >
                <Github size={13} strokeWidth={1.5} />
                github
              </a>
            ) : (
              <span className="text-xs text-zinc-400 dark:text-zinc-700 font-mono">
                private · in progress
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}
