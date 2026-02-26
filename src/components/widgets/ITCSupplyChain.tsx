import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

interface Stage {
  name: string
  color: string
  salePrice: number
  gst: number
  itcClaimed: number
  netTax: number
  emoji: string
}

const STAGES: Stage[] = [
  { name: 'Farmer',        color: colors.chain.farmer,  salePrice: 100,  gst: 5,  itcClaimed: 0,  netTax: 5,  emoji: '\uD83C\uDF3E' },
  { name: 'Spinner',       color: colors.chain.spinner, salePrice: 200,  gst: 10, itcClaimed: 5,  netTax: 5,  emoji: '\uD83E\uDDF5' },
  { name: 'Weaver',        color: colors.chain.weaver,  salePrice: 400,  gst: 20, itcClaimed: 10, netTax: 10, emoji: '\uD83E\uDDF6' },
  { name: 'Garment Maker', color: colors.chain.garment, salePrice: 700,  gst: 35, itcClaimed: 20, netTax: 15, emoji: '\u2702\uFE0F' },
  { name: 'Retailer',      color: colors.chain.retailer,salePrice: 1000, gst: 50, itcClaimed: 35, netTax: 15, emoji: '\uD83D\uDC55' },
]

const TOTAL_TAX = STAGES.reduce((s, st) => s + st.netTax, 0)

const formatINR = (n: number) => `\u20B9${n.toLocaleString('en-IN')}`

