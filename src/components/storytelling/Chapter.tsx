import { type ReactNode } from 'react'
import { colors, fonts } from '../../config/theme'

interface ChapterProps {
  id: string
  number: number
  title: string
  children: ReactNode
}

export function Chapter({ id, number, title, children }: ChapterProps) {
  return (
    <section id={id} className="relative py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em] block mb-3"
            style={{ color: colors.credit, fontFamily: fonts.mono }}
          >
            Chapter {String(number).padStart(2, '0')}
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: colors.text.primary }}
          >
            {title}
          </h2>
          <div
            className="mt-4 h-px w-20"
            style={{ background: `linear-gradient(90deg, ${colors.credit}, transparent)` }}
          />
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  )
}
