import { motion } from 'framer-motion'
import { colors, fonts } from '../../config/theme'

interface AnimatedBarProps {
  label: string
  value: number
  maxValue: number
  color?: string
  prefix?: string
  showValue?: boolean
}

export function AnimatedBar({
  label,
  value,
  maxValue,
  color = colors.credit,
  prefix = '',
  showValue = true,
}: AnimatedBarProps) {
  const pct = maxValue > 0 ? Math.min((value / maxValue) * 100, 100) : 0

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: colors.text.secondary }}>{label}</span>
        {showValue && (
          <span className="text-sm font-medium" style={{ color, fontFamily: fonts.mono }}>
            {prefix}{value.toLocaleString('en-IN')}
          </span>
        )}
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 12px ${color}50`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
