import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { colors, glowShadow } from '../../config/theme'

interface GlowCardProps {
  children: ReactNode
  color?: string
  className?: string
}

export function GlowCard({ children, color = colors.credit, className = '' }: GlowCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl p-6 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceLight})`,
        border: `1px solid ${color}25`,
        boxShadow: glowShadow(color, 0.3),
      }}
      whileHover={{
        boxShadow: glowShadow(color, 0.6),
        borderColor: `${color}50`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
