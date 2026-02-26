import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

const RATES = [5, 12, 18, 28]

export function TaxCalculator() {
  const [amount, setAmount] = useState(10000)
  const [rate, setRate] = useState(18)
  const [sameState, setSameState] = useState(true)

  const taxAmount = Math.round(amount * rate / 100)
  const halfRate = rate / 2
  const halfTax = Math.round(taxAmount / 2)
  const maxBar = amount // scale bars relative to base amount

  const formatINR = (n: number) => `\u20B9${n.toLocaleString('en-IN')}`

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Amount input */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: colors.text.muted }}>
            Taxable Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: colors.text.muted }}>{'\u20B9'}</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
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

        {/* Rate dropdown */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: colors.text.muted }}>
            GST Rate
          </label>
          <div className="flex gap-2">
            {RATES.map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className="flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200"
                style={{
                  background: rate === r ? colors.tax : colors.oceanLight,
                  color: rate === r ? colors.ocean : colors.text.secondary,
                  border: `1px solid ${rate === r ? colors.tax : colors.surfaceLight}`,
                  boxShadow: rate === r ? glowShadow(colors.tax, 0.3) : 'none',
                }}
              >
                {r}%
              </button>
            ))}
          </div>
        </div>

        {/* State toggle */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: colors.text.muted }}>
            Transaction Type
          </label>
          <div
            className="flex rounded-lg overflow-hidden"
            style={{ border: `1px solid ${colors.surfaceLight}` }}
          >
            <button
              onClick={() => setSameState(true)}
              className="flex-1 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                background: sameState ? colors.credit : colors.oceanLight,
                color: sameState ? colors.ocean : colors.text.secondary,
              }}
            >
              Same State
            </button>
            <button
              onClick={() => setSameState(false)}
              className="flex-1 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                background: !sameState ? colors.credit : colors.oceanLight,
                color: !sameState ? colors.ocean : colors.text.secondary,
              }}
            >
              Diff State
            </button>
          </div>
        </div>
      </div>

      {/* Animated bars */}
      <div className="mb-6">
        <AnimatePresence mode="wait">
          {sameState ? (
            <motion.div
              key="intra"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* CGST bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium" style={{ color: colors.credit }}>
                    CGST @ {halfRate}%
                  </span>
                  <span className="text-sm font-medium" style={{ color: colors.credit, fontFamily: fonts.mono }}>
                    {formatINR(halfTax)}
                  </span>
                </div>
                <div className="h-4 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.credit}, ${colors.credit}aa)`,
                      boxShadow: `0 0 12px ${colors.credit}50`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((halfTax / maxBar) * 100, 100)}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              {/* SGST bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium" style={{ color: colors.success }}>
                    SGST @ {halfRate}%
                  </span>
                  <span className="text-sm font-medium" style={{ color: colors.success, fontFamily: fonts.mono }}>
                    {formatINR(halfTax)}
                  </span>
                </div>
                <div className="h-4 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.success}, ${colors.success}aa)`,
                      boxShadow: `0 0 12px ${colors.success}50`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((halfTax / maxBar) * 100, 100)}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="inter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* IGST bar */}
              <div className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium" style={{ color: colors.tax }}>
                    IGST @ {rate}%
                  </span>
                  <span className="text-sm font-medium" style={{ color: colors.tax, fontFamily: fonts.mono }}>
                    {formatINR(taxAmount)}
                  </span>
                </div>
                <div className="h-4 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors.tax}, ${colors.tax}aa)`,
                      boxShadow: `0 0 12px ${colors.tax}50`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((taxAmount / maxBar) * 100, 100)}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Invoice summary */}
      <motion.div
        className="rounded-xl p-4"
        style={{
          background: colors.oceanLight,
          border: `1px solid ${colors.surfaceLight}`,
        }}
        layout
      >
        <div className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: colors.text.muted }}>
          Invoice Line Items
        </div>
        <div className="space-y-2" style={{ fontFamily: fonts.mono, fontSize: '0.8125rem' }}>
          <div className="flex justify-between" style={{ color: colors.text.secondary }}>
            <span>Taxable Value</span>
            <span style={{ color: colors.text.primary }}>{formatINR(amount)}</span>
          </div>
          <div style={{ borderTop: `1px dashed ${colors.surfaceLight}`, margin: '4px 0' }} />
          {sameState ? (
            <>
              <div className="flex justify-between" style={{ color: colors.text.secondary }}>
                <span>CGST @ {halfRate}%</span>
                <span style={{ color: colors.credit }}>{formatINR(halfTax)}</span>
              </div>
              <div className="flex justify-between" style={{ color: colors.text.secondary }}>
                <span>SGST @ {halfRate}%</span>
                <span style={{ color: colors.success }}>{formatINR(halfTax)}</span>
              </div>
            </>
          ) : (
            <div className="flex justify-between" style={{ color: colors.text.secondary }}>
              <span>IGST @ {rate}%</span>
              <span style={{ color: colors.tax }}>{formatINR(taxAmount)}</span>
            </div>
          )}
          <div style={{ borderTop: `1px solid ${colors.surfaceLight}`, margin: '4px 0' }} />
          <div className="flex justify-between font-semibold" style={{ color: colors.text.primary }}>
            <span>Total Invoice</span>
            <span>{formatINR(amount + taxAmount)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
