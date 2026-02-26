import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { colors, fonts } from '../../config/theme'

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function P({ children }: { children: ReactNode }) {
  return (
    <motion.p
      className="text-base md:text-lg leading-relaxed"
      style={{ color: colors.text.secondary }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.p>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <motion.h3
      className="text-xl md:text-2xl font-semibold mt-10 mb-4"
      style={{ color: colors.text.primary }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.h3>
  )
}

export function Glow({ children, color = colors.credit }: { children: ReactNode; color?: string }) {
  return <span style={{ color, fontWeight: 600 }}>{children}</span>
}

export function Mono({ children }: { children: ReactNode }) {
  return (
    <code
      className="px-1.5 py-0.5 rounded text-sm"
      style={{ background: colors.surfaceLight, color: colors.credit, fontFamily: fonts.mono }}
    >
      {children}
    </code>
  )
}

export function OrderedList({ children }: { children: ReactNode }) {
  return (
    <motion.ol
      className="list-decimal list-inside space-y-2 pl-2"
      style={{ color: colors.text.secondary }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.ol>
  )
}

export function BulletList({ children }: { children: ReactNode }) {
  return (
    <motion.ul
      className="list-disc list-inside space-y-2 pl-2"
      style={{ color: colors.text.secondary }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.ul>
  )
}

export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl my-6"
      style={{ border: `1px solid ${colors.surfaceLight}` }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: colors.surfaceLight }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold"
                style={{ color: colors.credit, fontFamily: fonts.mono, fontSize: '0.75rem' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ borderTop: `1px solid ${colors.surfaceLight}40` }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-2.5"
                  style={{ color: j === 0 ? colors.text.primary : colors.text.secondary }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

export function BlockQuote({ children }: { children: ReactNode }) {
  return (
    <motion.blockquote
      className="pl-4 py-2 my-4 italic"
      style={{
        borderLeft: `3px solid ${colors.credit}60`,
        color: colors.text.secondary,
      }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.blockquote>
  )
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <motion.pre
      className="rounded-xl p-4 my-4 overflow-x-auto text-sm leading-relaxed"
      style={{
        background: colors.oceanDark,
        border: `1px solid ${colors.surfaceLight}`,
        color: colors.text.secondary,
        fontFamily: fonts.mono,
      }}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.pre>
  )
}
