import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '@/data/content'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="mx-auto max-w-content px-6 py-8 flex items-center justify-between gap-4">
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-600">
          © {new Date().getFullYear()} issam.menas
        </span>
        <div className="flex items-center gap-4">
          {[
            { href: siteConfig.github, icon: Github, label: 'GitHub' },
            { href: siteConfig.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${siteConfig.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-zinc-600 hover:text-zinc-300 transition-colors duration-150"
              aria-label={label}
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
