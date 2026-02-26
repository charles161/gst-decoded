import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { colors, fonts } from '../../config/theme'

interface CalloutBoxProps {
  children: ReactNode
  type?: 'insight' | 'product' | 'warning'
  title?: string
}

const calloutStyles = {
  insight: { color: colors.credit, label: 'Key Insight' },
  product: { color: colors.success, label: 'Product Opportunity' },
  warning: { color: colors.penalty, label: 'Watch Out' },
}

export function CalloutBox({ children, type = 'insight', title }: CalloutBoxProps) {
  const style = calloutStyles[type]

  return (
    <motion.div
      className="rounded-xl p-4 md:p-5 my-6"
      style={{
        background: `${style.color}08`,
        borderLeft: `3px solid ${style.color}80`,
      }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-widest block mb-2"
        style={{ color: style.color, fontFamily: fonts.mono }}
      >
        {title || style.label}
      </span>
      <div className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
        {children}
      </div>
    </motion.div>
  )
}
