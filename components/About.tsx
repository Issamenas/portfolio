'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, itemEntrance } from '@/lib/animations'
import { aboutContent } from '@/data/content'
import SectionLabel from '@/components/SectionLabel'
import CountUp from '@/components/CountUp'

function StatValue({ value }: { value: string }) {
  const slashMatch = value.match(/^(\d+)\/(\d+)$/)
  if (slashMatch) {
    return (
      <span>
        <CountUp to={parseInt(slashMatch[1])} duration={1.2} />
        <span className="opacity-50">/</span>
        <CountUp to={parseInt(slashMatch[2])} duration={1.6} />
      </span>
    )
  }

  const ordinalMatch = value.match(/^(\d+)(.+)$/)
  if (ordinalMatch) {
    return (
      <span>
        <CountUp to={parseInt(ordinalMatch[1])} duration={1.0} />
        {ordinalMatch[2]}
      </span>
    )
  }

  return <span>{value}</span>
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="border-t border-zinc-200 dark:border-zinc-800 py-16">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          <motion.div variants={itemEntrance}>
            <SectionLabel label="about" description="Who I am and what I'm working on" />
          </motion.div>

          {aboutContent.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={itemEntrance}
              className="text-zinc-600 dark:text-zinc-400 text-base leading-[1.7] max-w-[600px]"
            >
              {para}
            </motion.p>
          ))}

          {/* Stats — animated counters */}
          <motion.div variants={itemEntrance} className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
            {aboutContent.highlights.map(({ label, value, note }) => (
              <div key={label} className="space-y-0.5">
                <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-50 tabular-nums">
                  <StatValue value={value} />
                </div>
                <div className="text-xs text-zinc-500">{note}</div>
              </div>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemEntrance} className="space-y-2 pt-2">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              research interests
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'NLP', 'Multi-Agent Systems', 'Computer Vision',
                'Operational Research', 'LLM Fine-tuning',
              ].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.04 }}
                  className="font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 px-2.5 py-1 rounded-md transition-colors duration-150 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
