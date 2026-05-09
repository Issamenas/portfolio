import type { Metadata } from 'next'
import Timeline from '@/components/Timeline'
import SectionLabel from '@/components/SectionLabel'
import { experiences, education, competitions, volunteering } from '@/data/content'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience, education, competitions, and volunteering of Menas Issam.',
}

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-content px-6 space-y-16">

        <section>
          <SectionLabel label="experience" description="Where I've worked" />
          <Timeline items={experiences} />
        </section>

        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <SectionLabel label="education" description="Academic background" />
          <Timeline items={education} />
        </section>

        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <SectionLabel label="competitions" description="Hackathons and data challenges" />
          <div className="flex flex-wrap gap-2">
            {competitions.map((comp) => (
              <span
                key={comp}
                className="font-mono text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 px-2.5 py-1 rounded-md transition-colors duration-150"
              >
                {comp}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <SectionLabel label="volunteering" description="Community involvement and leadership" />
          <div className="space-y-6">
            {volunteering.map((v) => (
              <div key={v.org} className="space-y-1">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{v.org}</h3>
                  <span className="font-mono text-xs text-zinc-500">{v.duration}</span>
                </div>
                <p className="font-mono text-xs text-orange-500">{v.roles}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{v.highlight}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
