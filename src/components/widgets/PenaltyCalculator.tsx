import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

const formatINR = (n: number) => `\u20B9${n.toLocaleString('en-IN')}`

interface EscalationLevel {
  minDays: number
  maxDays: number
  message: string
  color: string
  pulse: boolean
}

const ESCALATIONS: EscalationLevel[] = [
  { minDays: 1,  maxDays: 30,  message: 'Late fees accumulating \u2014 \u20B950/day per act (CGST + SGST)', color: colors.tax, pulse: false },
  { minDays: 31, maxDays: 60,  message: 'E-way bill generation may be blocked \u2014 goods movement frozen', color: colors.penalty, pulse: false },
  { minDays: 61, maxDays: 90,  message: 'Registration suspension risk \u2014 SCN notice incoming', color: colors.penalty, pulse: true },
  { minDays: 91, maxDays: 180, message: 'Registration cancellation + buyer ITC reversal \u2014 nuclear option', color: colors.penalty, pulse: true },
]

export function PenaltyCalculator() {
  const [daysLate, setDaysLate] = useState(15)
  const [taxAmount, setTaxAmount] = useState(100000)

  // Calculations
  const lateFeePerDay = 50 // per act (CGST + SGST = 100 total, but spec says 50/day)
  const lateFeeRaw = daysLate * lateFeePerDay * 2 // CGST + SGST
  const lateFee = Math.min(lateFeeRaw, 10000)
  const interest = Math.round(taxAmount * 0.18 * daysLate / 365)
  const totalPenalty = lateFee + interest
  const maxPenalty = 10000 + Math.round(taxAmount * 0.18 * 180 / 365) // max scale for bars

  const currentEscalation = ESCALATIONS.find((e) => daysLate >= e.minDays && daysLate <= e.maxDays)
    || ESCALATIONS[ESCALATIONS.length - 1]

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Days late slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium uppercase tracking-widest" style={{ color: colors.text.muted }}>
              Days Late
            </label>
            <span className="text-sm font-semibold" style={{ color: currentEscalation.color, fontFamily: fonts.mono }}>
              {daysLate} {daysLate === 1 ? 'day' : 'days'}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={180}
            value={daysLate}
            onChange={(e) => setDaysLate(Number(e.target.value))}
            className="w-full"
            style={{
              accentColor: currentEscalation.color,
              height: 6,
            }}
          />
          <div className="flex justify-between mt-1">
            <span className="text-[10px]" style={{ color: colors.text.muted }}>1 day</span>
            <span className="text-[10px]" style={{ color: colors.text.muted }}>180 days</span>
          </div>
        </div>

        {/* Tax amount input */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs font-medium uppercase tracking-widest" style={{ color: colors.text.muted }}>
              Tax Amount Due
            </label>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: colors.text.muted }}>{'\u20B9'}</span>
            <input
              type="number"
              value={taxAmount}
              onChange={(e) => setTaxAmount(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-lg pl-7 pr-3 py-2.5 text-sm outline-none"
              style={{
                background: colors.oceanLight,
                border: `1px solid ${colors.surfaceLight}`,
                color: colors.text.primary,
                fontFamily: fonts.mono,
              }}
            />
          </div>
        </div>
      </div>

      {/* Penalty bars */}
      <div className="space-y-4 mb-6">
        {/* Late fee bar */}
        <div>
          <div className="flex justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: colors.tax }}>Late Fee</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: `${colors.tax}15`, color: colors.tax, fontFamily: fonts.mono }}>
                {daysLate}d {'\u00D7'} {'\u20B9'}100/day {lateFeeRaw > 10000 ? '(capped)' : ''}
              </span>
            </div>
            <span className="text-sm font-semibold" style={{ color: colors.tax, fontFamily: fonts.mono }}>
              {formatINR(lateFee)}
            </span>
          </div>
          <div className="h-4 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.tax}, ${colors.tax}aa)`,
                boxShadow: `0 0 12px ${colors.tax}50`,
              }}
              animate={{ width: `${Math.min((lateFee / maxPenalty) * 100, 100)}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Interest bar */}
        <div>
          <div className="flex justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: colors.penalty }}>Interest</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: `${colors.penalty}15`, color: colors.penalty, fontFamily: fonts.mono }}>
                {formatINR(taxAmount)} {'\u00D7'} 18% {'\u00D7'} {daysLate}/365
              </span>
            </div>
            <span className="text-sm font-semibold" style={{ color: colors.penalty, fontFamily: fonts.mono }}>
              {formatINR(interest)}
            </span>
          </div>
          <div className="h-4 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.penalty}, ${colors.penalty}aa)`,
                boxShadow: `0 0 12px ${colors.penalty}50`,
              }}
              animate={{ width: `${Math.min((interest / maxPenalty) * 100, 100)}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Total bar */}
        <div
          className="rounded-xl p-3"
          style={{
            background: colors.oceanLight,
            border: `1px solid ${currentEscalation.color}25`,
          }}
        >
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-semibold" style={{ color: colors.text.primary }}>Total Penalty</span>
            <span className="text-base font-bold" style={{ color: currentEscalation.color, fontFamily: fonts.mono }}>
              {formatINR(totalPenalty)}
            </span>
          </div>
          <div className="h-5 rounded-full overflow-hidden" style={{ background: `${colors.ocean}` }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.tax}, ${currentEscalation.color})`,
                boxShadow: `0 0 16px ${currentEscalation.color}60`,
              }}
              animate={{ width: `${Math.min((totalPenalty / maxPenalty) * 100, 100)}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Escalation warning */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEscalation.message}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl p-4 mb-4"
          style={{
            background: `${currentEscalation.color}10`,
            border: `1px solid ${currentEscalation.color}30`,
            boxShadow: glowShadow(currentEscalation.color, 0.2),
          }}
        >
          <motion.div
            className="flex items-start gap-2"
            animate={currentEscalation.pulse ? { opacity: [1, 0.6, 1] } : { opacity: 1 }}
            transition={currentEscalation.pulse ? { duration: 1.5, repeat: Infinity } : undefined}
          >
            <div
              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: currentEscalation.color, boxShadow: `0 0 8px ${currentEscalation.color}60` }}
            />
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: currentEscalation.color }}>
                {daysLate <= 30 ? 'Warning' : daysLate <= 60 ? 'Escalation' : daysLate <= 90 ? 'Critical' : 'Severe'}
              </div>
              <div className="text-sm" style={{ color: colors.text.secondary }}>
                {currentEscalation.message}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Cascade effect */}
      {daysLate > 30 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl p-4"
          style={{
            background: `linear-gradient(135deg, ${colors.surface}, ${colors.oceanLight})`,
            border: `1px solid ${colors.penalty}15`,
          }}
        >
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: colors.penalty }}>
            Cascade Effect
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm" style={{ color: colors.text.secondary }}>
            <span>Your non-compliance</span>
            <span style={{ color: colors.penalty }}>{'\u2192'}</span>
            <span>Buyers can't claim ITC</span>
            <span style={{ color: colors.penalty }}>{'\u2192'}</span>
            <span style={{ color: colors.penalty, fontWeight: 600 }}>They stop buying from you</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