export function ITCSupplyChain() {
  const [activeStage, setActiveStage] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: colors.text.muted }}>
          Follow a cotton T-shirt from farm to wardrobe
        </div>
        <div className="text-sm" style={{ color: colors.text.secondary }}>
          Click any stage to see how Input Tax Credit flows backward
        </div>
      </div>

      {/* Supply Chain */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-stretch gap-0 mb-6`}>
        {STAGES.map((stage, idx) => {
          const isActive = activeStage === idx
          const isDimmed = activeStage !== null && activeStage !== idx

          return (
            <div
              key={stage.name}
              className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}
              style={{ flex: 1 }}
            >
              {/* Stage card */}
              <motion.button
                className="relative rounded-xl p-3 md:p-4 w-full text-left cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceLight})`,
                  border: `1px solid ${isActive ? stage.color : `${stage.color}25`}`,
                  boxShadow: isActive ? glowShadow(stage.color, 0.6) : 'none',
                  minWidth: isMobile ? 'auto' : 0,
                }}
                onClick={() => setActiveStage(activeStage === idx ? null : idx)}
                animate={{
                  opacity: isDimmed ? 0.4 : 1,
                  scale: isActive ? 1.03 : 1,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ borderColor: `${stage.color}60` }}
              >
                {/* Stage indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{stage.emoji}</span>
                  <span className="text-sm font-semibold" style={{ color: stage.color }}>
                    {stage.name}
                  </span>
                </div>

                {/* Numbers */}
                <div className="space-y-1" style={{ fontFamily: fonts.mono, fontSize: '0.75rem' }}>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>Sells at</span>
                    <span style={{ color: colors.text.primary }}>{formatINR(stage.salePrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>GST 5%</span>
                    <span style={{ color: colors.tax }}>{formatINR(stage.gst)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>ITC</span>
                    <span style={{ color: colors.credit }}>{formatINR(stage.itcClaimed)}</span>
                  </div>
                  <div style={{ borderTop: `1px dashed ${colors.surfaceLight}`, margin: '4px 0' }} />
                  <div className="flex justify-between font-semibold">
                    <span style={{ color: colors.text.muted }}>Net Tax</span>
                    <span style={{ color: stage.color }}>{formatINR(stage.netTax)}</span>
                  </div>
                </div>

                {/* Active pulse ring */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{ border: `2px solid ${stage.color}` }}
                    animate={{ opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>

              {/* Arrow between stages */}
              {idx < STAGES.length - 1 && (
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${isMobile ? 'my-1' : 'mx-1'} relative`}>
                  {/* Forward arrow */}
                  <motion.div
                    style={{
                      width: isMobile ? 2 : 24,
                      height: isMobile ? 24 : 2,
                      background: `linear-gradient(${isMobile ? '180deg' : '90deg'}, ${STAGES[idx].color}, ${STAGES[idx + 1].color})`,
                    }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: isMobile ? '4px solid transparent' : `6px solid ${STAGES[idx + 1].color}`,
                      borderRight: isMobile ? '4px solid transparent' : 'none',
                      borderTop: isMobile ? `6px solid ${STAGES[idx + 1].color}` : '4px solid transparent',
                      borderBottom: isMobile ? 'none' : '4px solid transparent',
                    }}
                  />

                  {/* ITC backward flow (shown when a stage is active) */}
                  <AnimatePresence>
                    {activeStage !== null && activeStage > idx && (
                      <motion.div
                        className="absolute"
                        style={{
                          top: isMobile ? '50%' : -8,
                          left: isMobile ? -8 : '50%',
                          transform: isMobile ? 'translateY(-50%)' : 'translateX(-50%)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="text-[10px] font-medium whitespace-nowrap px-1.5 py-0.5 rounded"
                          style={{
                            background: `${colors.credit}20`,
                            color: colors.credit,
                            border: `1px dashed ${colors.credit}40`,
                            fontFamily: fonts.mono,
                          }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          ITC {'\u2190'}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ITC Detail panel when active */}
      <AnimatePresence>
        {activeStage !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-6"
          >
            <div
              className="rounded-xl p-4"
              style={{
                background: colors.oceanLight,
                border: `1px solid ${STAGES[activeStage].color}30`,
              }}
            >
              <div className="text-sm font-semibold mb-2" style={{ color: STAGES[activeStage].color }}>
                {STAGES[activeStage].emoji} {STAGES[activeStage].name}'s ITC Breakdown
              </div>
              <div className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                {activeStage === 0 ? (
                  <>The Farmer is the first in the chain and has no prior purchase to claim ITC on. Pays the full <span style={{ color: colors.tax }}>{formatINR(STAGES[0].gst)}</span> GST to the government.</>
                ) : (
                  <>
                    Charges <span style={{ color: colors.tax }}>{formatINR(STAGES[activeStage].gst)}</span> GST on sale
                    {' '}&minus;{' '}
                    claims <span style={{ color: colors.credit }}>{formatINR(STAGES[activeStage].itcClaimed)}</span> ITC from {STAGES[activeStage - 1].name}'s invoice
                    {' '}={' '}
                    pays only <span style={{ color: STAGES[activeStage].color }}>{formatINR(STAGES[activeStage].netTax)}</span> net to government.
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Running total */}
      <motion.div
        className="rounded-xl p-4 text-center"
        style={{
          background: `linear-gradient(135deg, ${colors.surface}, ${colors.oceanLight})`,
          border: `1px solid ${colors.success}25`,
          boxShadow: glowShadow(colors.success, 0.15),
        }}
      >
        <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: colors.text.muted }}>
          Government Total Collection
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 mb-2" style={{ fontFamily: fonts.mono, fontSize: '0.8125rem' }}>
          {STAGES.map((stage, idx) => (
            <span key={stage.name} className="flex items-center gap-1">
              <motion.span
                style={{ color: stage.color }}
                animate={activeStage === idx ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                transition={{ duration: 0.6, repeat: activeStage === idx ? Infinity : 0 }}
              >
                {formatINR(stage.netTax)}
              </motion.span>
              {idx < STAGES.length - 1 && <span style={{ color: colors.text.muted }}>+</span>}
            </span>
          ))}
          <span style={{ color: colors.text.muted }}>=</span>
          <span className="font-bold text-base" style={{ color: colors.success }}>
            {formatINR(TOTAL_TAX)}
          </span>
        </div>
        <div className="text-sm" style={{ color: colors.text.secondary }}>
          Exactly <span style={{ color: colors.success, fontWeight: 600 }}>5%</span> of the final retail price of{' '}
          <span style={{ color: colors.text.primary, fontFamily: fonts.mono }}>{formatINR(1000)}</span>
        </div>
      </motion.div>
    </div>
  )
}
