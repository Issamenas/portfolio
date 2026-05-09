import { cn } from '@/lib/utils'

interface SectionLabelProps {
  label: string
  description?: string
  className?: string
}

export default function SectionLabel({ label, description, className }: SectionLabelProps) {
  return (
    <div className={cn('space-y-1 mb-10', className)}>
      <span className="font-mono text-sm text-orange-500">{`// ${label}`}</span>
      {description && (
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
      )}
    </div>
  )
}
