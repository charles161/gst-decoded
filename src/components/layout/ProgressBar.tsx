import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { colors } from '../../config/theme'

export function ProgressBar() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1"
      style={{ background: colors.oceanDark }}
    >
      <motion.div
        className="h-full"
        style={{
          width: `${progress * 100}%`,
          background: `linear-gradient(90deg, ${colors.credit}, ${colors.tax})`,
          boxShadow: `0 0 10px ${colors.credit}60`,
        }}
      />
    </motion.div>
  )
}
