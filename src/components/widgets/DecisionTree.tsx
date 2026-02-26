import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { colors, fonts, glowShadow } from '../../config/theme'

interface TreeNode {
  id: string
  question: string
  yes: string | TreeResult
  no: string | TreeResult
}

interface TreeResult {
  type: 'result'
  scheme: 'REGULAR' | 'COMPOSITION'
  reason: string
}

const TREE: Record<string, TreeNode> = {
  root: {
    id: 'root',
    question: 'Do you sell goods or services across state borders?',
    yes: { type: 'result', scheme: 'REGULAR', reason: 'Inter-state supply is not allowed under Composition Scheme.' },
    no: 'ecommerce',
  },
  ecommerce: {
    id: 'ecommerce',
    question: 'Do you sell on Amazon, Flipkart, or any e-commerce platform?',
    yes: { type: 'result', scheme: 'REGULAR', reason: 'E-commerce operators require GSTIN with regular registration.' },
    no: 'turnover',
  },
  turnover: {
    id: 'turnover',
    question: 'Is your annual turnover above \u20B91.5 crore?',
    yes: { type: 'result', scheme: 'REGULAR', reason: 'Composition Scheme is only available for turnover up to \u20B91.5 crore.' },
    no: 'buyers_itc',
  },
  buyers_itc: {
    id: 'buyers_itc',
    question: 'Do your buyers need to claim Input Tax Credit from your invoices?',
    yes: { type: 'result', scheme: 'REGULAR', reason: 'Composition dealers cannot issue tax invoices \u2014 your buyers lose their ITC.' },
    no: 'cost_compare',
  },
  cost_compare: {
    id: 'cost_compare',
    question: 'Is 1% flat tax on turnover cheaper than the GST you\'d pay minus ITC benefit?',
    yes: { type: 'result', scheme: 'COMPOSITION', reason: 'Lower compliance burden + flat 1% tax on turnover = savings for your business.' },
    no: { type: 'result', scheme: 'REGULAR', reason: 'Even though you qualify for Composition, the ITC benefit under Regular makes it cheaper.' },
  },
}

const NODE_ORDER = ['root', 'ecommerce', 'turnover', 'buyers_itc', 'cost_compare']

interface BreadcrumbItem {
  nodeId: string
  question: string
  answer: 'YES' | 'NO'
}

