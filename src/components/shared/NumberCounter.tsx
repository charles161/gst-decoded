import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { fonts } from '../../config/theme'

interface NumberCounterProps {
  value: number
  prefix?: string
  suffix?: string
  color?: string
  duration?: number
  className?: string
}

export function NumberCounter({
  value,
  prefix = '',
  suffix = '',
  color,
  duration = 1,
  className = '',
}: NumberCounterProps) {
  const motionValue = useMotionValue(0)
  const display = useTransform(motionValue, (v) =>
    `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`
  )

  useEffect(() => {
    const controls = animate(motionValue, value, { duration, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [value, duration, motionValue])

  return (
    <motion.span
      className={`font-semibold ${className}`}
      style={{ color, fontFamily: fonts.mono }}
    >
      {display}
    </motion.span>
  )
}
