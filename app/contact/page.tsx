import type { Metadata } from 'next'
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import SectionLabel from '@/components/SectionLabel'
import { siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with Menas Issam — ${siteConfig.email}`,
}

const contactDetails = [
  { icon: Mail,     label: 'email',    value: siteConfig.email,              href: `mailto:${siteConfig.email}` },
  { icon: Phone,    label: 'phone',    value: siteConfig.phone,              href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: Github,   label: 'github',   value: 'github.com/Issamenas',        href: siteConfig.github },
  { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/issam-menas', href: siteConfig.linkedin },
]

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-content px-6">

        <SectionLabel
          label="contact"
          description="Let's talk about AI, engineering, or collaboration"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Left: contact details */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
              <MapPin size={11} />
              Algiers, Algeria
            </div>

            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 group"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.5}
                    className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-150 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">{label}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-150 truncate">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-[6px] w-[6px] rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs text-zinc-500">open to opportunities</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
                internships · research · AI/ML projects
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  )
}
