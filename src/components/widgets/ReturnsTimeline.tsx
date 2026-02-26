import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

interface TimelineEvent {
  day: number
  endDay?: number
  label: string
  color: string
  detail: string
  stress: number // 0-100
}

const EVENTS: TimelineEvent[] = [
  {
    day: 1,
    label: 'Month Opens',
    color: colors.text.muted,
    detail: 'New GST period begins. Sales invoices from last month need to be compiled. Accounting teams start collating data.',
    stress: 5,
  },
  {
    day: 11,
    label: 'GSTR-1 Due',
    color: colors.credit,
    detail: 'All outward supply details must be filed. Every invoice you issued last month \u2014 line by line \u2014 uploaded to the GST portal. Miss this and your buyers cannot see their ITC.',
    stress: 40,
  },
  {
    day: 14,
    label: 'GSTR-2B Drops',
    color: colors.tax,
    detail: 'The auto-generated ITC statement appears. This is what the government thinks you can claim. Now begins the reconciliation nightmare.',
    stress: 55,
  },
  {
    day: 14,
    endDay: 19,
    label: 'Reconciliation Dance',
    color: colors.tax,
    detail: 'Match every purchase invoice against GSTR-2B. Find mismatches: wrong GSTINs, missing invoices, amount differences. Chase vendors who haven\'t filed. 5 days of spreadsheet hell.',
    stress: 75,
  },
  {
    day: 20,
    label: 'GSTR-3B + Payment',
    color: colors.penalty,
    detail: 'The big one. File your summary return AND pay the tax due. Late by even one day? \u20B950/day late fee per act (CGST+SGST) PLUS 18% interest on unpaid tax. No extensions, no mercy.',
    stress: 95,
  },
  {
    day: 25,
    label: 'Breathe',
    color: colors.success,
    detail: 'Filing done, payment cleared, ITC reconciled. Five days of peace before the next month\'s cycle begins. Use this time to fix any reconciliation gaps.',
    stress: 10,
  },
]

const TOTAL_DAYS = 30

export function ReturnsTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [cursorDay, setCursorDay] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentStress = (() => {
    // Find the stress level for the current cursor day
    let stress = 5
    for (const evt of EVENTS) {
      if (evt.endDay) {
        if (cursorDay >= evt.day && cursorDay <= evt.endDay) stress = evt.stress
      } else {
        if (cursorDay >= evt.day) stress = evt.stress
      }
    }
    return stress
  })()

  const startAnimation = () => {
    setIsAnimating(true)
    setCursorDay(1)
    setSelectedEvent(null)
  }

  useEffect(() => {
    if (!isAnimating) return

    animRef.current = setTimeout(() => {
      setCursorDay((prev) => {
        if (prev >= TOTAL_DAYS) {
          setIsAnimating(false)
          return TOTAL_DAYS
        }
        // Check if we hit an event day
        const nextDay = prev + 1
        const hitEvent = EVENTS.find((e) => e.day === nextDay && !e.endDay)
        if (hitEvent) {
          setSelectedEvent(hitEvent)
        }
        return nextDay
      })
    }, 120)

    return () => {
      if (animRef.current) clearTimeout(animRef.current)
    }
  }, [isAnimating, cursorDay])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) clearTimeout(animRef.current)
    }
  }, [])

  const stressColor =
    currentStress > 70 ? colors.penalty :
    currentStress > 40 ? colors.tax :
    currentStress > 15 ? colors.credit :
    colors.success

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Stress meter */}
      <div className="mb-6">
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: colors.text.muted }}>
            Stress Level
          </span>
          <span className="text-xs font-medium" style={{ color: stressColor, fontFamily: fonts.mono }}>
            Day {cursorDay} / {TOTAL_DAYS}
          </span>
        </div>
        <div className="h-3 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.success}, ${stressColor})`,
              boxShadow: `0 0 12px ${stressColor}50`,
            }}
            animate={{ width: `${currentStress}%` }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mb-6 overflow-x-auto pb-2">
        <div className="flex items-end gap-0 min-w-[600px]" style={{ height: 120 }}>
          {Array.from({ length: TOTAL_DAYS }, (_, i) => {
            const day = i + 1
            const event = EVENTS.find((e) =>
              e.endDay ? day >= e.day && day <= e.endDay : e.day === day
            )
            const isActive = cursorDay === day
            const isPast = cursorDay > day
            const barColor = event ? event.color : (isPast ? `${colors.text.muted}60` : `${colors.surfaceLight}`)
            const barHeight = event ? (event.stress * 0.7 + 30) : 30

            return (
              <div
                key={day}
                className="flex flex-col items-center cursor-pointer flex-1 min-w-[18px]"
                onClick={() => {
                  const clickedEvent = EVENTS.find((e) =>
                    e.endDay ? day >= e.day && day <= e.endDay : e.day === day
                  )
                  if (clickedEvent) setSelectedEvent(clickedEvent)
                  setCursorDay(day)
                }}
              >
                <motion.div
                  className="w-full rounded-t-sm relative"
                  style={{
                    background: barColor,
                    opacity: isPast || isActive ? 1 : 0.4,
                    minHeight: 4,
                  }}
                  animate={{
                    height: barHeight,
                    boxShadow: isActive ? `0 0 12px ${barColor}80` : 'none',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: colors.text.primary, boxShadow: `0 0 8px ${colors.text.primary}` }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                {(day === 1 || day === 11 || day === 14 || day === 20 || day === 25 || day === 30) && (
                  <span
                    className="text-[10px] mt-1"
                    style={{
                      color: event ? event.color : colors.text.muted,
                      fontFamily: fonts.mono,
                      fontWeight: event ? 600 : 400,
                    }}
                  >
                    {day}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Event labels along the bottom */}
        <div className="flex gap-3 flex-wrap mt-3 min-w-[600px]">
          {EVENTS.filter((e) => !e.endDay).map((evt) => (
            <button
              key={evt.day}
              onClick={() => {
                setSelectedEvent(evt)
                setCursorDay(evt.day)
              }}
              className="flex items-center gap-1.5 text-xs transition-opacity duration-200"
              style={{ opacity: selectedEvent?.day === evt.day ? 1 : 0.6 }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: evt.color, boxShadow: `0 0 6px ${evt.color}60` }}
              />
              <span style={{ color: evt.color }}>{evt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Animate button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: isAnimating ? colors.surfaceLight : colors.credit,
            color: isAnimating ? colors.text.muted : colors.ocean,
            boxShadow: isAnimating ? 'none' : glowShadow(colors.credit, 0.3),
            cursor: isAnimating ? 'not-allowed' : 'pointer',
          }}
        >
          {isAnimating ? 'Simulating...' : 'Simulate a GST Month'}
        </button>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div
            key={selectedEvent.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl p-4"
            style={{
              background: colors.oceanLight,
              border: `1px solid ${selectedEvent.color}30`,
              boxShadow: glowShadow(selectedEvent.color, 0.2),
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: selectedEvent.color, boxShadow: `0 0 8px ${selectedEvent.color}60` }}
              />
              <span className="text-sm font-semibold" style={{ color: selectedEvent.color }}>
                Day {selectedEvent.day}{selectedEvent.endDay ? `\u2013${selectedEvent.endDay}` : ''}: {selectedEvent.label}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
              {selectedEvent.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
