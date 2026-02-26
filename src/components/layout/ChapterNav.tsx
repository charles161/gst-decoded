import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { chapterMeta, colors, fonts } from '../../config/theme'
import { useChapterInView } from '../../hooks/useChapterInView'
import { useIsMobile } from '../../hooks/useIsMobile'

export function ChapterNav() {
  const isMobile = useIsMobile()
  const activeChapter = useChapterInView(chapterMeta.map((c) => c.id))
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const activeIdx = chapterMeta.findIndex((c) => c.id === activeChapter)

  if (isMobile) {
    return (
      <>
        {/* Mobile bottom pill */}
        <motion.button
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
          style={{
            background: `${colors.surface}dd`,
            border: `1px solid ${colors.credit}40`,
            color: colors.text.primary,
            fontFamily: fonts.display,
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
        >
          Ch {activeIdx + 1}: {chapterMeta[activeIdx]?.short}
        </motion.button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
              <motion.div
                className="relative w-full max-h-[70vh] overflow-y-auto rounded-t-2xl p-4 pb-8"
                style={{ background: colors.surface }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              >
                <div className="w-10 h-1 rounded-full mx-auto mb-4" style={{ background: colors.muted }} />
                <div className="grid grid-cols-2 gap-2">
                  {chapterMeta.map((ch, i) => (
                    <button
                      key={ch.id}
                      className="text-left px-3 py-2 rounded-lg text-sm transition-colors"
                      style={{
                        background: ch.id === activeChapter ? `${colors.credit}15` : 'transparent',
                        color: ch.id === activeChapter ? colors.credit : colors.text.secondary,
                        border: ch.id === activeChapter ? `1px solid ${colors.credit}30` : '1px solid transparent',
                      }}
                      onClick={() => scrollTo(ch.id)}
                    >
                      <span style={{ fontFamily: fonts.mono, fontSize: '0.7rem', opacity: 0.6 }}>{i + 1}.</span>{' '}
                      {ch.short}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop sidebar
  return (
    <nav
      className="fixed left-0 top-0 h-screen w-52 z-40 overflow-y-auto py-16 px-3"
      style={{
        background: `linear-gradient(180deg, ${colors.oceanDark}ee, ${colors.ocean}ee)`,
        borderRight: `1px solid ${colors.surfaceLight}40`,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="mb-6 px-2">
        <h2
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: colors.credit }}
        >
          GST Decoded
        </h2>
      </div>

      {chapterMeta.map((ch, i) => {
        const isActive = ch.id === activeChapter
        return (
          <button
            key={ch.id}
            className="w-full text-left px-2 py-1.5 rounded-md mb-0.5 text-sm transition-all duration-200 block"
            style={{
              color: isActive ? colors.credit : colors.text.muted,
              background: isActive ? `${colors.credit}10` : 'transparent',
              fontWeight: isActive ? 500 : 400,
            }}
            onClick={() => scrollTo(ch.id)}
          >
            <span style={{ fontFamily: fonts.mono, fontSize: '0.65rem', opacity: 0.5 }}>
              {String(i + 1).padStart(2, '0')}
            </span>{' '}
            {ch.short}
          </button>
        )
      })}
    </nav>
  )
}
