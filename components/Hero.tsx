'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import { siteConfig } from '@/data/content'
import { sectionEntrance } from '@/lib/animations'
import Typewriter from '@/components/Typewriter'

const SUBTITLE = 'Build AI systems from idea to production.'

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status */}
          <motion.div variants={fadeSlideUp} className="inline-flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-green-500 animate-pulse shrink-0" />
            <span className="font-mono text-xs text-zinc-500">Available for opportunities</span>
          </motion.div>

          {/* Name + photo */}
          <motion.div variants={fadeSlideUp} className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <Image
                src="/me.jpg"
                alt="Menas Issam"
                width={56}
                height={56}
                className="rounded-md border border-zinc-200 dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-300 object-cover"
                priority
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-hero leading-tight">
                Menas Issam
              </h1>
              <p className="text-zinc-500 text-sm">
                Data Science & AI Engineering Student · ENP Alger
              </p>
            </div>
          </motion.div>

          {/* Subtitle — typewriter */}
          <motion.div variants={fadeSlideUp}>
            <Typewriter
              text={SUBTITLE}
              startDelay={600}
              speed={30}
              className="text-zinc-600 dark:text-zinc-400 text-base leading-[1.7] block max-w-[560px]"
            />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeSlideUp} className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors duration-150"
            >
              View Projects
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 text-sm font-medium rounded-md transition-colors duration-150"
            >
              <Download size={14} strokeWidth={1.5} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeSlideUp} className="flex items-center gap-4 pt-1">
            {[
              { href: siteConfig.github, icon: Github, label: 'GitHub' },
              { href: siteConfig.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-150"
                aria-label={label}
              >
                <Icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
