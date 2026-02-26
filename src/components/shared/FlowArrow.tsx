import { motion } from 'framer-motion'

interface FlowArrowProps {
  color?: string
  direction?: 'right' | 'down'
  animated?: boolean
}

export function FlowArrow({ color = '#00d4ff', direction = 'right', animated = true }: FlowArrowProps) {
  const isRight = direction === 'right'

  return (
    <div className={`flex ${isRight ? 'items-center' : 'flex-col items-center'} mx-1`}>
      <motion.div
        style={{
          width: isRight ? 40 : 2,
          height: isRight ? 2 : 40,
          background: `linear-gradient(${isRight ? '90deg' : '180deg'}, transparent, ${color})`,
        }}
        animate={animated ? { opacity: [0.4, 1, 0.4] } : undefined}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: isRight ? `8px solid ${color}` : '5px solid transparent',
          borderRight: isRight ? 'none' : '5px solid transparent',
          borderTop: isRight ? '5px solid transparent' : `8px solid ${color}`,
          borderBottom: isRight ? '5px solid transparent' : 'none',
        }}
      />
    </div>
  )
}
