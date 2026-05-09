'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="mx-auto max-w-content h-full px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
          >
            issam.menas
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-[14px] pb-px transition-colors duration-150',
                    isActive
                      ? 'text-zinc-900 dark:text-zinc-50'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 h-[4px] w-[4px] rounded-full bg-orange-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors duration-150"
                aria-label="Toggle theme"
              >
                {theme === 'dark'
                  ? <Sun size={15} strokeWidth={1.5} />
                  : <Moon size={15} strokeWidth={1.5} />
                }
              </button>
            )}

            {/* Mobile toggle — text, not icon */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden font-mono text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 tabular-nums w-8 text-right"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — slide down, no blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
          >
            <nav className="mx-auto max-w-content px-6 py-3 flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center gap-2 py-2.5 text-sm border-b border-zinc-100 dark:border-zinc-900 last:border-0 transition-colors duration-150',
                      isActive
                        ? 'text-zinc-900 dark:text-zinc-50'
                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-[4px] w-[4px] rounded-full bg-orange-500 shrink-0" />
                    )}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
