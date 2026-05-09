'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/content'

const inputClass = cn(
  'w-full rounded-md border px-3 py-2',
  'border-zinc-200 dark:border-zinc-800',
  'bg-zinc-50 dark:bg-zinc-950',
  'text-sm text-zinc-900 dark:text-zinc-50',
  'placeholder:text-zinc-400 dark:placeholder:text-zinc-600',
  'focus:border-zinc-400 dark:focus:border-zinc-600 focus:outline-none',
  'transition-colors duration-150 font-mono'
)

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({ name: '', email: '', body: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((p) => ({ ...p, [e.target.name]: e.target.value }))

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-start gap-3 py-8"
      >
        <CheckCircle2 size={20} className="text-green-500" strokeWidth={1.5} />
        <p className="text-sm text-zinc-300 font-medium">Message sent.</p>
        <p className="text-sm text-zinc-500">
          Your default mail client should have opened. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-mono text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150 mt-2"
        >
          send another →
        </button>
      </motion.div>
    )
  }

  return (
    <form
      action={`mailto:${siteConfig.email}`}
      method="GET"
      encType="text/plain"
      onSubmit={() => setSubmitted(true)}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="font-mono text-xs text-zinc-500">name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={data.name}
            onChange={handle}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="font-mono text-xs text-zinc-500">email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={handle}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="font-mono text-xs text-zinc-500">message</label>
        <textarea
          id="message"
          name="body"
          rows={5}
          required
          value={data.body}
          onChange={handle}
          placeholder="What's on your mind?"
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-md transition-colors duration-150"
      >
        <Send size={14} strokeWidth={1.5} />
        Send message
      </button>
    </form>
  )
}
