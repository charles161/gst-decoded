import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { colors } from '../../config/theme'

interface WidgetSlotProps {
  children: ReactNode
  title?: string
}

export function WidgetSlot({ children, title }: WidgetSlotProps) {
  return (
    <motion.div
      className="my-12 -mx-2 md:mx-0"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-4 px-2 md:px-0">
          <div className="w-2 h-2 rounded-full" style={{ background: colors.credit, boxShadow: `0 0 8px ${colors.credit}80` }} />
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: colors.credit }}>
            Interactive
          </span>
          <span className="text-xs" style={{ color: colors.text.muted }}>— {title}</span>
        </div>
      )}
      <div
        className="rounded-2xl p-4 md:p-6"
        style={{
          background: `linear-gradient(135deg, ${colors.surface}, ${colors.oceanLight})`,
          border: `1px solid ${colors.surfaceLight}`,
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