export function DecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState('root')
  const [result, setResult] = useState<TreeResult | null>(null)
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])

  const currentNode = TREE[currentNodeId]

  const handleAnswer = (answer: 'YES' | 'NO') => {
    if (!currentNode) return

    const next = answer === 'YES' ? currentNode.yes : currentNode.no

    setBreadcrumbs((prev) => [
      ...prev,
      { nodeId: currentNode.id, question: currentNode.question, answer },
    ])

    if (typeof next === 'object' && next.type === 'result') {
      setResult(next)
    } else {
      setCurrentNodeId(next as string)
    }
  }

  const reset = () => {
    setCurrentNodeId('root')
    setResult(null)
    setBreadcrumbs([])
  }

  const goBack = () => {
    if (breadcrumbs.length === 0) return
    const newBreadcrumbs = [...breadcrumbs]
    const last = newBreadcrumbs.pop()!
    setBreadcrumbs(newBreadcrumbs)
    setCurrentNodeId(last.nodeId)
    setResult(null)
  }

  const progress = result
    ? 100
    : NODE_ORDER.indexOf(currentNodeId) >= 0
      ? (NODE_ORDER.indexOf(currentNodeId) / NODE_ORDER.length) * 100
      : 0

  return (
    <div style={{ fontFamily: fonts.display }}>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="h-1 rounded-full overflow-hidden" style={{ background: colors.oceanLight }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.credit}, ${result ? (result.scheme === 'COMPOSITION' ? colors.success : colors.credit) : colors.credit})`,
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {breadcrumbs.map((bc, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: bc.answer === 'YES' ? `${colors.credit}15` : `${colors.tax}15`,
                  color: bc.answer === 'YES' ? colors.credit : colors.tax,
                  border: `1px solid ${bc.answer === 'YES' ? colors.credit : colors.tax}25`,
                }}
              >
                {bc.answer}
              </span>
              {i < breadcrumbs.length - 1 && (
                <span style={{ color: colors.text.muted }}>{'\u2192'}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main content area */}
      <AnimatePresence mode="wait">
        {result ? (
          /* Result card */
          <motion.div
            key="result"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-xl p-6 text-center"
              style={{
                background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceLight})`,
                border: `1px solid ${result.scheme === 'COMPOSITION' ? colors.success : colors.credit}40`,
                boxShadow: glowShadow(result.scheme === 'COMPOSITION' ? colors.success : colors.credit, 0.4),
              }}
            >
              <motion.div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
                style={{
                  background: result.scheme === 'COMPOSITION' ? `${colors.success}20` : `${colors.credit}20`,
                  color: result.scheme === 'COMPOSITION' ? colors.success : colors.credit,
                  border: `1px solid ${result.scheme === 'COMPOSITION' ? colors.success : colors.credit}40`,
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
              >
                {result.scheme === 'COMPOSITION' ? '\u2713 COMPOSITION SCHEME' : 'REGULAR SCHEME'}
              </motion.div>
              <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: colors.text.secondary }}>
                {result.reason}
              </p>

              {/* Scheme comparison mini-table */}
              <div
                className="mt-5 rounded-lg p-4 text-left mx-auto max-w-sm"
                style={{ background: colors.oceanLight, border: `1px solid ${colors.surfaceLight}` }}
              >
                <div className="text-[10px] font-medium uppercase tracking-widest mb-3" style={{ color: colors.text.muted }}>
                  Quick Comparison
                </div>
                <div className="space-y-2" style={{ fontSize: '0.75rem', fontFamily: fonts.mono }}>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>Returns</span>
                    <span style={{ color: result.scheme === 'COMPOSITION' ? colors.success : colors.credit }}>
                      {result.scheme === 'COMPOSITION' ? 'Quarterly' : 'Monthly'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>ITC Claim</span>
                    <span style={{ color: result.scheme === 'COMPOSITION' ? colors.penalty : colors.success }}>
                      {result.scheme === 'COMPOSITION' ? 'Not Available' : 'Available'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>Tax Rate</span>
                    <span style={{ color: colors.text.primary }}>
                      {result.scheme === 'COMPOSITION' ? '1% flat on turnover' : 'Standard slab rates'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.text.muted }}>Compliance</span>
                    <span style={{ color: result.scheme === 'COMPOSITION' ? colors.success : colors.tax }}>
                      {result.scheme === 'COMPOSITION' ? 'Low' : 'High'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Question card */
          <motion.div
            key={currentNodeId}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-xl p-6"
              style={{
                background: `linear-gradient(135deg, ${colors.surface}, ${colors.surfaceLight})`,
                border: `1px solid ${colors.surfaceLight}`,
              }}
            >
              <div className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: colors.text.muted }}>
                Question {breadcrumbs.length + 1} of 5
              </div>
              <h3 className="text-lg font-semibold mb-6 leading-relaxed" style={{ color: colors.text.primary }}>
                {currentNode?.question}
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={() => handleAnswer('YES')}
                  className="flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    background: `${colors.credit}15`,
                    color: colors.credit,
                    border: `1px solid ${colors.credit}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${colors.credit}30`
                    e.currentTarget.style.boxShadow = glowShadow(colors.credit, 0.3)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${colors.credit}15`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  YES
                </button>
                <button
                  onClick={() => handleAnswer('NO')}
                  className="flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    background: `${colors.tax}15`,
                    color: colors.tax,
                    border: `1px solid ${colors.tax}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${colors.tax}30`
                    e.currentTarget.style.boxShadow = glowShadow(colors.tax, 0.3)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${colors.tax}15`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  NO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="flex justify-center gap-3 mt-5">
        {breadcrumbs.length > 0 && (
          <button
            onClick={goBack}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: colors.oceanLight,
              color: colors.text.secondary,
              border: `1px solid ${colors.surfaceLight}`,
            }}
          >
            {'\u2190'} Back
          </button>
        )}
        {(breadcrumbs.length > 0 || result) && (
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: colors.oceanLight,
              color: colors.text.secondary,
              border: `1px solid ${colors.surfaceLight}`,
            }}
          >
            Start Over
          </button>
        )}
      </div>
    </div>
  )
}
