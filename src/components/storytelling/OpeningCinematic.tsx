import { motion } from 'framer-motion'
import { colors, fonts } from '../../config/theme'

export function OpeningCinematic() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.credit}08, transparent 70%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="text-sm md:text-base uppercase tracking-[0.3em] mb-8"
          style={{ color: colors.text.muted, fontFamily: fonts.mono }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Before GST... there was chaos
        </motion.p>

        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: colors.text.primary }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="glow-text">GST</span>{' '}
          <span style={{ fontWeight: 300 }}>Decoded</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto mb-4"
          style={{ color: colors.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          India's tax system, explained like you're sitting in a chai shop with a really patient CA.
        </motion.p>

        <motion.p
          className="text-sm mb-12"
          style={{ color: colors.text.muted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          18 chapters &middot; 6 interactive simulations &middot; Zero jargon
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <span className="text-xs" style={{ color: colors.text.muted }}>Scroll to begin</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: colors.text.muted }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: colors.credit }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
