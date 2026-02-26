import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

type Phase = 'idle' | 'liability' | 'credit-pay' | 'cash-pay' | 'reconciled'

const LIABILITY_TOTAL = 500000
const CREDIT_DEDUCT = 350000
const CASH_DEDUCT = 150000

const formatINR = (n: number) => `\u20B9${n.toLocaleString('en-IN')}`

function CounterValue({ value, color, prefix = '\u20B9' }: { value: number; color: string; prefix?: string }) {
  const mv = useMotionValue(0)
  const display = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString('en-IN')}`)
  const prevValue = useRef(0)

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    })
    prevValue.current = value
    return controls.stop
  }, [value, mv])

  return (
    <motion.span style={{ color, fontFamily: fonts.mono, fontWeight: 600, fontSize: '1.25rem' }}>
      {display}
    </motion.span>
  )
}

export function ThreeWallets() {
  const [phase, setPhase] = useState<Phase>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Wallet values per phase
  const cashBalance = phase === 'idle' ? 200000 : phase === 'cash-pay' || phase === 'reconciled' ? 200000 - CASH_DEDUCT : 200000
  const creditBalance = phase === 'idle' ? 400000 : phase === 'credit-pay' || phase === 'cash-pay' || phase === 'reconciled' ? 400000 - CREDIT_DEDUCT : 400000
  const liabilityBalance =
    phase === 'idle' ? 0 :
    phase === 'liability' ? LIABILITY_TOTAL :
    phase === 'credit-pay' ? LIABILITY_TOTAL - CREDIT_DEDUCT :
    phase === 'cash-pay' || phase === 'reconciled' ? 0 : 0

  const startAnimation = () => {
    setPhase('liability')
  }

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setPhase('idle')
  }

  useEffect(() => {
    if (phase === 'liability') {
      timerRef.current = setTimeout(() => setPhase('credit-pay'), 1200)
    } else if (phase === 'credit-pay') {
      timerRef.current = setTimeout(() => setPhase('cash-pay'), 1200)
    } else if (phase === 'cash-pay') {
      timerRef.current = setTimeout(() => setPhase('reconciled'), 1000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [phase])

  const wallets = [
    {
      label: 'Cash Wallet',
      sublabel: 'Electronic Cash Ledger',
      color: colors.credit,
      balance: cashBalance,
      capacity: 200000,
      info: 'Funds deposited via challan. Used to pay taxes that ITC cannot cover.',
      isDeducting: phase === 'cash-pay',
      deductAmount: CASH_DEDUCT,
    },
    {
      label: 'Credit Wallet',
      sublabel: 'Electronic Credit Ledger',
      color: colors.success,
      balance: creditBalance,
      capacity: 400000,
      info: 'ITC from purchase invoices accumulates here. First source for tax payment.',
      isDeducting: phase === 'credit-pay',
      deductAmount: CREDIT_DEDUCT,
    },
    {
      label: 'Liability Register',
      sublabel: 'Tax Payable',
      color: phase === 'reconciled' ? colors.success : colors.penalty,
      balance: liabilityBalance,
      capacity: LIABILITY_TOTAL,
      info: 'Total GST liability for the period. Must be zeroed out by filing date.',
      isDeducting: false,
      deductAmount: 0,
    },
  ]

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Scenario context */}
      <div className="text-center mb-6">
        <div className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: colors.text.muted }}>
          Ramesh's January 2026 Tax Payment
        </div>
        <div className="text-sm" style={{ color: colors.text.secondary }}>
          Liability: {formatINR(LIABILITY_TOTAL)} &bull; ITC Available: {formatINR(400000)} &bull; Cash Needed: {formatINR(CASH_DEDUCT)}
        </div>
      </div>

      {/* Wallets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {wallets.map((w, idx) => (
          <motion.div
            key={w.label}
            className="relative rounded-xl p-4 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceLight})`,
              border: `1px solid ${w.color}30`,
              boxShadow: w.isDeducting ? glowShadow(w.color, 0.5) : glowShadow(w.color, 0.15),
            }}
            animate={{
              borderColor: phase === 'reconciled' && idx === 2
                ? `${colors.success}60`
                : w.isDeducting ? `${w.color}80` : `${w.color}30`,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: w.color, boxShadow: `0 0 6px ${w.color}60` }}
              />
              <span className="text-sm font-semibold" style={{ color: w.color }}>
                {w.label}
              </span>
            </div>
            <div className="text-[10px] mb-3" style={{ color: colors.text.muted }}>
              {w.sublabel}
            </div>

            {/* Balance */}
            <div className="mb-3">
              <CounterValue value={w.balance} color={w.color} />
            </div>

            {/* Bar gauge */}
            <div className="h-2 rounded-full overflow-hidden mb-3" style={{ background: colors.oceanLight }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${w.color}, ${w.color}aa)`,
                  boxShadow: `0 0 8px ${w.color}40`,
                }}
                animate={{ width: `${w.capacity > 0 ? (Math.max(w.balance, 0) / w.capacity) * 100 : 0}%` }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Info */}
            <p className="text-[11px] leading-relaxed" style={{ color: colors.text.muted }}>
              {w.info}
            </p>

            {/* Deducting indicator */}
            <AnimatePresence>
              {w.isDeducting && (
                <motion.div
                  className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: `${w.color}20`,
                    color: w.color,
                    border: `1px solid ${w.color}40`,
                    fontFamily: fonts.mono,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  -{formatINR(w.deductAmount)}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Reconciled badge */}
            <AnimatePresence>
              {phase === 'reconciled' && (
                <motion.div
                  className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: `${colors.success}20`,
                    color: colors.success,
                    border: `1px solid ${colors.success}40`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  Reconciled {'\u2713'}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Flow lines between wallets (shown during animation) */}
      <AnimatePresence>
        {(phase === 'credit-pay' || phase === 'cash-pay') && (
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: `${phase === 'credit-pay' ? colors.success : colors.credit}15`,
                border: `1px dashed ${phase === 'credit-pay' ? colors.success : colors.credit}40`,
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-xs font-medium" style={{ color: phase === 'credit-pay' ? colors.success : colors.credit, fontFamily: fonts.mono }}>
                {phase === 'credit-pay'
                  ? `Credit \u2192 Liability: ${formatINR(CREDIT_DEDUCT)}`
                  : `Cash \u2192 Liability: ${formatINR(CASH_DEDUCT)}`}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {['liability', 'credit-pay', 'cash-pay', 'reconciled'].map((p, i) => {
          const stepColors = [colors.penalty, colors.success, colors.credit, colors.success]
          const labels = ['Liability Loads', 'ITC Applied', 'Cash Pays Rest', 'Reconciled']
          const isCurrent = phase === p
          const isDone = ['liability', 'credit-pay', 'cash-pay', 'reconciled'].indexOf(phase) > i

          return (
            <div key={p} className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: isCurrent || isDone ? stepColors[i] : colors.muted }}
                  animate={isCurrent ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                  transition={{ duration: 0.8, repeat: isCurrent ? Infinity : 0 }}
                />
                <span
                  className="text-[10px] hidden md:inline"
                  style={{ color: isCurrent || isDone ? stepColors[i] : colors.text.muted }}
                >
                  {labels[i]}
                </span>
              </div>
              {i < 3 && (
                <div className="w-4 h-px" style={{ background: isDone ? stepColors[i] : colors.surfaceLight }} />
              )}
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={startAnimation}
          disabled={phase !== 'idle'}
          className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: phase === 'idle' ? colors.credit : colors.surfaceLight,
            color: phase === 'idle' ? colors.ocean : colors.text.muted,
            boxShadow: phase === 'idle' ? glowShadow(colors.credit, 0.3) : 'none',
            cursor: phase === 'idle' ? 'pointer' : 'not-allowed',
          }}
        >
          Pay Tax
        </button>
        <button
          onClick={reset}
          className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: colors.oceanLight,
            color: colors.text.secondary,
            border: `1px solid ${colors.surfaceLight}`,
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
